// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const listIdSelector = document.querySelector('#categories');
const listQuantity = listIdSelector.children.length;
console.log("Number of categories:", listQuantity);

//  Для кожного элемента li.item у списку ul#categories, 
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
//  і кількість елементів в категорії(усіх < li >, вкладених в нього).
const listItemsByTagName = document.querySelectorAll("li.item");
listItemsByTagName.forEach(element => {
    console.log('Category:', element.querySelector('h2').textContent);
    console.log('Category:', element.querySelector('ul').children.length);
})