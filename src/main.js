import { createStore } from 'redux'
import './style.css'
import taskReducer from './taskReducer'
import { addTask,calculateTotalTasks,removeTask, toggleTask } from './actions'
const title=document.getElementById("title")
const description=document.getElementById("description")
const addNewTask=document.getElementById("addNewTask")
const removeTaskId=document.getElementById("removeTaskId")
const displayList=document.getElementById("displayList")
const displayTotal=document.getElementById("displayTotal")
const removeTaskDisplay=document.getElementById("removeTask")
const store=createStore(taskReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const addNewTaskEventHandler=()=>{
  const state=store.getState()
  const newTask={
    id: state.tasks.length > 0 
    ? Math.max(...state.tasks.map(task => task.id)) + 1 
    : 1,
    title:title.value,
    description:description.value,
    status:false
  }
  store.dispatch(addTask(newTask))
  store.dispatch(calculateTotalTasks())
}
addNewTask.addEventListener("click",addNewTaskEventHandler)
const removeTaskHandler=()=>{
  const id=removeTaskId.value
  store.dispatch(removeTask(id))
  store.dispatch(calculateTotalTasks())
}
removeTaskDisplay.addEventListener("click",removeTaskHandler)
window.handleStatus=(id)=>{
  store.dispatch(toggleTask(id))
  store.dispatch(calculateTotalTasks())
}
const renderTaskList=()=>{
  const state=store.getState()
  console.log(state)
 displayList.innerHTML =state.tasks.map((task)=>
  `<li><label for="${task.id}-${task.title}"><input onchange="handleStatus(${task.id})" id="${task.id}-${task.title}" type="checkbox" ${task.status ? "checked" : ""}/> ${task.id}. ${task.title}: ${task.description}<label/></li>`
  ).join("")
}
renderTaskList()
const updateTotalTasks=()=>{
  const state=store.getState()
  if(state.tasks.length>0)
 { displayTotal.textContent=`Total Tasks: ${state.total}`}
  else{
    displayTotal.textContent=""
  }
}
updateTotalTasks()
store.subscribe(()=>{
  renderTaskList()
  updateTotalTasks()
})
