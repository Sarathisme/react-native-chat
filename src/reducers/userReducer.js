const initial = {};

function userReducer(state=initial, action) {
    if (action.type === 'SIGN_IN_USER') {
        return Object.assign({}, state, {'user': action.user});
    }

    return state;
}

export default userReducer;