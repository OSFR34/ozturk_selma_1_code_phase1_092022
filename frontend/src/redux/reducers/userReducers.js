import ActionTypes from "../actionTypes";

const initialState = false

const loginReducer = (state= initialState,action) => {

    switch(action.type){
        case ActionTypes.user.LOGGED_IN:
            return true;
            break;
        default:
            return false;
            break;
    }
}

export default loginReducer;