function stripeTables() {
    if (!document.getElementsByTagName) return false;
    let tables = document.getElementsByTagName("table");
    let odd, rows;
    for (let table of tables) {
        odd = false;
        rows = table.getElementsByTagName("tr");
        for (let row of rows) {
            if (odd) row.className = "odd";
            else row.className = "even";
            odd = !odd;
        }
    }
}
addLoadEvent(stripeTables);