const initialState = {
    B: 1
}

const  ReducerB = (state=initialState, action)=>{
    if(action.type === 'UPGRADE_B'){
            return {
                ...state,
                B: state.B + action.val
            }

    }
    return state
}

export  default ReducerB