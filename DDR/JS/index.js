var notes = {107: 'l', 134: 'l', 160: 'l', 203: 'l', 229: 'l', 273: 'l', 302: 'l', 332: 'l', 372: 'r', 412: 'u', 463: 'd', 491: 'r', 509: 'u', 530: 'l', 567: 'u', 605: 'u', 645: 'r', 694: 'd', 720: 'l', 737: 'u', 761: 'r', 792: 'd', 836: 'u', 875: 'l', 924: 'd', 949: 'r', 965: 'u', 984: 'l', 997: 'd', 1030: 'd', 1062: 'l', 1090: 'd', 1111: 'r', 1149: 'd', 1153: 'l', 1194: 'd', 1224: 'l', 1253: 'd', 1294: 'l', 1327: 'u', 1350: 'r', 1388: 'l', 1423: 'd', 1452: 'r', 1481: 'l', 1516: 'l', 1542: 'l', 1583: 'l', 1615: 'l', 1654: 'l', 1683: 'l', 1715: 'l', 1756: 'r', 1799: 'u', 1851: 'd', 1876: 'r', 1893: 'u', 1912: 'l', 1945: 'd', 1989: 'r', 2029: 'u', 2081: 'd', 2109: 'r', 2125: 'u', 2158: 'l', 2181: 'd', 2223: 'r', 2262: 'u', 2311: 'l', 2337: 'd', 2352: 'r', 2365: 'u', 2390: 'd', 2411: 'l', 2452: 'r', 2483: 'l', 2509: 'd', 2537: 'r', 2565: 'u', 2583: 'l', 2606: 'd', 2639: 'l', 2677: 'u', 2707: 'r', 2738: 'd', 2766: 'u', 2797: 'l', 2811: 'd', 2827: 'r', 2841: 'u', 2872: 'd'}
var lefts = []
var ups = []
var downs = []
var rights = []
var frameCounter = 0;


function addLeft(){
    var newNote = document.createElement("div");
    newNote.setAttribute("class","leftNote");
    newNote.style.top = "500px"
    lefts.push(newNote);
    document.getElementById("game").appendChild(newNote);
}

function addRight(){
    var newNote = document.createElement("div");
    newNote.setAttribute("class","rightNote");
    newNote.style.top = "500px"
    rights.push(newNote);
    document.getElementById("game").appendChild(newNote);
}

function addUp(){
    var newNote = document.createElement("div");
    newNote.setAttribute("class","upNote");
    newNote.style.top = "500px"
    ups.push(newNote);
    document.getElementById("game").appendChild(newNote);
}

function addDown(){
    var newNote = document.createElement("div");
    newNote.setAttribute("class","downNote");
    newNote.style.top = "500px"
    downs.push(newNote);
    document.getElementById("game").appendChild(newNote);
}

function updateTop(n, i){
    var top = n.style.top;
    top = top.substring(0,top.length - 2);
    return (Number(top) + i).toString() + "px";
}

function getTop(n){
    var top = n.style.top;
    top = top.substring(0,top.length - 2);
    return Number(top)
}

function updateFrame(){
    var newNote = notes[frameCounter];
    if(newNote != undefined){
        switch (newNote){
            case 'l':
                addLeft();
                break;
            case 'r':
                addRight();
                break;
            case 'u':
                addUp();
                break;
            case 'd':
                addDown();
                break;
            default:
                break;
        }
    }
    for(const n of lefts){
        n.style.top = updateTop(n,-2);
    }
    for(const n of rights){
        n.style.top = updateTop(n,-2);
    }
    for(const n of ups){
        n.style.top = updateTop(n,-2);
    }
    for(const n of downs){
        n.style.top = updateTop(n,-2);
    }
    frameCounter++;
}

window.onkeydown = function(e){
    var key = e.key;
    if(key == "ArrowLeft"){
        if(getTop(lefts[0]) - 50 < 0){
            lefts.shift().style.display = "none";
        }
    }
    if(key == "ArrowRight"){
        if(getTop(rights[0]) - 50 < 0){
            rights.shift().style.display = "none";
        }
    }
    if(key == "ArrowUp"){
        if(getTop(ups[0]) - 50 < 0){
            ups.shift().style.display = "none";
        }
    }
    if(key == "ArrowDown"){
        if(getTop(downs[0]) - 50 < 0){
            downs.shift().style.display = "none";
        }
    }
    console.log(notes);
}
setInterval(updateFrame, 1000/60);