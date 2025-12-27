document.getElementById("post-btn").addEventListener("click", function () {
  const commentText = document.getElementById("comment-text");
  newComment = commentText.value;

  const commentContainer = document.getElementById("comment-container");

  const commentElement = document.createElement("p");
  commentElement.innerText = newComment;
  commentElement.classList.add("comment");
  commentContainer.appendChild(commentElement);
  commentText.value = "";
});
