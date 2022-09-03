import ActionTypes from "../actionTypes";

const logIn = (val) => {
    return {type:ActionTypes.user.LOGGED_IN,payload:val}
}

const saveToken = (val) => {
    return {type:ActionTypes.user.TOKEN, payload:val}
}

const userAction = {logIn, saveToken}  

export default userAction;