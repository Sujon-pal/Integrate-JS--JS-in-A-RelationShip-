let liCollection = document.getElementsByTagName("li");
// console.log(liCollection)
for (let li of liCollection) {
  // console.log(li) // Full DOM object
//   console.log(li.innerText); // Text only
  // console.log(li.style) //CSS styles
}
// Change text color of all <li>
for (let li of liCollection) {
//   li.style.color = "green";
}
// Add text to each <li>
for (let li of liCollection) {
//   li.innerText = li.innerText + " ✔";
}
// Change all list item text:
for (let li of liCollection) {
//   li.innerText = "Item changed";
}

let HeaddingCollection = document.getElementsByTagName("h1");
for (let h of HeaddingCollection) {
  console.log(h.innerText);
}

let cssTopic = document.getElementsByClassName("css-topic");
for (let css of cssTopic) {
    css.innerText = css.innerText + " ✔";
    css.style.color = 'blue'
    console.log(css.innerText)
}


let cssTitle = document.getElementById('css-title');
cssTitle.style.color = 'red';
// cssTitle.style.fontSize = '30px';
// cssTitle.style.backgroundColor = 'yellow';
console.log(cssTitle.innerText)