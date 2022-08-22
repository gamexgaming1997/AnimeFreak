
const initialState = {
    RecommendedAnime: [],
    AnimeListContainer: [],
    isLoading: false,
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case 'FETCH_API': 
            return {
                AnimeListContainer: action.payload
            }
        case 'GET_RECOMMENDED_ANIME':
            return {
                RecommendedAnime: action.payload
            }
        default:
            return state;
    }
}

export default reducer;