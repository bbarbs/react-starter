const initialState = {
    balance: 5000
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DEPOSIT':
            return Object.assign({}, state, {
                balance: state.balance + action.payload
              })
        case 'WITHDRAW':
            return Object.assign({}, state, {
                balance: state.balance - action.payload
              })
        default:
            return state;
    }
}

export default reducer;

