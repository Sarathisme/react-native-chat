const initial = {
    user: {}, data: {}, dummy: [
        {
            "_id": {
                "$oid": "5c8f516d1a62820004e71978"
            },
            "id": "117518114602485909476",
            "message": "So what are the features of this application?",
            "timestamp": "1552896478354"
        },
        {
            "_id": {
                "$oid": "5c8f518d1a62820004e7197d"
            },
            "id": "114197253254528144173",
            "message": "Its a simple texting application. User can search for new users who are registered with this application and chat with them",
            "timestamp": "1552896396662"
        },
        {
            "_id": {
                "$oid": "5c8f51a61a62820004e71980"
            },
            "id": "117518114602485909476",
            "message": "how is the UI built?",
            "timestamp": "1552896535379"
        },
        {
            "_id": {
                "$oid": "5c8f51bc1a62820004e71985"
            },
            "id": "114197253254528144173",
            "message": "I've react js and seperated it into two pages.",
            "timestamp": "1552896444090"
        },
    ]
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