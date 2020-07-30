import { DEPOSIT_DONE, WITHDRAW_DONE } from "../actions";

const initialState = {
    balance: 5000
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DEPOSIT_DONE:
            return Object.assign({}, state, {
                balance: state.balance + action.payload
              })
        case WITHDRAW_DONE:
            return Object.assign({}, state, {
                balance: state.balance - action.payload
              })
        default:
            return state;
    }
}

export default reducer;

