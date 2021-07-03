var num = 0;

function addItem() {
    // Retrive Data
    var data = document.getElementById('add').value;

    if (data == "") {
        noInputAlert();
        return;
    }

    // Create new Item
    var tag = document.createElement("p"); // <p></p>
    tag.setAttribute('id', num);
    tag.setAttribute('contenteditable', 'false');
    num++;

    var text = document.createTextNode(data);
    tag.appendChild(text); // <p>Data</p>

    // Add CSS
    tag.classList.add("grid-item");

    // Add item to list
    var element = document.getElementById("checkList");
    element.appendChild(getPlus());
    element.appendChild(tag); // <body> <p>TEST TEXT</p> </body>
    element.appendChild(getRemove());
}

function getPlus() {
    var img = document.createElement("img");
    img.setAttribute('id', num);
    num++;

    img.setAttribute('src', 'images/plus.svg');
    img.setAttribute('height', '25px;');
    img.setAttribute('width', '25px;');
    img.setAttribute('onclick', 'editItem(this.id)');
    return img;
}

function getRemove() {
    var img = document.createElement("img");
    img.setAttribute('id', num);
    num++;

    img.setAttribute('src', 'images/remove.svg');
    img.setAttribute('height', '25px;');
    img.setAttribute('width', '25px;');
    img.setAttribute('onclick', 'removeItem(this.id)');
    return img;
}

function removeItem(id) {
    // Remove Text
    document.getElementById(id - 2).remove();

    // Remove edit button
    document.getElementById(id - 1).remove();

    // Remove this button
    document.getElementById(id).remove();

}

function editItem(id) {
    var element = document.getElementById(id - 1);

    if (element.getAttribute("contenteditable") == "false") {
        element.setAttribute('contenteditable', 'true');
        // element.contenteditable = true;
    } else {
        element.setAttribute('contenteditable', 'false');
        // element.contenteditable = false;
    }
}

function resetList() {
    document.getElementById('checkList').innerHTML = "";
}

function noInputAlert() {
    alert("Enter an Item!");
}
