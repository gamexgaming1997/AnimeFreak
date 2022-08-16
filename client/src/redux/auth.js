const initialState = {
    isClient: false
}

const auth = (state = initialState,action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('user', JSON.stringify({...action?.data}));
            return {...state, isClient: true }
        case 'LOGOUT':
            localStorage.clear();
            return {...state, isClient: false }
        default:
            return state;
    }
}

export default auth;