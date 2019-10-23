import React from 'react';
import './styles.css'

import { connect } from 'react-redux';
import * as TodoActions from '../../store/actions/todo'

import { Table } from 'react-bootstrap'

import { faTrash, faPen, faCheck, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TodosTable({ todos, dispatch, setEditingTodo, editingTodo }) {

  function deleteTodo(todoID) {
    setEditingTodo(null)
    dispatch(TodoActions.deleteTodo(todoID))
  }

  function completeTodo(todoID) {
    dispatch(TodoActions.completeTodo(todoID))
  }

  function reloadTodo(todoID) {
    dispatch(TodoActions.reloadTodo(todoID))
  }

  const isTodoDisabled = todo => {
    if (todo.completed) {
      return true
    } else {
      if (editingTodo) {
        if (editingTodo.id != todo.id) {
          return true
        }
      }
    }
    return false
  }

  return (
    <Table striped bordered hover className="todos-table mt-2">
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
            opacity: isTodoDisabled({ id, completed }) ? .2 : 1,
            pointerEvents: isTodoDisabled({ id, completeTodo }) ? 'none' : 'initial'
          }}>

            <td>{id}</td>
            <td>{title}</td>

            {
              !completed &&
              <>
                <td className="text-center text-danger" onClick={() => deleteTodo(id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </td>
                <td className="text-center text-info" onClick={() => setEditingTodo({ id, title })}
                    colSpan={(!editingTodo || editingTodo.id != id) ? 1 : 2}>
                  <FontAwesomeIcon icon={faPen} />
                </td>

                {(!editingTodo || editingTodo.id != id) &&
                  <td className="text-center text-success"
                    onClick={() => completeTodo(id)}>
                    <FontAwesomeIcon icon={faCheck} />
                  </td>}

              </>
            }

            {
              completed &&
              <td colSpan="3" className="text-center text-info" onClick={() => reloadTodo(id)}>
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
