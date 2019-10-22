import React from 'react';

import Todos from './Todos'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../store'

const App = () => (
  <ReduxProvider store={store}>
    <Todos />
  </ReduxProvider>
);

export default App;
