import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
class DashBoard extends React.Component {
    render() {
        return (
            (this.props.users) ?
            <div className="container">
                <div className="well">
                    <h1>Well Come To Dashbord</h1>
                </div>
                <div className="div-align">
                    <h3>User Details</h3>

                    <ul>
                        <li>{this.props.users.firstName}</li>
                        <li>{this.props.users.lastName}</li>
                        <li>{this.props.users.email}</li>
                    </ul>
                </div>
                <div className="div-align">
                    <button className="btn btn-success" onClick={this.props.logOut}>LogOut</button>
                    {/* <RaisedButton label="LogOut" onClick={this.props.logOut} /> */}
                    <Link to="/update"> Update</Link>
                </div>
            </div>
            :
            <div><h2>Loading...</h2></div>
        )
    }
}
function mapStateProps(state) {
    //console.log("dashboardddddd", state)
    return {
        users: state.users.login
    }

}
export default connect(mapStateProps)(DashBoard);
//export default ;