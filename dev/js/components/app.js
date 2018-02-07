import React from 'react';
import UserList from "../container/user-list";
import SelectedUserDetail from "../container/SelectedUserDetail";
import UserData from '../container/userData';
import LogIn from '../container/users/userLogIn';
import signup from '../container/users/userSignUp';
//import update from '../container/user-form/updateUser'
//import Login from './user-form/login';
//import showResults from "../container/user-form/show-results";
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
//import LogIn from "../container/userLogIn";
import LoginForm from '../container/user-form/submitUser';
import DashBoard from '../container/user-form/dashBoard';
import SignUpForm from '../container/user-form/signUpForm';
import Update from '../container/user-form/updateUser';
import { setTimeout } from 'timers';
import { InitialData, getLoggedInUser } from '../actons/userActions'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import Redirect from 'react-router-dom/Redirect';
require("../../scss/style.scss");
class MainComponent extends React.Component {
    componentDidMount() {
        let token =localStorage.getItem('token')
        if(token)
        {
            this.props.getLoggedInUser()
        }
        
        // if (localStorage.login) {
        //     const useraData = JSON.parse(localStorage.getItem("login"))
        //     this.props.InitialData(useraDarrta)
        // }
    }
    render() {
        return (
            <div>
                {/* <h2>User data:</h2>//sdasdjhasdasjb
            // <UserData/>
            <hr/>         
            <SelectedUserDetail/> */}

                <BrowserRouter>
                    <Switch>

                        {(localStorage.getItem("token")) ?
                            <Redirect from="/login" exact to="/dashboard" />
                            :
                            <Redirect from="/dashboard" exact to="/login" />
                        }
                        {(localStorage.getItem("token")) ?
                            <Route exact path="/update" component={Update} />
                            :
                            <Redirect from="/update" exact to="/login" />
                        }
                        <Route exact path="/login" component={LoginForm} />
                        <Route exact path="/dashboard" component={DashBoard} />
                        <Route exact path="/signup" component={SignUpForm} />

                    </Switch>
                </BrowserRouter>


                {/* <LoginForm/> */}

            </div>
        )
    }
}



function matchDispatchToProps(dispatch) {
    return bindActionCreators({ InitialData, getLoggedInUser }, dispatch)
}
export default connect(null, matchDispatchToProps)(MainComponent);