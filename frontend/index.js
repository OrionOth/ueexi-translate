const { ipcRenderer } = require("electron");
function id(e) { return document.getElementById(e) }

Array.from(document.querySelectorAll('.sidebar-item')).forEach(e => {
    if(!e.getAttribute("data-ref")) return;
    e.addEventListener("click", () => {
        Array.from(document.querySelectorAll(".page")).forEach(e => e.style.display = "none")
        if(id(e.getAttribute("data-ref"))) { // this requires naming them specifically but idk how else to do it
            id(e.getAttribute("data-ref")).style.display = "block"
        }
    })
})