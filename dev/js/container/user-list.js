import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {selectUser} from "../actons/userActions"; 
//console.log("here", selectUser);
class UserList extends React.Component{
    createListItems(){
        return this.props.users.usersData.map((user)=>{
            return (
                <li
                 key = {user.id}
                 onClick= {()=> this.props.selectUser(user)}

                >
                {user.firstName} {user.lastName}
                </li>
            )
        })
    }
    render(){
        return(
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}
function mapStateProps(state){
    console.log("users", state)
    return{
        users: state.users
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser:selectUser}, dispatch)
}
export default connect(mapStateProps, matchDispatchToProps)(UserList);