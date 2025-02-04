export const ADD_TASK="task/added"
export const REMOVE_TASK="task/remove"
export const TOGGLE_TASK ="task/toggled"
export const CALCULATE_TOTAL_TASKS="task/calculateTotalTasks"
export const addTask =(task)=>({type:ADD_TASK,payload:task})
export const removeTask=(id)=>({type:REMOVE_TASK,payload:id})