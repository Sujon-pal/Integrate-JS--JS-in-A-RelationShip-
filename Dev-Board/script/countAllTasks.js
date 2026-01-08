const countAllTasks = document.getElementById("count-all-tasks");
// Get current number from the span (text → number)
let totalTasks = parseInt(countAllTasks.innerText);
// Increase total task count by 1
totalTasks = totalTasks + 1;
// update total value in UI
countAllTasks.innerText = totalTasks;
