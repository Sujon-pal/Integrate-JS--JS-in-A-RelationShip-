document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 🔴 VERY IMPORTANT

    const amount = document.getElementById("agent-amount").value;
    const pin = document.getElementById("cash-out-pin").value;
    const balanceEl = document.getElementById("main-balance");

    if(amount === ''){
        alert('Enter Amount')
    }

    else if (pin !== "1234" || pin === '') {
      alert("Invalid PIN");
      return;
    }

    const balance = Number(balanceEl.innerText);
    const cashAmount = Number(amount);

    if (cashAmount > balance) {
      alert("Insufficient balance");
      return;
    }

    balanceEl.innerText = balance - cashAmount;

    // ✅ Clear form
    document.getElementById("agent-amount").value = "";
    document.getElementById("cash-out-pin").value = "";
  });


  