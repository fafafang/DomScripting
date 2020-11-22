/*
    attribute: cite
 */
function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement
    || !document.createTextNode) return false;
    let quotes = document.getElementsByTagName("blockquote");
    for (let quote of quotes) {
        if (!quote.getAttribute("cite")) continue;
        let link = document.createElement("a");
        let url = quote.getAttribute("cite");
        let linkTxt = document.createTextNode("source");
        link.setAttribute("href", url);
        link.appendChild(linkTxt);
        let superscript = document.createElement("sup");
        superscript.appendChild(link);
        // 得到blockquote标签中最后一个元素，再将superscript添加入其中
        let quoteChildren = quote.getElementsByTagName("*");
        let elem = quoteChildren[quoteChildren.length - 1];
        elem.appendChild(superscript);
    }
    return true;
}

addLoadEvent(displayCitations);
