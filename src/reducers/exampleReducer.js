const initialState = {
    count: 1,
};

export const exampleReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'INCREMENT_COUNTER':
            return Object.assign({}, state, {
                count: state.count + 1,
            });

        case 'DECREMENT_COUNTER':
            return Object.assign({}, state, {
                count: state.count - 1,
            });

        default: return state;
    }
};
