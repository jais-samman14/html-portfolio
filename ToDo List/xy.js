const mainTodoElem = document.querySelector(".todo-lists-elem");//taking refrence
const inputValue = document.getElementById("inputValue");

// Get todo list from local storage
const getTodoListfromLocal = () => {
    return JSON.parse(localStorage.getItem("Todolist")) || [];
};

// Update local storage
const updateLocalStorage = (localTodolists) => {
    localStorage.setItem("Todolist", JSON.stringify(localTodolists));
};

let localTodolists = getTodoListfromLocal();

// 2. Add a new todo element to the DOM
const addTodoElem = (task) => {
    const divElem = document.createElement("div");//ek naya div bnaya
    divElem.classList.add("main_todo-div");
    divElem.innerHTML = `<li> ${task} </li> <button class="delbtn">Delete</button>`;
    mainTodoElem.append(divElem);
};

// 1. Add a new task
const addTodoList = (e) => {
    e.preventDefault();//avoid disappearing of inputs
    const task = inputValue.value.trim();//remove whitespaces
    if (task !== "" && !localTodolists.includes(task)) {
        localTodolists.push(task);
        updateLocalStorage(localTodolists);
        addTodoElem(task);
    } else if (task === "") {
        alert("Please enter a valid task.");
    } else {
        alert("Task already exists.");
    }
    inputValue.value = "";
};

// Show all tasks from local storage
const showTodoList = () => {
    localTodolists.forEach((task) => addTodoElem(task));
};
showTodoList();

// Remove a task
const removeTodo = (e) => {
    if (e.target.classList.contains("delbtn")) {
        const task = e.target.previousElementSibling.innerText;
        localTodolists = localTodolists.filter((item) => item !== task);
        updateLocalStorage(localTodolists);
        e.target.parentElement.remove();
    }
};

// Event listeners
document.querySelector(".btn").addEventListener("click", addTodoList);
mainTodoElem.addEventListener("click", removeTodo);