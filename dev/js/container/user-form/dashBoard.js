import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DashBoardComponent from '../../components/user-form/dashBoard';
import { LogOut } from '../../actons/userActions'
import RaisedButton from 'material-ui/RaisedButton';
class DashBoard extends React.Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this)

    }

    logout() {
        //alert("u click me")
        this.props.LogOut()
    }
    render() {
        return (
            <div>

                <DashBoardComponent logOut={this.logout} />
            </div>
        )
    }

}
function mapStateProps(state) {
    console.log("staate", state)
    return {
        users: state.login
    }

}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ LogOut }, dispatch)
}
export default connect(mapStateProps, matchDispatchToProps)(DashBoard);
