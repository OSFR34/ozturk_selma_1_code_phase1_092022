import ActionTypes from "../actionTypes";

const initialState = {loggedin:false, token:null}

const loginReducer = (state= initialState,action) => {

    switch(action.type){
        case ActionTypes.user.LOGGED_IN:
            return {loggedin:action.payload.loggedin, token:action.payload.token, user:action.payload.user}
            break;
        default:
            return state;
            break;
    }
}

export default loginReducer;