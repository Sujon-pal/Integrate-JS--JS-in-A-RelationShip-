document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const acountNumber = document.getElementById("acount-num").value.trim();
    const pin = document.getElementById("pin").value.trim();

    if (acountNumber.length === 11) {
      if (pin === "1234") {
        console.log("yes");
      } else {
        console.log("no");
      }
    } else {
      console.log("Enter Valid Acount Number");
    }
  });
