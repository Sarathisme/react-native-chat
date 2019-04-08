const initial = {};

function chatReducer(state=initial, action) {
    if (action.type === 'FETCH_DATA_ITEMS') {
        fetch(getDataItems(action.id)).then(response => {
           return Object.assign({}, state, {'data': action.chats});
        });
    }

    if(action.type === 'IS_FETCH_ITEMS') {
        return Object.assign({}, state, {'refresh': action.flag});
    }

    return state;
}

export default chatReducer;