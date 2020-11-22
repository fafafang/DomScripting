/*
    unobtrusive javascript: 让js不引人瞩目
    object detection: 检查对象是否有效,方便向后兼容（backwards compatibility）
 */
window.onload = prepareLinks;
function prepareLinks() {
    if (!document.getElementsByTagName) return false;//方法也是对象
   let links = document.getElementsByTagName("a");
   for (let link of links) {
       if (link.getAttribute("class") == "popUp") {
           link.onclick = function() {
               popUp(link.href);
               return false;
           }
       }
   }
}
function popUp(url) {
    window.open(url, "popUp", "width='320', height='480'");
}