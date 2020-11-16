const input = document.querySelector('.new-memo');
const addButton = document.querySelector('.add');
const items = document.querySelector('.items');

function onAdd() {
  const text = input.value;
  const item = createItem(text);
  items.appendChild(item);
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item');
  itemRow.innerHTML = `
    <div class="item__content">
      <input type="checkbox" name="todo" class="content__checkbox">
      <span class="content__text">${text}</span>
    </div>
    <button class="item__delete">
      <i class="far fa-trash-alt"></i>
    </button>
  `
  return itemRow;
}

addButton.addEventListener('click', onAdd);