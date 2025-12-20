// 📌📌📌 Create HTML elements using Javascript and appendChild


// 🖍️ Example - 1
// where to add
let cssList = document.getElementById("css-content");

// what to be added
let li = document.createElement("li");
li.innerText = "Footer";

// add the chile
cssList.appendChild(li);


// 🖍️ Example - 2 [ Create Section ]

//  where to add
let addsection = document.getElementById('main-container');

//  what to add
let section = document.createElement('section');

//  create h1
let h1 = document.createElement('h1');
h1.innerText = 'My Skill';

//  add h1 inside section
section.appendChild(h1);

// create ul
let ul = document.createElement('ul');

// create li item 
let skills = [ 'HTML','CSS','JS','REACT'];

for(let skill of skills){
    let li = document.createElement('li');
    li.innerText = skill;
    ul.appendChild(li)
}

section.appendChild(ul)

//  add section inside main container
addsection.appendChild(section);



