
var todoList = [
    "Leave feedback for Joe",
    "Finish of GPD assessment",
    "Go to the gym"
  ];  

document.addEventListener("DOMContentLoaded", run)

function run() {
  /**
   * Here we are setting up a constant,
   * and assigning it a reference to our todo
   * list. Look up what a constant is
   */
  const listHtmlElm = document.querySelector('.list');

  /**
   * List is defined within a function.
   * Such we cannot access it outside of the function
   * it was defined in. Therefore, we must pass
   * list to any function that needs to use it
   **/
  buildList(listHtmlElm);
}

function buildList(listHtmlElm) {
  /**
   * Below, I use the array.map method to iterate over our todo list
   * I pass an arrow function into map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
   * Can you work out what's going on below?
   */
  debugger;
  let htmlList = todoList.map(item => buildListItemTemplate(item));
  listHtmlElm.innerHTML = htmlList;
}

function buildListItemTemplate(listItem) {
  /**
   * observe how we are using a new javaScript 
   * feature here, template literals (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).
   * Template literals are incredibly useful and allow us to easily embed 
   * vars in a string
   **/
    return `<div class="outer-item">
    <div class="to-do-item">
      <p> ${listItem} </p>
      <span>  X </span>
    </div>
    <!-- /.to-do-item -->
  </div>
  <!-- /.outer-item -->`;
}
