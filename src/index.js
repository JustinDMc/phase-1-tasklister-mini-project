document.addEventListener("DOMContentLoaded", () => {
//Get DOM Elements
  const input = document.getElementById("new-task-description");
  const submit = document.getElementById("submit-task");
  const list = document.getElementById("tasks");

//Write callback functions for event listeners
  let submitBtnClick = (e) => {
  e.preventDefault();
  let text = input.value;
  let newLi = document.createElement("li");
  newLi.innerHTML = text;

  list.appendChild(newLi);
  
}

//Add event listeners and use functions above
  submit.addEventListener("click", submitBtnClick)
})
