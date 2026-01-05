document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value.trim();
    const convertAmount = parseInt(amount);

    const pin = document.getElementById("pin").value.trim();

    const mainBalance = document.getElementById("main-balance").innerText;
    const convertMainBalance = parseInt(mainBalance);
    if(amount === ''){
        alert('Enter Amount')
    }

    else if (pin === "") {
      alert("Enter Your Pin")
    } else if (pin === "1234") {
        const sum = convertMainBalance + convertAmount;
        document.getElementById("main-balance").innerText = sum; 
    } else {
      alert("Invalid PIN ")
    }
       // ✅ Clear form
    document.getElementById("amount").value = "";
    document.getElementById("pin").value = "";
    document.getElementById("account-number").value = "";
  });
