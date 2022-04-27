const initialState={
    ShowPlan:0,
    messages:2
}

const reducer=(state=initialState,action)=>{
    if(action.type==="CHANGE"){
        return {
            ...state,
            ShowPlan:action.value
        }
    }
    if(action.type==="ADD"){
        return {
            ...state,
            messages:state.messages+1
        }
    }
    return state
}

export default reducer