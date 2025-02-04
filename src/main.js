import { createStore } from 'redux'
import './style.css'
import taskReducer from './taskReducer'
import { addTask,removeTask } from './actions'
const title=document.getElementById("title")
const description=document.getElementById("description")
const addNewTask=document.getElementById("addNewTask")
const removeTaskId=document.getElementById("removeTaskId")
const displayList=document.getElementById("displayList")
const displayTotal=document.getElementById("displayTotal")
const removeTaskDisplay=document.getElementById("removeTask")
const store=createStore(taskReducer)
const addNewTaskEventHandler=()=>{
  const state=store.getState()
  const newTask={
    id:state.tasks.length+1,
    title:title.value,
    description:description.value,
    status:false
  }
  store.dispatch(addTask(newTask))
}
addNewTask.addEventListener("click",addNewTaskEventHandler)
const removeTaskHandler=()=>{
  const id=removeTaskId.value
  store.dispatch(removeTask(id))
}
removeTaskDisplay.addEventListener("click",removeTaskHandler)
const renderTaskList=()=>{
  const state=store.getState()
 displayList.innerHTML =state.tasks.map(task=>
  `<li><input type="checkbox"/> ${task.id}. ${task.title}: ${task.description}</li>`
  ).join("")
}
renderTaskList()
store.subscribe(()=>{
  renderTaskList()
})
