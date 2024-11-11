let inputButton = document.querySelector("button");
let taskList = document.querySelector("ul");
let taskText;

inputButton.addEventListener("click", () => {
  taskText = document.querySelector("#taskInput").value;
  const newTask = document.createElement("li");
  
  newTask.className = "p-5 border rounded-md bg-gray-200 flex flex-col gap-6 ";
  newTask.textContent = taskText;
  taskList.appendChild(newTask);

  const completeBtn = document.createElement("button");
  newTask.appendChild(completeBtn);
  completeBtn.textContent = "complete";
  completeBtn.className = "ml-2 px-3 py-1 bg-green-500 text-white rounded";
  completeBtn.addEventListener("click", () => {
    newTask.classList.toggle("completed");
  });
  const unCompleteBtn = document.createElement("button");
  newTask.appendChild(unCompleteBtn);
  unCompleteBtn.textContent = "unComplete";
  unCompleteBtn.className = "ml-2 px-3 py-1 bg-blue-500 text-white rounded";
  unCompleteBtn.addEventListener("click", () => {
    newTask.classList.toggle("completed");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "ml-2 px-3 py-1 bg-red-500 text-white rounded";
  deleteButton.onclick = () => newTask.remove();
  newTask.appendChild(deleteButton);

  document.querySelector("#taskInput").value = "";
});
