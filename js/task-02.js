const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.getElementById('ingredients')

for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.classList.add("item")
  li.textContent = ingredient;
  ul.appendChild(li);
}

