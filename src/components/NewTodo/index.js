import React, { useState, useEffect } from 'react';
import './styles.css'

import { connect } from 'react-redux'
import * as TodoActions from '../../store/actions/todo'

import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Form, Button, Col } from 'react-bootstrap'

function NewTodo({ dispatch, editingTodo, setEditingTodo }) {

  const [todoTitle, setTodoTitle] = useState('')

  useEffect(() => {
    if (editingTodo) {
      setTodoTitle(editingTodo.title)
    } else {
      setTodoTitle("")
    }
  }, [editingTodo])

  function addTodo(e) {
    e.preventDefault()
    if (todoTitle.length >= 3) {
      if (!editingTodo) {
        dispatch(TodoActions.addTodo(todoTitle))
        setTodoTitle('')
      } else {
        updateTodo()
      }
    }
  }

  function updateTodo() {
    const editedTodo = {
      ...editingTodo,
      title: todoTitle
    }
    dispatch(TodoActions.editTodo(editedTodo))
    setEditingTodo(null)
  }

  return (
    <Form onSubmit={addTodo}>
      <Form.Row>
        <Col sm={9} className="pb-2">
          <Form.Control
            type="text"
            value={todoTitle}
            placeholder="Type the todos's title here"
            onChange={({ nativeEvent }) => setTodoTitle(nativeEvent.target.value)}
          />
        </Col>
        <Col sm={3}>

          {!editingTodo &&
            <Button
              disabled={todoTitle.length < 3}
              type="submit"
              block
              variant="dark">ADD
          </Button>}

          {editingTodo &&
            <Form.Row>
              <Col>
                <Button
                  disabled={todoTitle.length < 3}
                  block
                  variant="outline-success"
                  onClick={updateTodo}>
                  <FontAwesomeIcon icon={faCheck} />
                </Button>
              </Col>
              <Col>
                <Button
                  block
                  variant="outline-danger"
                  onClick={() => setEditingTodo(null)}>
                  <FontAwesomeIcon icon={faTimes} />
                </Button>
              </Col>
            </Form.Row>}

        </Col>
      </Form.Row>
    </Form>
  );
}

export default connect()(NewTodo)