const initialState = {
    A: 1
}
const ReducerA = (state=initialState,action)=>{
    if(action.type === 'UPGRADE_A'){
        return {
            ...state,
            A: state.A + action.val
        }
    }


    return state
}

export default ReducerA