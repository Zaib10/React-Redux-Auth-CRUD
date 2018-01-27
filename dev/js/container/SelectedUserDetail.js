import React from "react";
import {connect} from "react-redux";

class SelectedUserDetail extends React.Component{
    render(){
        if(this.props.user.selectedUser==0){
            return(
                <h1>Select A User:</h1>
            )
        }
        return(
            <div>
                <h1>{this.props.user.selectedUser.userName}</h1>
                
            </div>
        )
    }
    
}
function mapStateProps(state){
    console.log("state1", state)
    return{
        user: state.users
    }
}
export default connect(mapStateProps)(SelectedUserDetail);