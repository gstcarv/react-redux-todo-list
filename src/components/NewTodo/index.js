import React, { useState } from 'react';
import './styles.css'

import { connect } from 'react-redux'
import * as TodoActions from '../../store/actions/todo'

import { Form, Button, Col } from 'react-bootstrap'

function NewTodo({ dispatch }) {

  const [todoTitle, setTodoTitle] = useState('')

  function addTodo(e){
    e.preventDefault()
    dispatch(TodoActions.addTodo(todoTitle))
    setTodoTitle('')
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
          <Button 
            type="submit"
            block 
            variant="dark">ADD</Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default connect()(NewTodo)