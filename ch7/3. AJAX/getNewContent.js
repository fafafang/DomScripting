/*
    # request.open: 让对象指向服务器中的一个文件
    p1: http请求类型， 主要有GET, POST, SEND
    p2: url
    p3: 是否异步处理
    # readState: 一般配合onreadystatechange使用，嵌套于其匿名方法中
    0: uninitialized
    1: loading
    2: loaded
    3: interactive
    4: complete
 */
function getNewContent() {
    let request = getHTTPObject();
    if (request) {
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                let para = document.createElement("p");
                let txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                let newDiv = document.getElementById("new");
                newDiv.appendChild(para);
            }
        }
        request.send(null);
    }
    else {
        alert("Sorry, your browser don't support XMLHttpRequest");
    }
    // alert("Function Done");// 不异步时在手机浏览器打开alert窗口会较晚出现，电脑浏览器则差别不大
}

addLoadEvent(getNewContent);
