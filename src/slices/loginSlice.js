import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        emailError: false,
        passwordError: false
    },
    reducers: {
        loginEmailFail(state, action) {
            return {
                ...state,
                emailError: true,
                emailErrorMsg: action.payload
            }
        },
        loginEmailSuccess(state, action) {
            return {
                ...state,
                emailError: false,
                emailErrorMsg: ''
            }
        },
        loginPasswordFail(state, action) {
            return {
                ...state,
                passwordError: true,
                passwordErrorMsg: action.payload
            }
        },
        loginPasswordSuccess(state, action) {
            return {
                ...state,
                passwordError: false,
                passwordErrorMsg: ''
            }
        },
        loginSuccess(state, action) {
            return {
                ...state,
                emailError: false,
                passwordError: false
            }
        }
    }
});

const { actions, reducer } = loginSlice;

export const { loginEmailFail, loginEmailSuccess, loginPasswordFail, loginPasswordSuccess, loginSuccess } = actions;

export default reducer;