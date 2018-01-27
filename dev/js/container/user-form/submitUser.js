// import { SubmissionError } from 'redux-form';
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { LogIn } from '../../actons/userActions';
import LogInForm from "../../components/user-form/login";

console.log("form", LogIn)
class Submit extends React.Component {
    constructor() {
        super();
        this.sumbit = this.sumbit.bind(this);
    }

    sumbit(vals) {
        console.log("vals:", LogIn(vals))
        return this.props.LogIn(vals);
    }
    render() {
        return (
            <div>
                <LogInForm onSubmit={this.sumbit} />
            </div>
        )
    }

}
function mapStateProps(state) {
    //console.log("staate", state.users.login[1])
    return {
        users: state.login
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ LogIn }, dispatch)
}
export default connect(mapStateProps, matchDispatchToProps)(Submit);