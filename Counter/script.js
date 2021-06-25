// Variables
var num = 0;
var amount = 0;
var counter;

// Counters
function add() {
    amount = document.getElementById('amount').value;
    let plus = parseInt(amount);
    num = num + plus;
    document.getElementById('number').innerHTML = num;
}

function subtract() {
    amount = document.getElementById('amount').value;
    let minus = parseInt(amount);
    num = num - minus;
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
