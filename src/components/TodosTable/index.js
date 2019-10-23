import React from 'react';
import './styles.css'

import { connect } from 'react-redux';
import * as TodoActions from '../../store/actions/todo'

import { Table } from 'react-bootstrap'

import { faTrash, faPen, faCheck, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TodosTable({ todos, dispatch }) {

  function deleteTodo(todoID) {
    dispatch(TodoActions.deleteTodo(todoID))
  }

  function completeTodo(todoID) {
    dispatch(TodoActions.completeTodo(todoID))
  }

  return (
    <Table striped bordered hover className="todos-table">
      <thead>
        <tr>
          <th>ID</th>
          <th className="title-col">Todo Title</th>
          <th colSpan="3">Actions</th>
        </tr>
      </thead>
      <tbody>

        {todos.map(({ id, title, completed }) => (
          <tr key={id} style={{
            textDecoration: completed ? 'line-through' : 'initial',
            opacity: completed ? .3 : 1
          }}>
            <td>{id}</td>
            <td>{title}</td>

            {
              !completed &&
              <>
                <td className="text-center text-danger" onClick={() => deleteTodo(id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </td>
                <td className="text-center text-info">
                  <FontAwesomeIcon icon={faPen} />
                </td>
                <td className="text-center text-success" onClick={() => completeTodo(id)}>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </>
            }

            {
              completed &&
              <td colSpan="3" className="text-center text-info" onClick={() => completeTodo(id)}>
                <FontAwesomeIcon icon={faUndo} />
              </td>
            }

          </tr>
        ))}

      </tbody>
    </Table>
  );
}

const mapStateToProps = state => ({
  todos: state.todo.todos.filter(t => !t.deleted)
});

export default connect(mapStateToProps)(TodosTable);
