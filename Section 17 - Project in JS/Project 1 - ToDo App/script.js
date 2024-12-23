document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("to-do-input");
  const addTask = document.getElementById("add-task");
  const todoList = document.getElementById("to-do-list");

  // 1 - adding a task in array
  // let tasks = [] // starting mai aisa tha

  // 5 - now once it gets into local storage pick from local storage and add in array
  // Get tasks from local storage, if any
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // 7 - loop chalana hoga task jo bhi array mai hai usse display karna ke liye jo ki renderTask mai jaayega aur show hoga
  //    Loop through tasks to display them on page load
  tasks.forEach((task) => renderTask(task)); // Corrected to call renderTask(task) with correct parameter

  // 2  Add a new task
  addTask.addEventListener("click", function () {
    let taskText = todoInput.value.trim(); // taaki extra space na le usi mai ajaya //Trim whitespace
    if (taskText === "") return; //Do nothing if input is empty

    // Create a new task object
    let newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask); // Add the task to the array;
    // 4
    saveTasks(); //  Save to local storage

    todoInput.value = ""; // clear input
    renderTask(newTask); // Display the new task
    console.log(tasks);
  });

  // 6 -- displaying task //render a task
  function renderTask(task) {
    // console.log(task);
    // 8 -
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    
    // Add completed class if the task is completed
    if (task.completed) li.classList.add("completed");
    li.innerHTML = ` <span>${task.text}</span>
            <button class="delete">Delete</button>`;

    // 9
    // Add event listener for the delete button
    li.querySelector(".delete").addEventListener("click", () => {
      deleteTask(task.id); // Delete the task from the array and local storage
      li.remove(); // Remove the task from the DOM
    });

    todoList.appendChild(li); // Append the task to the list
  }

  // 3 - handling local storage -- now once task is created in array we will add it in local storage
  //save tasks to local storage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks to local storage
    // json.stringify will convert json into string
  }

  // Delete a task
  function deleteTask(taskId) {
    tasks = tasks.filter((task) => task.id !== taskId); // Remove task from array using filter
    saveTasks(); // Save updated array to local storage
  }
});
