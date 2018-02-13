function addNewList() {
    alert('hello world alert!');
    console.log('hello world console');
}

function addListItem() {
    console.log('hello world');
    var list = document.getElementById("grocery-list");
    var itemInput = document.getElementById("new-list-item");
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}

function deleteListItem(item) {
        item.parentNode.removeChild(item);
}


function completeListItem(item) {
    if (item.checked) {
        item.parentNode.style.textDecoration = "line-through";
    } else {
        item.parentNode.style.textDecoration = "none";
    }
}
