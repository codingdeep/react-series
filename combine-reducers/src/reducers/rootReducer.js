import { combineReducers } from "redux";
import ReducerA from "./ReducerA";
import ReducerB from "./ReducerB";


const rootReducer = combineReducers({
    rA: ReducerA,
    rB: ReducerB
});

export default rootReducer;