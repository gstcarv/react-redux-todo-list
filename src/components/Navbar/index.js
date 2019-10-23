import React from 'react';

import { Navbar } from 'react-bootstrap'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AppNavbar = () => (
  <Navbar bg="dark">
    <Navbar.Brand className="text-white">Todo List</Navbar.Brand>
    <a href="https://github.com/gstcarv/react-redux-todo-list" target="_blank" className="ml-auto">
      <FontAwesomeIcon icon={faGithub} className="text-white" style={{ fontSize: 30 }}/>
    </a>
  </Navbar>
);

export default AppNavbar;
