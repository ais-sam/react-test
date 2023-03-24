import {createStore} from "redux"
import contactReducer from "./contactReducer"


const store = createStore(contactReducer)

export default store















/*
import {createStore} from "redux"

const initState = {value:2, showCounter:false}
const counterReducer = (state = initState,action)=>{
    
    if (action.type ==="increase") {
        return {...state,value : state.value +action.payload}
    } else if(action.type ==="decrease"){
        return {...state, value :state.value - action.payload}
    } else if(action.type ==="toggleCounter"){
        return {...state,showCounter:!state.showCounter}
    }
    return state
}

const store = createStore(counterReducer)

export default store
*/