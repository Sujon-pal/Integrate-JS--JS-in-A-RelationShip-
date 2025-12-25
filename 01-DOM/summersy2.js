let newSection = document.getElementById("main-container");

let section = document.createElement("section");

let h2 = document.createElement("h2");
h2.innerText = "Section Six";
section.appendChild(h2);

let ulList = document.createElement("ul");

let item = ["Item 1", "Item 2", "Item 3", "Item 4"];

for (let n of item) {
  let li = document.createElement("li");
  li.innerText = n;
  ulList.appendChild(li);
}
section.appendChild(ulList);

newSection.appendChild(section);
