
  function updateDateTime() {
    const now = new Date();

    // Day names
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = days[now.getDay()];

    // Date
    const date = now.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    // Time
    const time = now.toLocaleTimeString("en-US");

    // DOM update
    document.getElementById("day").innerText = day;
    document.getElementById("date").innerText = date;
    document.getElementById("time").innerText = time;
  }

  // Call immediately
  updateDateTime();

  // Update every second (real time)
  setInterval(updateDateTime, 1000);
