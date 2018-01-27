import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateUser } from '../../actons/userActions'
import UpdateUserComponent from "../../components/user-form/updateUser";
class Update extends React.Component {
    constructor() {
        super();
        this.updateUser = this.updateUser.bind(this)
    }
    updateUser(vals) {
        console.log("is this u", vals)
        let data = {
            id: vals._id,
            //email : vals.email,
            firstName: vals.firstName,
            lastName: vals.lastName,

        }
        return this.props.updateUser(data)
    }
    render() {
        return (
            <div>
                <UpdateUserComponent onSubmit={this.updateUser} />
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
    return bindActionCreators({ updateUser }, dispatch)
}
export default connect(mapStateProps, matchDispatchToProps)(Update);


