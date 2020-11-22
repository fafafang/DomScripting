/*
    用ch5的知识优化imageGallery, 注意逐渐增强(progressive enhancement), content+structure+style/behavior
    尽可能消除所有对html标签的猜测，让js能够平稳退化(degrade gracefully)，虽然实际情况并不需要这样
    dom core与dom-html
 */
window.addLoadEvent(prepareGallery);
/*
    添加多个页面载入后执行的函数，不过对于实现目标有点overkill了
 */
function addLoadEvent(func) {
    let oldOnload = window.onload;
    if (typeof oldOnload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function() {
            oldOnload();
            func();
        };
    }
}
function prepareGallery() {
    //object detection
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imageGallery")) return false;
    let gallery = document.getElementById("imageGallery");
    let links = gallery.getElementsByTagName("a");
    for (let link of links) {
        link.onclick = function() {
           return !showPic(this);//成功更换照片后点击链接不会跳转
        }
        //在有些浏览器onkeypress在按下tab键时也能触发，而onclick也能够支持key access,因此最好不要用
        // link.onkeypress = link.onclick;
    }
}
/*
    如果存在placeholder则返回true更换照片
*/
function showPic(whichPic) {
    if (!document.getElementById("placeholder")) return false;
    let source = whichPic.getAttribute("href");//dom core
    // let source = whichPic.href;
    let placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;//nodeName大写
    placeholder.setAttribute("src", source);
    //placeholder.src = source;
    //当nodeValue为null时即为空时显示为空字符串
    let text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
    if (document.getElementById("description")) {
        let description = document.getElementById("description");
        if (description.firstChild.nodeType != 3) return false;
        description.firstChild.nodeValue = text;
    }
    return true;
}
/*
    placeholder和description元素对于不支持dom的浏览器来说是没意义的
    我们想让这些元素在有意义时出现，也就是说在有意义时才插入这些元素到html文件中
    因此，在下一章，我们将会介绍元素的创建和插入
 */