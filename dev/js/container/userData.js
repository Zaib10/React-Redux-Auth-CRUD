import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getData, selectUser} from "../actons/userActions"; 
//console.log("here", selectUser);
class UserData extends React.Component{
    render(){
        return(
            <div>
                {this.props.users.usersData.length ==0? 
                <button 
                
                onClick= {()=> this.props.userDataAction()
                } >Get Data
                </button>
                :
                <div>
                    <ul>
                        {this.props.users.usersData.map((user, index)=>{
                            return <li key = {user._id} onClick= {()=> this.props.selectUser(user._id)}> 
                                
                            {user.userName}
                            </li>
                        })}
                    
                    </ul>
                </div>
                }
                
            </div>
            
        )
    }

  
}
function mapStateProps(state){
    console.log(state)
    return{
        users: state.users
    }
    
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({userDataAction: getData, selectUser}, dispatch)
}
export default connect(mapStateProps, matchDispatchToProps)(UserData);