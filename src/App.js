import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Provider } from 'react-redux'
import configureStore from './store'
import Home from './Components/Home'

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Grid>
        <Home />
      </Grid>
    </Provider>
  );
}

export default App;
