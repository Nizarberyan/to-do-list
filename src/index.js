let inputButton = document.querySelector("button");
let taskList = document.querySelector("ul");
let taskText;

inputButton.addEventListener("click", () => {
  taskText = document.querySelector("#taskInput").value;
  const newTask = document.createElement("li");
  const newTaskText = document.createElement("p");
  newTask.className = "p-5 border rounded-md bg-gray-200 flex flex-col gap-6 ";
  newTaskText.textContent = taskText;
  newTaskText.className = "text-center bg-gray-100 p-4 rounded-md";
  if (newTaskText.textContent == "eat") {
    window.alert("You Shouldn't put this on a to-do list app");
    window.open(
      "https://www.simplyrecipes.com/recipes/beef_wellington/",
      "_blank"
    );
  }
  taskList.appendChild(newTask);
  newTask.append(newTaskText);

  const completeBtn = document.createElement("button");
  newTask.appendChild(completeBtn);
  completeBtn.textContent = "complete";
  completeBtn.className = "ml-2 px-3 py-1 bg-green-500 text-white rounded";
  completeBtn.addEventListener("click", () => {
    newTaskText.classList.toggle("completed");
  });
  const unCompleteBtn = document.createElement("button");
  newTask.appendChild(unCompleteBtn);
  unCompleteBtn.textContent = "unComplete";
  unCompleteBtn.className = "ml-2 px-3 py-1 bg-blue-500 text-white rounded";
  unCompleteBtn.addEventListener("click", () => {
    if (newTaskText.classList.contains("completed")) {
      newTaskText.classList.toggle("completed");
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "ml-2 px-3 py-1 bg-red-500 text-white rounded";
  deleteButton.onclick = () => newTask.remove();
  newTask.appendChild(deleteButton);

  document.querySelector("#taskInput").value = "";
});
