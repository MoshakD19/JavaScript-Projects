const array = [];

function main(id) {
    var num = document.getElementById(id).innerHTML;
    if (array.length == 0) {
        document.getElementById("screen").innerHTML = num;
        array[0] = num;
    } else if (array.length == 0 && num == 0) {
        return;
    } else if (array.length == 1) {
        document.getElementById("screen").innerHTML += num;
        array[0] = document.getElementById("screen").innerHTML;
    } else if (array.length == 2) {
        document.getElementById("screen").innerHTML = num;
        array[2] = num;
    } else if (array.length == 3) {
        document.getElementById("screen").innerHTML += num;
        array[2] = document.getElementById("screen").innerHTML;
    }
}


function plus() {
    if (array.length == 1) {
        array[1] = "+";
    } else if (array.length == 3) {
        equals();
        array.length = 0;
        array[0] = document.getElementById('screen').innerHTML;
        array[1] = "+";
    }
}

function subtract() {
    if (array.length == 1) {
        array[1] = "-";
    } else if (array.length == 3) {
        equals();
        array.length = 0;
        array[0] = document.getElementById('screen').innerHTML;
        array[1] = "-";
    }
}

function multiply() {
    if (array.length == 1) {
        array[1] = "x";
    } else if (array.length == 3) {
        equals();
        array.length = 0;
        array[0] = document.getElementById('screen').innerHTML;
        array[1] = "x";
    }
}

function divide() {
    if (array.length == 1) {
        array[1] = "/";
    } else if (array.length == 3) {
        equals();
        array.length = 0;
        array[0] = document.getElementById('screen').innerHTML;
        array[1] = "/";
    }
}

function equals() {
    if (array.length == 1 || array.length == 2) {
        document.getElementById("screen").innerHTML = array[0];
    } else if (array[1] == "+" && array.length == 3) {
        var num1 = parseInt(array[0]);
        var num2 = parseInt(array[2]);
        document.getElementById("screen").innerHTML = num1 + num2;
    } else if (array[1] == "-" && array.length == 3) {
        var num1 = parseInt(array[0]);
        var num2 = parseInt(array[2]);
        document.getElementById("screen").innerHTML = num1 - num2;
    } else if (array[1] == "x" && array.length == 3) {
        var num1 = parseInt(array[0]);
        var num2 = parseInt(array[2]);
        document.getElementById("screen").innerHTML = num1 * num2;
    } else if (array[1] == "/" && array.length == 3) {
        var num1 = parseInt(array[0]);
        var num2 = parseInt(array[2]);
        document.getElementById("screen").innerHTML = num1 / num2;
    }
    array.length = 0;
}

function allClear() {
    array.length = 0;
    document.getElementById("screen").innerHTML = '0';
}
