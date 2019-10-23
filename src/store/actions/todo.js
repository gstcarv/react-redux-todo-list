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

export function restoreTodo(todoID){
  return {
    type: 'RESTORE_TODO',
    todoID
  }
}

export function completeTodo(todoID){
  return {
    type: 'COMPLETE_TODO',
    todoID
  }
}

export function reloadTodo(todoID){
  return {
    type: 'RELOAD_TODO',
    todoID
  }
}