var btn_add = document.getElementById('btn_add');

btn_add.onclick = function() {
var value = document.getElementById('input').value;
var h3 = document.createElement('h3');
var icon = document.createElement('i');
var div = document.createElement('div');

div.setAttribute('class','box')
icon.setAttribute('class','fa-solid fa-trash-arrow-up')

h3.innerHTML = value
var todo = document.getElementById('all-alerts');
todo.appendChild(div)
div.appendChild(h3)
div.appendChild(icon)

}
var icon = document.querySelector('i');
icon.addEventListener('onclick',(e) =>{
    var parent = e.target.parentElement;
    parent.remove()
})