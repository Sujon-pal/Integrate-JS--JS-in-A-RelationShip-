
  // Get the theme button
  const themeBtn = document.getElementById("theme-btn");

  // Get the body tag
  const body = document.body;

  // List of background colors
  const colors = [
    "bg-slate-300",
    "bg-gray-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-purple-300",
    "bg-pink-300",
  ];

 // This variable keeps track of current color index
  let index = 0;

  // Add click event
  themeBtn.addEventListener("click", function () {

    // Remove all previous background colors
    body.classList.remove(...colors);

    // Add current background color
    body.classList.add(colors[index]);

    // Go to next color
    index = (index + 1) % colors.length;
  });

