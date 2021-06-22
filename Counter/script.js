// Variables
var num = 0;
var counter;

// Counters
function add() {
    num++;
    document.getElementById('number').innerHTML = num;
}

function subtract() {
    num--;
    document.getElementById('number').innerHTML = num;
}

function autoAdd() {
    stop()
    counter = setInterval(add, 1000);
}

function autoSubtract() {
    stop()
    counter = setInterval(subtract, 1000);
}


// Other
function reset() {
    num = 0;
    stop()
    document.getElementById('number').innerHTML = num;
}

function stop() {
    clearInterval(counter)
}
