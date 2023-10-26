const list = document.querySelector("#categories");
const listItems = list.querySelectorAll(".item");

const totalItems = `Number of categories: ${listItems.length}`;
console.log(totalItems);

listItems.forEach((listItem) => {
  const listTitle = listItem.firstElementChild;
  const listItemsQuantity = listItem.querySelectorAll("li");

  console.log(`Category: ${listTitle.textContent}`);
  console.log(`Elements: ${listItemsQuantity.length}`);
});
