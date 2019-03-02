const initialState = {
    albums: [],
    albumPhotos: [],
};

export const photoReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_ALBUM_DATA':
            return Object.assign({}, state, {
                albums: action.payload,
            });

        case 'SET_PHOTO_DATA':
            return Object.assign({}, state, {
                albumPhotos: action.payload,
            });

        default: return state;
    }
};
