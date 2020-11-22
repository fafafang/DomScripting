/*
    # old-school techniques: document.write, innerHTML
    document.write: 违反了unobtrusive javascript，不能将结构（html）、行为（behavior）、风格（style）区分开
    innerHTML: 依赖于html，很多时候可以用dom代替，只有在需要操作大量html代码块时才有必要使用
 */
window.onload =  function() {
    let testDiv = document.getElementById("testDiv");
    // alert(testDiv.innerHTML);//标签内的所有html
    testDiv.innerHTML = "<p>I inserted <em>this</em> content";
}