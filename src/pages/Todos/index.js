import React, { useState } from 'react';
import './styles.css'
import { connect } from 'react-redux'

import { Container, Row, Col } from 'react-bootstrap'

import NewTodo from '../../components/NewTodo'
import TodosTable from '../../components/TodosTable';
import CompletedTodos from '../../components/CompletedTodos';
import DeletedTodos from '../../components/DeletedTodos';

function Todos() {

  const [editingTodo, setEditingTodo] = useState(null)

  return (
    <Container fluid className="p-3">
      <Row>
        <Col sm={7}>
          <h4>Add new Todo</h4>
          <NewTodo
            editingTodo={editingTodo}
            setEditingTodo={setEditingTodo}
          />
          <TodosTable
            editingTodo={editingTodo}
            setEditingTodo={setEditingTodo}
          />
        </Col>
        <Col sm={5}>
          <CompletedTodos />
          <DeletedTodos />
        </Col>
      </Row>
    </Container>
  )
};

export default connect()(Todos);
