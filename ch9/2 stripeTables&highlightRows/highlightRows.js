function highlightRows() {
    if (!document.getElementsByTagName) return false;
    let rows = document.getElementsByTagName("tr");
    for (let row of rows) {
        row.onmouseover = function() {
            row.style.fontWeight = "bold";
        }
        row.onmouseout = function() {
            row.style.fontWeight = "normal";
        }
    }
}
addLoadEvent(highlightRows);