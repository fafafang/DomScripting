/*
    实现幻灯片
 */
function prepareSlideshow() {
    if (!document.getElementById ||
        !document.getElementsByTagName) return false;
    if (!document.getElementById("intro")) return false;
    let slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");
    let preview = document.createElement("img");
    preview.setAttribute("id", "preview");
    preview.setAttribute("src", "images/slideshow.png")
    preview.setAttribute("alt", "three bears");
    slideshow.appendChild(preview);
    let intro = document.getElementById("intro");
    insertAfter(slideshow, intro);
    let links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        link.onmouseover = function() {
            let url = this.href;
            if (url.indexOf('index.html') != -1) {
                moveElement("preview", 0, 0, 5)
            }
            if (url.indexOf('about.html') != -1) {
                moveElement("preview", -300, 0, 5);
            }
            if (url.indexOf('photos.html') != -1) {
                moveElement("preview", -600, 0, 5);
            }
            if (url.indexOf('episodes.html') != -1) {
                moveElement("preview", -900, 0, 5);
            }
            if (url.indexOf('contact.html') != -1) {
                moveElement("preview", -1200, 0, 5);
            }
        }
    }
}

addLoadEvent(prepareSlideshow)