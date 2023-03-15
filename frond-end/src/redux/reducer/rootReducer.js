import { CombinedState, combineReducers } from "redux";

import countReducer from "./counterReducer";

const rootReducer = combineReducers({
    user:countReducer
})

export default rootReducer