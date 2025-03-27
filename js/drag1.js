/*  
    Source: W3Schools - How to Make a Draggable Element  
    URL: https://www.w3schools.com/howto/howto_js_draggable.asp  
*/

// Make the DIV elements draggable
const elements = ["b1", "b2", "b3", "b4", "b5", "r1", "r2", "r3", "r4", "r5"];
elements.forEach(id => dragElement(document.getElementById(id)));

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
        // If present, the header is where you move the DIV from
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // Otherwise, move the DIV from anywhere inside it
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // Call a function whenever the cursor moves
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set the element's new position
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
