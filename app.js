function onReady() {

  //1 Assign form to JS variable, declare toDos array
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  let toDos = [];
  let id = 0;

  //4 Define renderTheUI - renders <ul>, but does not actually changes the array
  function renderTheUI() {
    const TODO_LIST = document.getElementById('toDoList');
    TODO_LIST.textContent = ""; //Tells renderTheUI to clear the array content

    toDos.forEach(function(toDo){  //Where toDo argument first appears
      const NEW_LI = document.createElement('li'); //creates empty <li>
      const CHECKBOX = document.createElement('input'); //create empty input box
      CHECKBOX.type = "checkbox"; //set input type to checkbox

      const DELETE_BTN = document.createElement('button');
      DELETE_BTN.textContent = "Delete!";

      //5 Create DELETE_BTN. Remember the button is inside a forEach, so it's assigned to a specific toDo
      DELETE_BTN.addEventListener('click', function(event) {
        toDos = toDos.filter(function(item) {
          //Everything that is not the delete button I just clicked on
          //Gets passed to a new array
          return item.id !== toDo.id;
        });
        renderTheUI();
      });

      NEW_LI.textContent = toDo.title; //JS knows toDo is an array object because forEach is applied to toDos array

      TODO_LIST.appendChild(NEW_LI);
      NEW_LI.appendChild(CHECKBOX);
      NEW_LI.appendChild(DELETE_BTN);
      })
    }

  //2 Push NEW_TODO_TEXT.value to the array
  function createNewToDo() {
      const NEW_TODO_TEXT = document.getElementById('newToDoText');
      if (!NEW_TODO_TEXT.value){return; } //prevent empty values from being passed to the array
      toDos.push({
        title: NEW_TODO_TEXT.value,
        complete: false,
        id: id
      });
      id++;

      NEW_TODO_TEXT.value = "";
      renderTheUI();   //Be sure to call renderTheUI here
    }

  //3 On submit, push to array
  ADD_TODO_FORM.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();

}

window.onload = function() {
  onReady();
};
