import React from 'react';
import './styles.css'

import { connect } from 'react-redux'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Jumbotron } from 'react-bootstrap'

const CompletedTodos = ({ completedTodos }) => (
  <Jumbotron>
    <h6 className="text-success">Completed Todos</h6>
    {completedTodos.length == 0 && <p>Nothing here</p>}
    <ul className="completed-todos-list">
      {completedTodos.map(todo => (
        <li key={todo.id}>
          <FontAwesomeIcon
            icon={faCheck}
            className="text-secondary mr-3"
          />
          {todo.title}
        </li>
      ))}
    </ul>
  </Jumbotron>
);

const mapStateToProps = state => ({
  completedTodos: state.todo.todos.filter(t => t.completed)
});

export default connect(mapStateToProps)(CompletedTodos);
