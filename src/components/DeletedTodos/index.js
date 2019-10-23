import React from 'react';
import { Jumbotron } from 'react-bootstrap'

import { connect } from 'react-redux'

import { faTrashRestore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DeletedTodos = ({ deletedTodos }) => (
  <Jumbotron>
    <h6 className="text-danger">Deleted Todos</h6>
    { deletedTodos.length == 0 && <p>Nothing here</p> }
    <ul>
      {deletedTodos.map(todo => (
        <li key={todo.id}>
          {todo.title}
          <FontAwesomeIcon
            icon={faTrashRestore}
            className="float-right text-secondary"
            style={{ cursor: 'pointer' }}
          />
        </li>
      ))}
    </ul>
  </Jumbotron>
);

const mapStateToProps = state => ({
  deletedTodos: state.todo.todos.filter(t => t.deleted)
});

export default connect(mapStateToProps)(DeletedTodos);
