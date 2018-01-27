import { bindActionCreators } from "redux";
import { connect } from "react-redux";
let initailState = {
    usersData: [],
    selectedUser: [],
    login: {},
    signup: [],
    update: []

}
//var aValue = localStorage.getItem('login');
export default function (state = initailState, action) {
    switch (action.type) {
        case "GET-DATA":
            return {
                ...state,
                login: action.payload
            }
            break;
        case "SELECTED-USER":
            return {
                ...state,
                selectedUser: action.payload
            };
            break;
        case "LOG-IN":
            console.log("login match", action.payload)

            return {
                ...state,
                login: action.payload
            };

            break;

        case "Update-User":
            //localStorage.setItem('login', JSON.stringify(action.payload));
            return {
                ...state,
                update: action.payload
            };
            break;
        case "Sign-Up":
            return {
                ...state,
                signup: action.payload
            };

            break;
        case "UPDATE_STORE":
            return {
                ...state,
                login: action.payload
            };
        case "LOG-OUT-USER":
            return {
                initailState
            };
            
            break;
        case "LOAD-LOG-IN":
            return {
                ...state,
                login: action.payload
            };

            break;
    }
    return state;
}