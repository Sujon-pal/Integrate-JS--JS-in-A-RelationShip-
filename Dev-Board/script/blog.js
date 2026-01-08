document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("quession").addEventListener("click", function () {
    window.location.href = "blog.html";
  });

  const backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", function (e) {
      console.log("ok"); // now this works
      window.location.href = "index.html";
    });
  }
});
