function TodoItem({todo, onDelete}){
    return(
        <div>
            {todo.text}
            <button onClick={() => {onDelete(todo)}}>X</button>
        </div>
    )
}

export default TodoItem;