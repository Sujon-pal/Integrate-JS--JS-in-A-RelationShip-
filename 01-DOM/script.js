let liCollection = document.getElementsByTagName("li");
// console.log(liCollection)
for (let li of liCollection) {
  // console.log(li) // Full DOM object
  console.log(li.innerText); // Text only
  // console.log(li.style) //CSS styles
}
// Change text color of all <li>
for (let li of liCollection) {
  li.style.color = "green";
}
// Add text to each <li>
for (let li of liCollection) {
  li.innerText = li.innerText + " ✔";
}
// Change all list item text:
for (let li of liCollection) {
  li.innerText = "Item changed";
}
