const initial = {
    user: {}, data: {}
};

function reducer(state=initial, action) {
    switch(action.type) {
        case 'SIGN_IN_USER':
            return Object.assign({}, state, {'user': action.user});

        case 'FETCH_DATA_ITEMS':
            return Object.assign({}, state, {'data': action.chats});

        case 'IS_FETCH_ITEMS':
            return Object.assign({}, state, {'refresh': action.flag});

        default:
            return state;
    }
}

export default reducer;