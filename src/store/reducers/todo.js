const INITIAL_STATE = {
  lastIndex: 0,
  todos: []
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Adicionar a Todo
    case 'ADD_TODO': {
      return {
        lastIndex: ++state.lastIndex,
        todos: [
          ...state.todos,
          {
            id: state.lastIndex,
            title: action.todoTitle,
            deleted: false,
            completed: false
          }
        ]
      }
    }
    // Deleta a Todo
    case 'DELETE_TODO': {
      return {
        ...state,
        todos: state.todos.map(t => {
          if (t.id == action.todoID)
            t.deleted = true
          return t
        })
      }
    }
    // Restaura a Todo
    case 'RESTORE_TODO': {
      return {
        ...state,
        todos: state.todos.map(t => {
          if (t.id == action.todoID)
            t.deleted = false
          return t
        })
      }
    }
    // Completa a Todo
    case 'COMPLETE_TODO': {
      return {
        ...state,
        todos: state.todos.map(t => {
          if (t.id == action.todoID)
            t.completed = true
          return t
        })
      }
    }
    // Reload na Todo
    case 'RELOAD_TODO': {
      return {
        ...state,
        todos: state.todos.map(t => {
          if (t.id == action.todoID)
            t.completed = false
          return t
        })
      }
    }
  }
  return state
}

export default reducer