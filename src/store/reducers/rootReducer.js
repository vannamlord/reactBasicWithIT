const initState = {
    users: [
        { id: 1, name: 'Nam' },
        { id: 2, name: 'Long' }
    ]
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>run into delete user:', action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
        default:
            return state;
    }
}

export default rootReducer;