"use strict";
const rows = document.querySelectorAll("tr");
rows.forEach((row)=>{
    const cloneCell = row.cells[1].cloneNode(true);
    row.cells[4].before(cloneCell);
});

//# sourceMappingURL=index.f75de5e1.js.map
