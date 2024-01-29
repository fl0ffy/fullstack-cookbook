
const addButton = document.querySelector('#addButton');
const itemToAdd = document.querySelector('#itemToAdd');
const ul = document.querySelector('.todo')

addButton.addEventListener('click', function(){
    const newItem = createItem(itemToAdd.value);
    ul.appendChild(newItem);
});

function createItem(val){
    const item = document.createElement('li');
    const span = document.createElement('span');
    const delbtn = document.createElement('button');

    span.textContent = val;
    delbtn.textContent = 'Delete';

    item.appendChild(span);
    item.appendChild(delbtn);

    return item;
};

