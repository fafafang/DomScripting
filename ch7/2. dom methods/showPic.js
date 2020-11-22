/*
    # dom methods: createElement, createTextNode, appendChild, insertBefore
    # properties: parentNode, nextSibling
    # self-made methods: insertAfter
    # document fragment: 没有连上web文档节点树的节点
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
function insertAfter(newElement, targetElement) {
    let parent = targetElement.parentNode;
    if (targetElement == parent.lastChild) {
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
function preparePlaceholder() {
    //object detection
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById("imageGallery")) return false;
    let placeholder = document.createElement("img");
    // placeholder.src
    placeholder.setAttribute("src", "images/placeholder.jpg");
    placeholder.setAttribute("id", "placeholder");
    // placeholder.alt
    placeholder.setAttribute("alt", "placeholder");
    // placeholder.width
    placeholder.setAttribute("width", "400");
    // placeholder.height
    placeholder.setAttribute("height", "300");
    let description = document.createElement("p");
    description.setAttribute("id", "description");
    let desTxt = document.createTextNode("Choose a picture");
    description.appendChild(desTxt);
    let gallery = document.getElementById("imageGallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
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
           return !showPic(this);
        }
    }
}
function showPic(whichPic) {
    if (!document.getElementById("placeholder")) return false;
    let source = whichPic.getAttribute("href");//dom core
    // let source = whichPic.href;
    let placeholder = document.getElementById("placeholder");
    // if (placeholder.nodeName != "IMG") return false;//nodeName大写
    placeholder.setAttribute("src", source);
    //placeholder.src = source;
    if (!document.getElementById("description")) return false;
    //当nodeValue为null时即为空时显示为空字符串
    let text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
    if (document.getElementById("description")) {
        let description = document.getElementById("description");
        if (description.firstChild.nodeType != 3) return false;
        description.firstChild.nodeValue = text;
    }
    return true;
}
window.addLoadEvent(preparePlaceholder);
window.addLoadEvent(prepareGallery);
