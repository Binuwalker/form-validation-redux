import { loginEmailFail, loginEmailSuccess, loginPasswordFail, loginPasswordSuccess } from "../slices/loginSlice"

export const login = ({ email, password }) => (dispatch) => {

    //email validation
    if (!email) {
        const emailErrorMsg = 'Email should not be empty'
        dispatch(loginEmailFail(emailErrorMsg))
    } else {
        dispatch(loginEmailSuccess());
    } 
    
    //password validation
    if (!password) {
        const passwordErrorMsg = 'Password should not be empty'
        dispatch(loginPasswordFail(passwordErrorMsg))
    } else if (password.length > 8) {
        const passwordErrorMsg = 'Password cannot exceed 8 characters'
        dispatch(loginPasswordFail(passwordErrorMsg))
    } else {
        dispatch(loginPasswordSuccess());
    }
}
