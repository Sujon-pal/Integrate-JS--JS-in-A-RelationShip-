// 📌📌📌  25-5 Dynamic style, getAttribute, setAttribute, innerText, innerHTML

//  Change color of CSS title <h1>
let cssTitle1 = document.getElementById("css-title");
cssTitle1.style.color = "green";
cssTitle1.style.fontSize = "30px";
// console.log(cssTitle1.getAttribute('id'))

// innerText
let js = document.getElementById("js-title");
let text = js.innerText;
// console.log(text)

// innerHTML

let css = document.getElementById("css-content");
let cssText = css.innerHTML;
// console.log(cssText)

// 📌📌📌 25-6 Styling dom properties, add and remove css class using JS

let sections = document.querySelectorAll("section");
for (let section of sections) {
  section.style.border = "2px solid red";
  section.style.marginBottom = "10px";
  section.style.borderRadius = "20px";
  section.style.padding = "10px";
}

let section = document.getElementById("js-title");
section.classList.add("text-color");
section.classList.remove("text-size"); // remove text size in css class

// 📌📌📌 25-7 NodeList, htmlcollection, parentNode, childnodes, createElement






