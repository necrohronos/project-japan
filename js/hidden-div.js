function showDiva(event) {
    event.preventDefault();
    document.getElementById("jp-tour").style.display = "block";
    document.getElementById("arrow1a").onclick = "hideDiva";
    document.getElementById("arrow1b").className = "fa fa-caret-up";
}
function hideDiva(event) {
    event.preventDefault();
    document.getElementById("jp-tour").style.display = "none";
}
function showDivb(event) {
    event.preventDefault();
    document.getElementById("jp-gov").style.display = "block";
    document.getElementById("arrow2a").onclick = "hideDivb";
    document.getElementById("arrow2b").className = "fa fa-caret-up";
}
function hideDivb(event) {
    event.preventDefault();
    document.getElementById("jp-gov").style.display = "none";
}