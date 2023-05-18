const initialState = {
    list:[],
};

function reducer(state = initialState, action){
    // console.log(action);
    switch (action.type) {
        case "ADD_TODO":
            return { list: [
                    ...state.list,
                    {
                        id: Math.random(),
                        text: action.payload
                    }
                ]
            }
        
        case "REMOVE_TODO":
                return {
                    list: state.list.filter((todo) => todo.id !== action.payload)
                };

        default:
            return state
    }
}

export default reducer;
