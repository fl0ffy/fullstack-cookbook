

document.addEventListener('DOMContentLoaded', init);

function init() {

    const form = document.querySelector('form.add');
    const addButton = document.querySelector('#addButton');
    const itemToAdd = document.querySelector('#itemToAdd');
    const ul = document.querySelector('.todo');
    const body = document.querySelector('body');
    const app = document.querySelector('.app');

    app.addEventListener('click', function(event){
        event.stopPropagation();
    })

    body.addEventListener('click', function(){
        ul.innerHTML = ''
    })

    form.addEventListener('submit', function(event){
        event.preventDefault();
        if (itemToAdd.value){
            const newItem = createItem(itemToAdd.value);
            ul.appendChild(newItem);
            itemToAdd.value = '';
            itemToAdd.focus();
        };
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
}
