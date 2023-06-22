import { useReducer } from "react";

// Khai báo các data types 
type CounterState = {
    count:number,
}

type UpdateAction = {
    type:'increment' | 'decrement',
    payload : number
}

type ResetAction = {
    type:'reset',

}

// Là UpdateAction thì yêu cầu payload , ngược lại với reset thì không bắt buộc payload 
type ActionState = UpdateAction | ResetAction

const initialState  = {count : 0}

function reducer(state:CounterState , action:ActionState){
    switch(action.type){
        case 'increment':
            return {count : state.count + (action.payload)}
        case 'decrement':
            return {count : state.count - (action.payload)}
        case 'reset':
            return initialState
        default :
            return state;
    }
}

export const Counter = () => {
    const [state , dispatch] = useReducer(reducer , initialState)
    return (
        <>
         Count: {state.count}
         <button onClick={() => dispatch({type : 'increment' , payload:10})}>Increment</button>
         <button onClick={() => dispatch({type : 'decrement' , payload:10})}>Decrement</button>
         <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
        </>
    )
}