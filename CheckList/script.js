var num = 0;

function addItem() {
    // Retrive Data
    var data = document.getElementById('add').value;

    // Create new Item
    var tag = document.createElement("p"); // <p></p>
    tag.setAttribute('id', num);
    num++;

    var text = document.createTextNode(data);
    tag.appendChild(text); // <p>Data</p>
    tag.appendChild(getPlus());
    tag.appendChild(getRemove());

    // Add CSS
    tag.classList.add("grid-item");

    // Add item to list
    var element = document.getElementById("checkList");
    element.appendChild(tag); // <body> <p>TEST TEXT</p> </body>
}

function getPlus() {
    var img = document.createElement("img");
    img.setAttribute('id', num);
    num++;

    img.setAttribute('src', 'images/plus.svg');
    img.setAttribute('height', '25px;');
    img.setAttribute('width', '25px;');
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
    var temp = id - 2;
    var element = document.getElementById(temp);
    element.remove();
}
