import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {SignUp, selectUser} from "../../actons/userActions"; 
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
        this.getFirstName = this.getFirstName.bind(this);
        this.getLastName = this.getLastName.bind(this);
        this.getUserEmail = this.getUserEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getFirstName(e) {
        const firstName = e.target.value;
        this.setState({
            firstName
        })
    } 
    getLastName(e) {
        const lastName = e.target.value;
        this.setState({
            lastName
        })
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
       
        this.props.signUp({
            'firstName' : this.state.firstName,
            'lastName' : this.state.lastName,
            'email' : this.state.email,
            "password": this.state.password,
             
            })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} >
            <h1>SignUp</h1>
                <h4>First Name: <input type= "text"  value= {this.state.firstName} onChange={this.getFirstName} /></h4>
                <h4>Last Name: <input type= "text"  value= {this.state.lastName} onChange={this.getLastName} /></h4>
                <h4>Email: <input type= "email"  value= {this.state.email} onChange={this.getUserEmail} /></h4>
                <h4>Password:   <input type="password"   value={this.state.password} onChange={this.getUserPassword} /></h4>
                
                <button type= "submit">SignUp</button>
            </form>
        )
    }
}

function mapStateProps(state){
    //console.log("data hi data", state)
    return{
        users: state.signup
    }
    
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({signUp: SignUp,}, dispatch)
}
export default connect(mapStateProps, matchDispatchToProps)(UserLogIn);