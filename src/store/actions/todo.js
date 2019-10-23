export function addTodo(todoTitle){
  return {
    type: "ADD_TODO",
    todoTitle
  }
}

export function deleteTodo(todoID){
  return {
    type: "DELETE_TODO",
    todoID
  }
}