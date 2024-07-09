function addTodo(){
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();
    console.log(todoText);
    
    if(todoText === ""){
        alert("Please enter a task");
        return;
    }
    const todoList = document.getElementById("todo-list");
    const todoItem = document.createElement("li");
    todoItem.style.listStyle = "none";
    todoItem.style.padding = "15px 10px";
    todoItem.style.display = "flex";
    todoItem.style.justifyContent = "space-between";
    todoItem.style.alignItems = "center";


    const todoTextElement = document.createElement("span");
    todoTextElement.textContent = todoText;
    
    todoItem.appendChild(todoTextElement);
    todoList.appendChild(todoItem);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.style.padding = "10px 15px";
    deleteButton.style.background = "black";
    deleteButton.style.color = "white";
    deleteButton.style.border = "none";
    deleteButton.onclick = function() {
        todoList.removeChild(todoItem);
    };

  

    todoItem.appendChild(deleteButton);
    console.log(todoItem);

    todoInput.value = "";




}