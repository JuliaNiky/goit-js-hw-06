// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// let ulList = document.getElementById("ingredients");
// const foodIngredients = ingredients.forEach(ingredient => {
//   let items = document.createElement("li");
//   items.innerHTML = ingredient;
//   ulList.append(items);
//   parent.append(...items)
// });

// console.log(foodIngredients);

const ulList = document.querySelector(".ingredients");

const itemListArr = [];

for (let ingredient of ingredients) {
  const listItem = document.createElement("li");

  listItem.classList.add("item");
  listItem.textContent = ingredient;

  itemListArr.push(listItem);
}

ulList.append(...itemListArr);
