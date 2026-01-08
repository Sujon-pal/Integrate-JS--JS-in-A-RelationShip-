const leftTask = document.getElementById("left-tasks");

const taskContainer = document.getElementById("task-container");

const allTask = taskContainer.children;

leftTask.innerText = allTask.length;

const compButtons = document.querySelectorAll("#comp-Button");

compButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    // Prevent double click
    if (button.disable) return;
    // Reduce task count
    let currentCount = parseInt(leftTask.innerText);
    leftTask.innerText = currentCount - 1;
    // update total task
    const countAllTasks = document.getElementById("count-all-tasks");
    // Get current number from the span (text → number)
    let totalTasks = parseInt(countAllTasks.innerText);
    // Increase total task count by 1
    totalTasks = totalTasks + 1;
    // update total value in UI
    countAllTasks.innerText = totalTasks;

    // Disable button
    button.disable = true;
    button.classList.add("bg-gray-400");
    button.classList.remove("bg-blue-700");
  });
});
