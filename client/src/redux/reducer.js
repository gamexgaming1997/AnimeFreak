const initialState = {
    AnimeListContainer: [],
    isLoading: false,
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case 'FETCH_API': 
            return {
                AnimeListContainer: action.payload
            }
        default:
            return state;
    }
}

export default reducer;