import React from 'react';
import './styles.css'

import { Jumbotron } from 'react-bootstrap'

import { connect } from 'react-redux'
import * as TodoActions from '../../store/actions/todo'

import { faTrashRestore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DeletedTodos({ deletedTodos, dispatch }) {

  function restoreTodo(todoID){
    dispatch(TodoActions.restoreTodo(todoID))
  }

  return (
    <Jumbotron>
      <h6 className="text-danger">Deleted Todos</h6>
      {deletedTodos.length == 0 && <p>Nothing here</p>}
      <ul className="deleted-todos-list">
        {deletedTodos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <FontAwesomeIcon
              icon={faTrashRestore}
              className="float-right text-secondary"
              style={{ cursor: 'pointer' }}
              onClick={() => restoreTodo(todo.id)}
            />
          </li>
        ))}
      </ul>
    </Jumbotron>
  )
};

const mapStateToProps = state => ({
  deletedTodos: state.todo.todos.filter(t => t.deleted)
});

export default connect(mapStateToProps)(DeletedTodos);
