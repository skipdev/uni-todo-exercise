import todos from "./todos";
import squareNumber from "./squareNumber";
import "../main.scss";
import img1 from "../assets/top-left-elips.png";
import img2 from "../assets/bottom-right-elips.png";

console.log(todos);
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

const render = () => {
    console.log('ready');
    document.getElementById('app').innerHTML = view;
}
window.addEventListener('DOMContentLoaded', render);