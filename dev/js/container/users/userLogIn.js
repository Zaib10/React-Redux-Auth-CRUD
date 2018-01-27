import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {LogIn, selectUser} from "../../actons/userActions"; 
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
class UserLogIn extends React.Component{
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
        this.getUserName = this.getUserName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getUserName(e) {
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
       
        this.props.logInUser({'email' : this.state.email, "password": this.state.password})
    }

    render(){
        return(
            
            <form onSubmit={this.handleSubmit} >
            <h1>LogIn</h1>
                <h4>User Name: <input type= "email" value= {this.state.email} onChange={this.getUserName} /></h4>
                
                
                <h4>Password:   <input type="password" value={this.state.password} onChange={this.getUserPassword} /></h4>
                
                <button type= "submit">LogIn</button>
                <br/>
                <Link to = "/signup">signup</Link>
                <br/>
                <Link to = "/update">update</Link>
            </form>
        )
    }
}

function mapStateProps(state){
    console.log("staate", state.users.login[1])
    return{
        users: state.login
    }
    
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({logInUser: LogIn,}, dispatch)
}
export default connect(mapStateProps, matchDispatchToProps)(UserLogIn);