function onReady() {
  //Using the ES6 const keyword instead of var
  //because const cannot change through reassignment, and it can't be redeclared
  //to lock these asignments into place
  const addToDoForm = document.getElementbyId('addToDoForm');
  const newToDoText = document.getElementbyId('newToDoText');
  const toDoList = document.getElementbyId('toDoList');

  //Add an event listener to addToDoForm
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    //get the text
    //Using the ES6 let keyword instead of var
    //because let creates block scope local variable
    //var creates global variables
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty th einput
    newToDoText.value='';

  });
}

window.onload = function() {
  alert("The window has loaded!");
};
