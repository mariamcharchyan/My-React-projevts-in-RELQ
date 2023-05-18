function TodoFooter({todos, onClearCompleted}) {
    const completedSize = todos.filter((todo) => todo.isCompleted).length;
    return(
        <form>
            <spam>{completedSize}/{todos.length} Completed</spam>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </form>
    )
}

export default TodoFooter;