
import { useDispatch, useSelector } from 'react-redux';

function TodoList(){
    const dispatch = useDispatch()
    const data = useSelector((state) => state)

    const handleRemoveClick = (id) => {
        dispatch({ type: "REMOVE_TODO", payload: id });
    };

    return(
        <div>
            {
                data.list.map((todo) =>{
                    return (
                        <div key={todo.id}>
                            {todo.text}
                            <button onClick={() => handleRemoveClick(todo.id)}>X</button>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default TodoList;