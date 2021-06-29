function addItem() {
    // Retrive Data
    var data = document.getElementById('add').value;

    // Create new Item
    var tag = document.createElement("p"); // <p></p>
    var text = document.createTextNode(data);
    tag.appendChild(text); // <p>Data</p>

    // Add CSS
    tag.classList.add("grid-item");

    // Add item to list
    var element = document.getElementById("checkList");
    element.appendChild(tag); // <body> <p>TEST TEXT</p> </body>
}
