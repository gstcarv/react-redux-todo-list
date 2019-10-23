import React from 'react';

import Todos from './Todos'
import AppNavbar from '../components/Navbar'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../store'

const App = () => (
  <ReduxProvider store={store}>
    <AppNavbar />
    <Todos />
  </ReduxProvider>
);

export default App;
