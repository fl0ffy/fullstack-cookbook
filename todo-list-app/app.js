
const form = document.querySelector('form.add');
const addButton = document.querySelector('#addButton');
const itemToAdd = document.querySelector('#itemToAdd');
const ul = document.querySelector('.todo');

form.addEventListener('submit', function(event){
    event.preventDefault();
    if (itemToAdd.value.length !== 0){
        const newItem = createItem(itemToAdd.value);
        ul.appendChild(newItem);
    };
    itemToAdd.value = '';
    itemToAdd.focus();
});

function createItem(val){
    const item = document.createElement('li');
    const span = document.createElement('span');
    const delbtn = document.createElement('button');

    span.textContent = val;
    delbtn.textContent = 'Delete';
    delbtn.classList.add('btn-link');

    item.appendChild(span);
    item.appendChild(delbtn);

    delbtn.addEventListener('click', function(){
        item.parentNode.removeChild(item);
    });

    return item;
};

