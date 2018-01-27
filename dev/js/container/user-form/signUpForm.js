import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { SignUp } from '../../actons/userActions'
import SignUpForm from "../../components/user-form/signUpForm";
class Signup extends React.Component {
    constructor() {
        super();
        this.signUp = this.signUp.bind(this)
    }
    signUp(vals) {
        console.log("is this u", vals)
        return this.props.SignUp(vals)
    }
    render() {
        return (
            <div>
                <SignUpForm onSubmit={this.signUp} />
            </div>
        )
    }
}
function mapStateProps(state) {
    //console.log("data hi data", state)
    return {
        users: state.signup
    }

}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ SignUp }, dispatch)
}
export default connect(mapStateProps, matchDispatchToProps)(Signup);
