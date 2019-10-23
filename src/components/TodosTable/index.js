import React from 'react';
import './styles.css'
import { Table } from 'react-bootstrap'

import { faTrash, faPen, faCheck } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const TodosTable = () => (
  <Table striped bordered hover className="todos-table">
    <thead>
      <tr>
        <th>ID</th>
        <th className="title-col">Todo Title</th>
        <th colSpan="3">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Say Hello</td>
        <td className="text-center text-danger">
          <FontAwesomeIcon icon={faTrash}/>
        </td>
        <td className="text-center text-info">
          <FontAwesomeIcon icon={faPen}/>
        </td>
        <td className="text-center text-success">
          <FontAwesomeIcon icon={faCheck}/>
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>Say Hello</td>
        <td className="text-center text-danger">
          <FontAwesomeIcon icon={faTrash}/>
        </td>
        <td className="text-center text-info">
          <FontAwesomeIcon icon={faPen}/>
        </td>
        <td className="text-center text-success">
          <FontAwesomeIcon icon={faCheck}/>
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>Say Hello</td>
        <td className="text-center text-danger">
          <FontAwesomeIcon icon={faTrash}/>
        </td>
        <td className="text-center text-info">
          <FontAwesomeIcon icon={faPen}/>
        </td>
        <td className="text-center text-success">
          <FontAwesomeIcon icon={faCheck}/>
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>Say Hello</td>
        <td className="text-center text-danger">
          <FontAwesomeIcon icon={faTrash}/>
        </td>
        <td className="text-center text-info">
          <FontAwesomeIcon icon={faPen}/>
        </td>
        <td className="text-center text-success">
          <FontAwesomeIcon icon={faCheck}/>
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>Say Hello</td>
        <td className="text-center text-danger">
          <FontAwesomeIcon icon={faTrash}/>
        </td>
        <td className="text-center text-info">
          <FontAwesomeIcon icon={faPen}/>
        </td>
        <td className="text-center text-success">
          <FontAwesomeIcon icon={faCheck}/>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default TodosTable;
