const initialState = {
    count: 0,
    name: "Jon",
    age: 27, 
    phoneNumber: "099999999",
    text:"",
    list: ['Armenia', 'Georgia', 'Germany', 'France', 'Russia', 'Italy'],
    filtList:[],
    inputVal:""
};

// const list = ['Armenia', 'Georgia', 'Germany', 'France', 'Russia', 'Italy'];


function reducer(state = initialState, action){
    // console.log(action);
    switch (action.type) {
        case "INCREMENT_COUNT":
            return {...state, count: state.count + 1}
        case "DICREMENT_COUNT":
            return {...state, count: state.count - 1}
        case "CHANGE_TEXT":
            return {...state, text: action.payload}
        case "FILTER_TEXT":
            // const filterList = list.filter((item)=>item.toLowerCase().includes(action.payload.toLowerCase()))
            const filtered = state.list.filter((item)=>item.toLowerCase().includes(action.payload))
            // return {...state, list: filterList}
            return {...state, inputVal: action.payload, filtList:filtered}
        default:
            return state
    }
}

export default reducer













// import {useState} from 'react'

// const initialState = {
//     count: 0,
//     name: "Jon",
//     age: 27, 
//     phoneNumber: "099999999",
//     text:"",
//     list:['Armenia', 'Georgia', 'Germany', 'France', 'Russia', 'Italy'],
//     input:""
// };

// function useInputFilter(initialValue = '') {
//   const [input, setInput] = useState(initialValue);
//   const filterList = initialState.list.filter((item) =>
//     item.toLowerCase().includes(input.toLowerCase())
//   );
//   return [input, setInput, filterList];
// }

// function reducer(state = initialState, action){
//     console.log(action);
//     switch (action.type) {
//         case "INCREMENT_COUNT":
//             return {...state, count: state.count + 1}
//         case "DICREMENT_COUNT":
//             return {...state, count: state.count - 1}
//         case "CHANGE_TEXT":
//             return {...state, text: action.payload}
//         case "FILTER_TEXT":
//             const [input, setInput, filterList] = useInputFilter();
//             setInput(action.payload);
//             return {...state, input: action.payload, filterList}
//         default:
//             return state
//     }
// }

// export default reducer
