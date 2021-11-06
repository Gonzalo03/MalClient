export const avgReducer = (initialState, action) => {

    switch(action.type){

        case 'anime' : 
        return {...initialState, anime : [...initialState.anime, action.payload]};

        case 'manga' : 
        return {...initialState, manga : [...initialState.manga, action.payload]};

        default: return initialState;

    }

}
