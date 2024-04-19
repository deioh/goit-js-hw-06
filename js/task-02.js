const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// get ul ID
const ul = document.getElementById('ingredients')

// loop for li insert
for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.classList.add("item")
  li.textContent = ingredient;
  ul.appendChild(li);
}

