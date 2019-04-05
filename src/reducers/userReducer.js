function userReducer(state, action) {
    if (action.type === 'SIGN_IN_USER') {
        return Object.assign({}, state, action.user);
    } else {
        return state;
    }
}

export default userReducer;