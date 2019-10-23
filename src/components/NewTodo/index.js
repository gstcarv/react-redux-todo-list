import React from 'react';
import './styles.css'

import { Form, Button, Col } from 'react-bootstrap'

export default function NewTodo() {
  return (
    <Form>
      <Form.Row>
        <Col sm={9} className="pb-2">
          <Form.Control
            type="text"
            placeholder="Type the todos's title here"
          />
        </Col>
        <Col sm={3}>
          <Button block variant="dark">ADD</Button>
        </Col>
      </Form.Row>
    </Form>
  );
}
