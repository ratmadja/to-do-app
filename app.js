

function onReady() {

  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  //Add an event listener
  //37:14 When using (event) => shorthand as your event handler, it references the entire DOM window
  //37:14 When using function(event) as your event handler, it references the item the event happened to

  ADD_TODO_FORM.addEventListener('submit', (event) => {
    event.preventDefault();


    //get the text
    let title = NEW_TODO_TEXT.value;
    //create a new li in javascript
    let newLi = document.createElement('li'); //creates <li></li>

    //create a new input box in javascript
    let checkbox = document.createElement('input');
    //set the javascript input's type to checkbox
    checkbox.type = "checkbox";
    //add delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    TODO_LIST.appendChild(newLi);

    deleteBtn.addEventListener('click', function(event) {
      // console.log(event);
      //the parent of the delete button is newLi
      TODO_LIST.removeChild(this.parentElement);
    });

    //empty the input
    NEW_TODO_TEXT.value="";

  });
};

window.onload = function() {
  onReady();
};
