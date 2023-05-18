import { useState } from "react";

function TodoForm({onAdd}) {

    const [text, setText] = useState("");
    return(
        <>
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value)
            }}/>
            <button onClick={(e) => {
                onAdd(text);
                setText("");
            }}> Add </button>
        </>
    )
}

export default TodoForm;