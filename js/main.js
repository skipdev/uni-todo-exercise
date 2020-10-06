import todoList from "./todos";
import squareNumber from "./squareNumber";
import "../main.scss";
import img1 from "../assets/top-left-elips.png";
import img2 from "../assets/bottom-right-elips.png";
import Todo from './Components/Todo';

console.log(todoList);
console.log(squareNumber(9));

const view = `
<img src="${img1}" id="background-left" alt="background"/>
<img src="${img2}" id="background-right" alt="background"/>

<div class="wrapper">
<div class="todolist">
  <h1>WEB DESIGN STUDENT TO DO LIST</h1>
  <input type="text" id="todoInput" placeholder="What do you need to do today...." />
  <div class="list">
  </div>
  <!-- /.list -->
</div>
<!-- /.todolist -->
</div>
<!-- /.wrapper -->`;

const render = (todos) => {
    console.log('ready');
    document.getElementById('app').innerHTML = view;

    const todosCopy = [...todos];
    const handleCloseClick = (e) => {
        console.log('close')
        render(todosCopy.filter((c) => e.target.dataset.outerItem !== c.id));
    };

    document.querySelector("#app").innerHTML = view;
    let htmlList = todos.map((item) => Todo(item.text, item.id));
    document.querySelector(".list").innerHTML = htmlList.join('');
    document.querySelectorAll(".close").forEach((e) => e.addEventListener("click", handleCloseClick));
}
window.addEventListener('DOMContentLoaded', render(todoList));