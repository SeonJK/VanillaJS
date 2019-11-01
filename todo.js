const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function loadToDOs(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        
    }
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintToDo(currentValue);
}

function init(){
    loadToDOs();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();