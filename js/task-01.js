let categories = document.getElementsByClassName("item");

let categoriesName = document.querySelectorAll("h2");
let categoriesItem = categories.childElementCount;

console.log("Number of Categories = " + categories.length);
// console.log(categoriesName[0].innerText);
// console.log(
//   `Elements:  ${categories[0].firstElementChild.nextElementSibling.children.length}`
// );

for (let i = 0; i < categories.length; i++) {
  console.log("Categories: " + categoriesName[i].innerText);
  console.log(
    `Elements:  ${categories[i].firstElementChild.nextElementSibling.children.length}`
  );
}

// for (let i = 0; i < categories.length; i++) {
//   console.log(categories[i]);
// }

// let uList = document.getElementById("categories");
// let allList = document.querySelectorAll(".item");
// checkBtn.onclick = () => {
//   alert("hello");
//   let li = document.createElement("li");
//   li.classList = "item";

//   //li.setAttribute("target", "_blank");
//   // li.textContent = "Click me!";
//   //li.innerText = <a href = "#" >

//   uList.appendChild(li);
//   console.log(uList);
// };

//let item2 = (document.getElementById("categories").style.color = "red");

//let headings = document.getElementsByClassName("heading"); //.style.color = "red");

// let ul = document.querySelectorAll(".categories");

// headings.forEach((element) => {
//   element.style.color = "blue";
// });

// for (let i = 0; i < item.length; i++) {
//   item[i].style.color = "red";
// }

//console.log(checkBtn);
