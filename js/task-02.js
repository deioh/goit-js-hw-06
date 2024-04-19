const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.getElementById('ingredients')

for (const item of ingredients) {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
}

