/*
    接收图片链接，在指定区域显示该图片
 */
function showPic(whichPic) {
    let source = whichPic.getAttribute("href");
    let placeholder = document.getElementById("placeholder")
    placeholder.setAttribute("src", source);
    let description = document.getElementById("description");
    let text = whichPic.getAttribute("title");
    description.firstChild.nodeValue = text;
    return true;
}

/*
    实现点击缩略图，在指定区域显示相关图片
 */
function prepareGallery() {
    let gallery = document.getElementById("imageGallery");
    let links = gallery.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        link.onclick = function() {
            return !showPic(this);
        }
    }
}

/*
    显示相应图片说明
 */
function preparePlaceholder() {
    let placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/pic1.jpg");
    placeholder.setAttribute("width", "600");
    placeholder.setAttribute("height", "320");
    let description = document.createElement("p");
    description.setAttribute("id", "description");
    let descText = document.createTextNode("Choose a picture.");
    description.appendChild(descText);
    let gallery = document.getElementById("imageGallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);