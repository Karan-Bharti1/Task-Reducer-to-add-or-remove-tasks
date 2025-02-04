import { ADD_TASK, CALCULATE_TOTAL_TASKS, REMOVE_TASK, TOGGLE_TASK } from "./actions"

const initialState={tasks:[],total:0}
const taskReducer=(state=initialState,action)=>{
    switch (action.type){
        case ADD_TASK:
            return{
                ...state,tasks:[...state.tasks,action.payload]
            }
            case REMOVE_TASK:
                return {
...state,tasks:state.tasks.filter(task=>task.id!=action.payload)
            }
            case TOGGLE_TASK:
                return {
                    ...state,tasks:state.tasks.map(task=>task.id == action.payload ? { ...task, status: !task.status } : task)
                }
                case CALCULATE_TOTAL_TASKS:
                    return {
                        ...state,total:state.tasks.length
                    }
           default:
            return state
    }
}
export default taskReducer