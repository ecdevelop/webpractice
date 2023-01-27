

function addItem(){

var txt = document.querySelector("item").value;

if(txt==""){
    alert("enter an item");
} else {
    var input = document.createTextNode(txt);

    var li = document.createElement("li");
    li.appendChild(input);
    
    var ul = document.querySelector("ullist");
    ul.appendChild(li);
}

}


