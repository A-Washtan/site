let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayofTasks = [];

if (localStorage.getItem("tasks")) {
  arrayofTasks = JSON.parse(localStorage.getItem("tasks"));
}
// Trigger Get Data from L S function
getDataFromLocalStorag()

// Add Task
submit.onclick = function () {
  if (input.value != "") {
    addTaskToArray(input.value);
    input.value = "";
  }
};

tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")){
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("task")) {
    toggleStatusTaskwith(e.target.getAttribute("data-id"))
    e.target.classList.toggle("done");
  }
})
function addTaskToArray(taskText) {
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  arrayofTasks.push(task);

  addElementsToPageForm(arrayofTasks);
  addDataTolocalStoregFrom(arrayofTasks)
}
function addElementsToPageForm(arrayofTasks) { 
    // Empte Tasks Div 
  tasksDiv.innerHTML = "";
  // Looping On Array of Tasks
  arrayofTasks.forEach((task) => {
    // Creat Min Div
    let div = document.createElement("div");
    div.className = "task";
    // Check if Task is Done 
    if (task.completed) {
        div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    //   Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    //   Append Button To Main Div
    div.appendChild(span);
    tasksDiv.appendChild(div);    
  });
}


function addDataTolocalStoregFrom(arrayofTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayofTasks))
}
function getDataFromLocalStorag(){
 let data = window.localStorage.getItem("tasks");
 if (data) {
   let tasks = JSON.parse(data);
   addElementsToPageForm(tasks);
 } 
}

function deleteTaskWith(taskId) {
  // for ( let i = 0; i < arrayofTasks.length; i++) {
  //   console.log(`${arrayofTasks[i].id}=== ${taskId}`)
  // }

  arrayofTasks = arrayofTasks.filter((task) => task.id != taskId);
  addDataTolocalStoregFrom(arrayofTasks);
}

function toggleStatusTaskwith(taskId) {
  for(let i = 0; i < arrayofTasks.length; i++) {
    if (arrayofTasks[i].id == taskId) {
      arrayofTasks[i].completed == false ? (arrayofTasks[i].completed == true) : (arrayofTasks[i].completed == false);
    }
  }
  addDataTolocalStoregFrom(arrayofTasks);
}
