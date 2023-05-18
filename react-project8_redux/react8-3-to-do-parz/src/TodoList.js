import TodoItem from "./TodoItem";

function TodoList({todos, onDelete}){
    return(
        <div>
            {
                todos.map((todo) =>{
                    return (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo}
                            onDelete={onDelete}
                        />

                    )
                })
            }
        </div>
    )

}

export default TodoList;