function addTodo() {
  const newTodoInput = document.getElementById("newTodo");
  const todoList = document.getElementById("todoList");
  const newTodoText = newTodoInput.value.trim();

  if (newTodoText !== "") {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
          <span>${newTodoText}</span>
          <button class="delete-btn" onclick="deleteTodo(this)">X</button>
      `;
    todoItem.addEventListener("click", () => {
      todoItem.classList.toggle("completed");
    });

    todoList.appendChild(todoItem);
    newTodoInput.value = "";
  }
}

function deleteTodo(btn) {
  const todoItem = btn.parentNode;
  todoItem.remove();
}
