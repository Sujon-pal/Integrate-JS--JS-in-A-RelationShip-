document
  .getElementById("addEventListener")
  .addEventListener("click", function changeColor() {
    // document.body.style.backgroundColor ='green'
    document.getElementById("addEventListener").style.backgroundColor = "green";
  });

//   🖍️  26-4 Integrate Event innerText and Text update by Event Event Handlers

document.getElementById("updateBtn").addEventListener("click", function () {
  const pageTitle = document.getElementById("page-Title");
  pageTitle.innerText = "Updated Text";
});

// <!-- Hanle input text -->

document.getElementById("update-btn").addEventListener("click", function () {
  const inputName = document.getElementById("inputName");
  const name = inputName.value;
  const updateName = document.getElementById('user-name');
  updateName.innerText = name
});
