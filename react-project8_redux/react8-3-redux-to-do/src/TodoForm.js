
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

function TodoForm() {
    const dispatch = useDispatch()
    // const data = useSelector((state) => state)
    const [text, setText] = useState("");

    const handleInputChange = (evt) => {
        setText(evt.target.value);
    };

    const handleButtonClick = () => {
        dispatch({type: "ADD_TODO", payload: text});
        setText("");
    };

    return(
        <>
            <input value={text} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Add</button>
        </>
    )
}

export default TodoForm;