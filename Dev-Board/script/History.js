// Get all the "completed" buttons
const completeButtons = document.querySelectorAll("#comp-Button");

// Get the history container
const historyContainer = document.getElementById("history");

const logContainer = document.getElementById("log-entries");

// Optional: get clear button
const clearBtn = document.getElementById("clear");

// Function to format time
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleString(); // Example: "1/8/2026, 2:45:12 PM"
}

// Loop through all completed buttons
completeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the card element
    const card = button.closest(".px-3.py-5"); // closest card container
    // Get the task title
    const taskTitle = card.querySelector("h3").innerText;

    // Create a new history entry
    const entry = document.createElement("p");
    entry.classList.add("bg-gray-100", "mt-2", "p-2", "rounded-lg", "text-gray-600", "text-sm");
    entry.innerHTML = `You have Complete The Task <strong>${taskTitle}</strong>  ${getCurrentTime()}`;

    // Append to history container
    logContainer.appendChild(entry);
    
  });
});

// Clear history functionality
clearBtn.addEventListener("click", () => {
  // Remove all appended entries except the original paragraph text
   logContainer.innerHTML = '';
});
