const initialState = {
    userName: '',
    userId: '',
    loading: true,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_USER_DATA':
            return Object.assign({}, state, {
                userName: action.payload.name,
                userId: action.payload.id,
            });

        case 'SET_LOADING_STATE':
            return Object.assign({}, state, {
                loading: action.payload
            });


        default: return state;
    }
};
