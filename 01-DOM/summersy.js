let allLi = document.getElementsByTagName("li");
console.log(allLi);

let secondSection = document.getElementById("second-section");
secondSection.style.color = "red";
// console.log(secondSection.innerText)

//// ul কে ধরলাম
let ul = document.getElementById("second-item");
// নতুন li বানালাম
let li = document.createElement("li");

li.innerText = "Item 5";

// ul এর ভিতরে li

ul.appendChild(li);

let sections = document.querySelectorAll("section");
for (let section of sections) {
  section.style.border = "2px solid red";
  section.style.marginBottom = "10px";
  section.style.borderRadius = "20px";
  section.style.padding = "10px";
}
