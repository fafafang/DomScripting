/*
    相对定位元素的绝对定位子元素坐标原点在该元素的左上角
 */
function prepareSlideshow() {
    if (!document.getElementById || !document.getElementsByTagName) return false;
    if (!document.getElementById("linkList")) return false;
    let slideshow = document.createElement("div");
    // 插入幻灯片区
    slideshow.setAttribute("id", "slideshow");
    let preview = document.createElement("img");
    preview.setAttribute("src", "images/topics.gif");
    preview.setAttribute("alt", "topics");
    preview.setAttribute("id", "preview");
    slideshow.appendChild(preview);
    let linkList = document.getElementById("linkList");
    insertAfter(slideshow, linkList);
    // 得到列表所有链接
    let links = document.getElementsByTagName("a");
    links[0].onmouseover = function() {
        moveElement("preview", -100, 0, 10);
    }
    links[1].onmouseover = function() {
        moveElement("preview", -200, 0, 10);
    }
    links[2].onmouseover = function() {
        moveElement("preview", -300, 0, 10);
    }
}
addLoadEvent(prepareSlideshow);