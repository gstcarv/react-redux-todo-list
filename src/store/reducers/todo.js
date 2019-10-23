const INITIAL_STATE = {
  lastIndex: 0,
  todos: []
}

function reducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case 'ADD_TODO': {
      return {
        lastIndex: ++state.lastIndex,
        todos: [
          ...state.todos,
          { id: state.lastIndex, title: action.todoTitle }
        ]
      }
    }
  }
  return state
}

export default reducer