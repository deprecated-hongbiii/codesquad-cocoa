const input = document.querySelector('.new-memo');
const addButton = document.querySelector('.add');
const items = document.querySelector('.items');

function onAdd() {
  const text = input.value;
  const item = createItem(text);
  items.appendChild(item);

  input.value = ''; // 입력 후 내용을 지워주고
  input.focus(); // 바로 내용을 또 쓸 수 있도록 포커스
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

function deleteItem(e) {
  const toBeDeleted = e.target.parentElement.parentElement;
  if (e.target.nodeName === 'I'){
    toBeDeleted.remove();
  }
}

addButton.addEventListener('click', onAdd);
items.addEventListener('click', deleteItem);