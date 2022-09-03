import ActionTypes from "../actionTypes";

const initialState = null;

const tokenReducer = (state= initialState, action) => {
    switch(action.type){
        case ActionTypes.user.TOKEN:
            return state;
            break;
        default:
            return null;
    
    }
}

export default tokenReducer;