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



//  Change color of CSS title <h1>
let cssTitle1 = document.querySelector('#css-title');
cssTitle1.style.color = 'green';
cssTitle.style.fontSize = '30px';

//  Highlight all CSS topics <li>
let cssTopics = document.querySelectorAll('.css-topic');
cssTopics.forEach(li => {
    li.style.color = 'red';
    li.style.fontWeight = 'bold';
});

//  Change color of JavaScript <li> containing "DOM"
let jsLi = document.querySelectorAll('#js-title + ul li');
jsLi.forEach(li => {
    if(li.innerText === 'DOM'){
        li.style.color = 'green';
        li.style.fontSize = '20px';
    }
});

//  Log all HTML topics <li>
let htmlLi = document.querySelectorAll('.html-title + ul li');
htmlLi.forEach(li => console.log(li.innerText));



