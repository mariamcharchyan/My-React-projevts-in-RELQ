const initialState = {
    count: 0,
    name: "Jon",
    age: 27, 
    phoneNumber: "099999999"
};

function reducer(state = initialState, action){
    console.log(action);
    switch (action.type) {
        case "INCREMENT_COUNT":
            return {...state, count: state.count + 1}
        case "DICREMENT_COUNT":
            return {...state, count: state.count - 1}
        
        default:
            return state
    }
}

export default reducer