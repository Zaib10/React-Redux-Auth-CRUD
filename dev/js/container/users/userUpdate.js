import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {updateUser, selectUser} from "../../actons/userActions"; 
class UserUpdate extends React.Component{
    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.getUserPassword = this.getUserPassword.bind(this);
        this.getUserEmail = this.getUserEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getUserEmail(e) {
        const email = e.target.value;
        this.setState({
            email
        })
    } 
    getUserPassword(e) {
        
        const password = e.target.value;
        this.setState({
            password 
        })
     }
    
    handleSubmit(e) {
        e.preventDefault();
        
        //console.log("name",this.state.email,"password",this.state.password)
       
        this.props.update({'email' : this.state.email, "password": this.state.password})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} >
            <h1>User Update</h1>
                <h4>User Name: <input type= "email"  value= {this.users } onChange={this.getUserEmail} /></h4>
                
                
                <h4>Password:   <input type="password"   value={this.state.password} onChange={this.getUserPassword} /></h4>
                
                <button type= "submit">Update</button>
            </form>
        )
    }
}
var aValue = localStorage.getItem('login');
//console.log("value", aValue)
function mapStateProps(state){
    console.log("data hi data", state)
    return{
        users: state.login
    }
    
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({update: updateUser,}, dispatch)
}
export default connect(mapStateProps, matchDispatchToProps)(UserUpdate);