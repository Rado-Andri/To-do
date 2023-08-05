
//Ajouter
let addMore = document.getElementById('add-more');
let listTodoContent = document.getElementById('list');

addMore.onclick = function(){
    let itemInputValue = document.getElementById('input-todo').value;
    let liHtml = '<li>' + itemInputValue + '<button class="item-edit">modifier</button>' + '<button class="item-delete">supprimer</button>'+ '</li>';
    listTodoContent.innerHTML = liHtml + listTodoContent.innerHTML;

    deleteElement();
    editElement();
}

//supprimer
function deleteElement() {
    let btnDeletes = document.getElementsByClassName('item-delete');
    for (const btnDelete of btnDeletes){
        btnDelete.addEventListener('click', function(){
            this.closest('li').remove();
        });
    }
}


//modifier
function editElement() {
    let btnEdits = document.getElementsByClassName('item-edit');
    for (const btnEdit of btnEdits){
        btnEdit.addEventListener('click', function(){
            let listItem = this.closest('li');
            let taskText = listItem.firstChild;
            let newText = prompt('veuillez saisir la midification', taskText.textContent);
            if (newText !== null && newText.trim() !== '') {
                taskText.textContent = newText;
            }
        });
    }
}


deleteElement();
editElement();