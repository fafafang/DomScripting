function showPic(whichPic) {
        let source = whichPic.getAttribute("href");
        let placeholder = document.getElementById("placeholder");
        placeholder.setAttribute("src", source);
        let text = whichPic.getAttribute("title");
        let description = document.getElementById("description");
        //=childNodes[0], lastChild=childNodes[childNodes.length-1]
        description.firstChild.nodeValue = text;
}

function countBodyChildren() {
        let body = document.getElementsByTagName("body")[0];
        alert(body.childNodes.length);
}

function showBodyChildren() {
        let body = document.getElementsByTagName("body")[0];
        //in-properties of-values
        for(let e of body.childNodes) {
                //nodeType: 1.element 2.attribute 3.text
                console.log(e.tagName + " " + e.nodeType);
        }
}

// 网页加载后执行
// window.onload = countBodyChildren;
// window.onload = showBodyChildren;
