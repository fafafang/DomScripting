function nextElement(node) {
   if (node.nodeType == 1) return node;//1: element 2: attribute 3: text
   if (node.nextSibling) return nextElement(node.nextSibling);
   return null;
}
function styleHeaderSiblings() {
   let headers = document.getElementsByTagName("h1");
   let elem;
   for (let i = 0; i < headers.length; i++) {
      elem = nextElement(headers[i].nextSibling);
      // elem.style.color = "green";// 使用style对象更改样式
      elem.className = "green";// 使用className更改class属性，这样做能将具体更改样式工作交给css，更能区分behavior和style
      // 当然还有通用的
      // elem.setAttribute("class", "green");
   }
}
window.onload = styleHeaderSiblings;
