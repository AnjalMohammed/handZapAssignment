const initialState = {
    albums: [],
};

export const photoReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_ALBUM_DATA':
            return Object.assign({}, state, {
                albums: action.payload,
            });


        default: return state;
    }
};
