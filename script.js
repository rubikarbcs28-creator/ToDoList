const taskInput = document.getElementById("taskInput");
const taskList  = document.getElementById("taskList");
const emptyMsg  = document.getElementById("emptyMsg");
const countEl   = document.getElementById("count");

// 1. Add a task dynamically
function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const checkBtn = document.createElement("button");
  checkBtn.className = "check-btn";
  checkBtn.textContent = "✓";
  checkBtn.title = "Mark as completed";
  checkBtn.onclick = function () { toggleTask(li); };

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "✕";
  deleteBtn.title = "Delete task";
  deleteBtn.onclick = function () { deleteTask(li); };

  li.appendChild(checkBtn);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
  updateInfo();
}

// 2. Update task status (completed / not completed)
function toggleTask(li) {
  li.classList.toggle("completed");
  updateInfo();
}

// 3. Remove a task from the list
function deleteTask(li) {
  li.remove();
  updateInfo();
}

// Update "tasks left" counter and empty message
function updateInfo() {
  const total = taskList.children.length;
  const done  = taskList.querySelectorAll("li.completed").length;
  const left  = total - done;
  countEl.textContent = left + (left === 1 ? " task left" : " tasks left");
  emptyMsg.style.display = total === 0 ? "block" : "none";
}

// Press Enter to add a task
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});
