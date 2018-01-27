import { combineReducers } from "redux";
import userRdeucer from "./userReducer";
import { reducer as reduxFormReducer } from 'redux-form';

//console.log("data is here:", userData )
const allReducers = combineReducers({
    form: reduxFormReducer,
    users: userRdeucer

})
console.log("data is here 1:", allReducers.users)
export default allReducers;