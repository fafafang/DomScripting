/*
    添加页面加载完成后进行的一系列操作，也可以使用如下方式
    window.onload = function() {
        func1();
        func2();
        ...
   }
   不过面对多个html文件关联多个js文件情况比较时麻烦，
   因为不好处理先后顺序，还要注意会不会覆盖掉需要的不同js文件中方法
 */
function addLoadEvent(func) {
    let oldFunc = window.onload; if (typeof oldFunc != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldFunc();
            func();
        }
    }
}

/*
    将新节点插入到目标节点后
 */
function insertAfter(newElement, targetElement) {
    let parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

/*
    在不覆盖原有类的前提下添加类
 */
function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        element.className += " " + value;
    }
}

/*
    对导航栏中指向当前地址的项目进行高亮
 */
function highlightPage() {
    if (!document.getElementsByTagName) return;
    let headers = document.getElementsByTagName("header");
    if (headers.length == 0) return;
    let navs = headers[0].getElementsByTagName("nav");
    if (navs.length == 0) return;
    let links = navs[0].getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        let url = link.getAttribute("href");
        if (window.location.href.indexOf(url) != -1) {
            link.className = "here";
            document.body.id = link.lastChild.nodeValue.toLowerCase();
        }
    }
}

/*
    移动元素，最基础的js动画
 */
function moveElement(elemId, finalX, finalY, interval) {
    if (!document.getElementById) return;
    if (!document.getElementById(elemId)) return;
    let elem = document.getElementById(elemId);
    if (elem.movement) clearTimeout(elem.movement);
    if (!elem.style.left) elem.style.left = "0px";
    if (!elem.style.top) elem.style.top = "0px";
    let posX = parseInt(elem.style.left);
    let posY = parseInt(elem.style.top);
    let dest = 0;
    if (posX < finalX) {
        dest = Math.ceil((finalX - posX) / 10);
        posX += dest;
    }
    if (posX > finalX) {
        dest = Math.ceil((posX - finalX) / 10);
        posX -= dest;
    }
    if (posY < finalY) {
        dest = Math.ceil((finalY - posY) / 10);
        posX += dest;
    }
    if (posY > finalY) {
        dest = Math.ceil((posY - finalY) / 10);
        posX -= dest;
    }
    elem.style.left = posX + "px";
    elem.style.top = posY + "px";
    let repeat = "moveElement('" + elemId + "'," + finalX + "," +
        finalY + "," + interval + ")";
    elem.movement = setTimeout(repeat, interval);
}

/*
    显示所选部分/隐藏没有选择的部分
 */
function showSection(id) {
    if (!document.getElementsByTagName) return;
    let sections = document.getElementsByTagName("section");
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        if (section.getAttribute("id") != id) {
            section.style.display = "none"
        } else {
            section.style.display = "block";
        }
    }
}

/*
    实现点击显示相应部分
 */
function prepareInternalNav() {
    if (!document.getElementsByTagName) return;
    let articles = document.getElementsByTagName("article");
    if (articles.length == 0) return;
    let navs = articles[0].getElementsByTagName("nav");
    if (navs.length == 0) return;
    let links = navs[0].getElementsByTagName("a");
    if (links.length == 0) return;
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        let sectionId = link.getAttribute("href").split("#")[1];
        document.getElementById(sectionId).style.display = "none";
        link.destination = sectionId;
        link.onclick = function () {
            showSection(this.destination);
            return;
        }
    }
}

/*
    条纹化表格/让表格邻接行样式不同让表格更直观、更容易观看
 */
function stripeTables() {
    if (!document.getElementsByTagName) return;
    let tables = document.getElementsByTagName("table");
    if (tables.length == 0) return;
    for (let i = 0; i < tables.length; i++) {
        let table = tables[i];
        let rows = table.getElementsByTagName("tr");
        let odd = false;
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            if (odd) addClass(row, "oddRow");
            odd = !odd;
        }
    }
}

/*
    突出鼠标位于的一行，便于观看表格
 */
function highlightRows() {
    if (!document.getElementsByTagName) return;
    let rows = document.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        row.oldClassName = row.className;
        row.onmouseover = function () {
            addClass(this, "highlight");
        }
        row.onmouseout = function () {
            row.className = row.oldClassName;
        }
    }
}

/*
    显示缩写表
 */
function displayAbbreviations() {
    if (!document.getElementsByTagName) return;
    if (!document.createElement ||
        !document.createTextNode) return;
    let abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length == 0) return;
    let header = document.createElement("h2");
    let headerText = document.createTextNode("Abbreviations");
    header.appendChild(headerText);
    let dList = document.createElement("dl");
    for (let i = 0; i < abbreviations.length; i++) {
        let abbr = abbreviations[i];
        let dTitle = document.createElement("dt");
        let dTitleText = document.createTextNode(abbr.lastChild.nodeValue);
        dTitle.appendChild(dTitleText);
        let desc = document.createElement("dd");
        let descText = document.createTextNode(abbr.getAttribute("title"));
        desc.appendChild(descText);
        dList.appendChild(dTitle);
        dList.appendChild(desc);
    }
    let article = document.getElementsByTagName("article")[0];
    article.appendChild(header);
    article.appendChild(dList);
}

/*
    实现点击标签后焦点位于标签关联的输入框，现代浏览器已经实现
 */
function focusLabels() {
    let labels = document.getElementsByTagName("label");
    if (labels.length == 0) return;
    for (let i = 0; i < labels.length; i++) {
        let label = labels[i];
        if (!label.getAttribute("for")) continue;
        let elemId = label.getAttribute("for");
        if (!document.getElementById(elemId)) continue;
        let elem = document.getElementById(elemId);
        elem.focus();
    }
}

/*
    实现提示，现代浏览器已经实现
 */
function resetFields(whichForm) {
    if (Modernizr.input.placeholder) return;
    // 因为处理对象是form，所以直接使用html-dom就好了
    let elements = whichForm.elements;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element.type == "submit") continue;
        // html-dom 和 dom两种方式获取属性在浏览器中实现不同，所以需要同时使用
        let check = element.placeholder || element.getAttribute("placeholder");
        if (!check) continue;
        element.onfocus = function () {
            let text = element.placeholder || element.getAttribute("placeholder");
            if (this.value == text) {
                this.className = "";
                this.value = "";
            }
        }
        element.onblur = function () {
            if (this.value == "") {
                this.className = "placeholder";
                this.value = element.placeholder || element.getAttribute("placeholder");
            }
        }
        element.onblur();
    }
}

/*
    为表单设置操作
 */
function prepareForms() {
    let forms = document.getElementsByTagName("form");
    if (forms.length == 0) return;
    for (let i = 0; i < forms.length; i++) {
        let form = forms[i];
        resetFields(form);
        form.onsubmit = function () {
            if (!validateForm(this)) return false;
            let article = document.getElementsByTagName("article")[0];
            if (submitFormWithAjax(this, article)) return false;
            return true;
        }
    }
}

/*
    检查输入框是否为空
 */
function isFilled(field) {
    if (field.value.replace(" ", "").length == 0) return false;
    let placeholder = field.placeholder || field.getAttribute("placeholder");
    return (field.value != placeholder);
}

/*
    检查邮箱输入框内容是否格式正确
 */
function isEmail(field) {
    return field.value.indexOf("@") && field.value.indexOf(".");
}

/*
    检查表单数据是否有效
 */
function validateForm(whichForm) {
    for (let i = 0; i < whichForm.elements.length; i++) {
        let element = whichForm.elements[i];
        if (element.getAttribute("required")) {
            if (!isFilled(element)) {
                alert("Please fill in the " + element.name + " field")
                return false;
            }
        }
        if (element.type == "email") {
            if (!isEmail(element)) {
                alert("The " + element.name + " field must be a valid email address");
                return false;
            }
        }
    }
    return true;
}

/*
    生成ajax request对象
 */
function getHttpObject() {
    if (typeof XMLHttpRequest == undefined) {
        XMLHttpRequest = function() {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {}
        }
    }
    return new XMLHttpRequest();
}

/*
    显示加载过程图片
 */
function displayAjaxLoading(element) {
    // 移除所有子节点
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
    // 显示加载gif
    let loadingPic = document.createElement("img");
    loadingPic.setAttribute("src", "images/loading.gif");
    loadingPic.setAttribute("alt", "loading");
    element.appendChild(loadingPic);
}

/*
    以ajax方式提交表单
 */
function submitFormWithAjax(form, target) {
    let request = getHttpObject();
    if (!request) return false;
    displayAjaxLoading(target);
    let dataParts = [];
    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        dataParts.push(element.name + " " + encodeURIComponent(element.value));
    }
    let data = dataParts.join("&");
    request.open("post", form.getAttribute("action"), true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                let matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
                if (matches.length > 0) {
                    target.innerHTML = matches[1];
                } else {
                   target.innerHTML = '<p>Oops, there was an error. Sorry.</p>';
                }
            } else {
                   target.innerHTML = "<p>" + request.statusText + "</p>";
            }
        }
    }
    request.send(data);
    return true;
}



addLoadEvent(highlightPage)
addLoadEvent(prepareInternalNav);
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);
addLoadEvent(focusLabels);// 现代浏览器已实现
addLoadEvent(prepareForms);// 现代浏览器已实现