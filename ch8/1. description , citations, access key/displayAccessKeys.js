/*
    # access key
    alt + accesskey可以跳转链接
 */
function displayAccessKeys() {
    if (!document.getElementsByTagName || !document.createElement
    || !document.createTextNode) return false;
    let links = document.getElementsByTagName("a");
    let texts = {};
    for (let link of links) {
        if (!link.getAttribute("accesskey")) continue;
        let key = link.getAttribute("accesskey");
        texts[key] = link.lastChild.nodeValue;
    }
    let list = document.createElement("ul");
    for (let key in texts) {
        // create list item
        let item = document.createElement("li");
        let itemText = document.createTextNode(key + ": " + texts[key]);
        item.appendChild(itemText);
        list.appendChild(item);
    }
    let header = document.createElement("h3");
    let headerText = document.createTextNode("AccessKeys");
    header.appendChild(headerText);
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(header);
    body.appendChild(list);
}
addLoadEvent(displayAccessKeys);