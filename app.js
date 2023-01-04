//Selectors
const todoInput = document.querySelector("#write_todo");
const todoButton = document.querySelector(".fa-plus-square");
const todoList = document.querySelector(".todo-list");
const deleteTodo = document.querySelector(".fa-trash");
const filterBox = document.querySelector(".filter-select");
//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteItem);
filterBox.addEventListener("click", filterTarget);
//Functions
function addTodo (event){
    event.preventDefault();
//Create a div under the UL
   const newDiv = document.createElement("div");
// Create a class for div
   newDiv.classList.add("list");
   // Create li
   const listed_items = document.createElement("li");
   // Create class for li
   listed_items.classList.add("listedItems");
   listed_items.innerText=todoInput.value;
   // listed_items.innerText = "Help";
   newDiv.appendChild(listed_items);
   // Create check button
   const completeButton = document.createElement('button');
   completeButton.innerHTML="<i class='fas fa-check'></i>"
   // Give check button a classname
   completeButton.classList.add("combtn");
   newDiv.appendChild(completeButton);
   // Create check button
   const deleteButton = document.createElement('button');
   deleteButton.innerHTML="<i class='fas fa-trash'></i>"
   // give delete button a class name.
   deleteButton.classList.add('delbtn');
   newDiv.appendChild(deleteButton);
todoList.appendChild(newDiv);
todoInput.value=""
};
function deleteItem(e){
   const item = e.target;
   if(item.classList[0] ==="delbtn"){
      item.parentElement.remove();
   } 
  if(item.classList[0] === "combtn"){
   const todo = item.parentElement;
   todo.classList.toggle('completed');
  }
}
function filterTarget(e){
   const todos = todoList.childNodes;
   // console.log(`${todos}`)
   todos.forEach(function(todo){
      if(todo.nodeType !== Node.TEXT_NODE){
      let todoItem = todo.childNodes;
      console.log(`${todoItem}`)
      switch (e.target.value) {
         case "all":
         todo.style.display = "flex";
           break;
         case "completed":
            if(this.classList.contains("completed"))
         {
   todo.style.display = "flex";
      }
      else
      {
         todo.style.display = "none";
      }
      break;
      case "uncompleted":
        if (!this.classList.contains("completed")) {
          this.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
      }
}
    })
}




