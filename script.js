
var count = 0;
var labels = document.querySelectorAll('.row-number');
var labelsRight = document.querySelectorAll('.row-number-right');
var topLabels = document.querySelector(".labels-top");
var bottomLabels = document.querySelector(".labels-bottom");
var row = document.querySelector('.wrap');


for (var i = 9; i <= 16; i++) {
    drawLabels(topLabels, ".labels-top", "top-cell");
}
for (var i = 9; i <= 16; i++) {
    drawLabels(bottomLabels, ".labels-bottom", "bottom-cell");
}
for (var i = 1; i <= 8; i++) {
    drawLabels(labels, ".row-number", "cell");
}
for (var i = 1; i <= 8; i++) {
    drawLabels(labelsRight, ".row-number-right", "rotate");
}
for (var i = 1; i <= 8; i++) {
    drawRows(count++);
}
function drawLabels(name, selector, css) {
    name = document.createElement('div');

    switch (i) {
        case 9:
            name.innerHTML = "<h4>A</h4>";
            break;
        case 10:
            name.innerHTML = "<h4>B</h4>";
            break;
        case 11:
            name.innerHTML = "<h4>C</h4>";
            break;
        case 12:
            name.innerHTML = "<h4>D</h4>";
            break;
        case 13:
            name.innerHTML = "<h4>E</h4>";
            break;
        case 14:
            name.innerHTML = "<h4>F</h4>";
            break;
        case 15:
            name.innerHTML = "<h4>G</h4>";
            break;
        case 16:
            name.innerHTML = "<h4>H</h4>";
            break;
        default:
            name.innerHTML = "<h4>" + (i) + "</h4>";
            break;
    }
    name.classList.add(css);
    document.querySelector(selector).append(name);

}
function drawRows(count) {
    for (var i = 1; i <= 8; i++) {
        row = document.createElement('div');
        row.innerHTML = "<h3></h3>";
        if (count % 2 == 0) {
            row.classList.add("block-black");
        }
        else row.classList.add("block");
        document.querySelector(".wrap").append(row);
        count++;
    }
}

var item = document.querySelectorAll("h3");


for (var i = 0; i <= item.length - 1; i++) {
    switch (i) {

        case 0:
        case 7:
            item[i].classList.add("black");
        case 56:
        case 63:
            item[i].innerHTML = "&#9814";
            break;
        case 1:
        case 6:
            item[i].classList.add("black");
        case 57:
        case 62:
            item[i].innerHTML = "&#9816";
            break;
        case 2:
        case 5:
            item[i].classList.add("black");
        case 58:
        case 61:
            item[i].innerHTML = "&#9815";
            break;
        case 3:
            item[i].classList.add("black");
        case 59:
            item[i].innerHTML = "&#9812";
            break;
        case 4:
            item[i].classList.add("black");
        case 60:
            item[i].innerHTML = "&#9813";
            break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            item[i].classList.add("black");
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
            item[i].innerHTML = "&#9817";
            break;
        default: break;
    }

}

