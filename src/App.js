import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrency } from './actions/bitcoinData';
import './App.css';
import Grid from '@material-ui/core/Grid';
import DropDown from './components/DropDown';
import Chart from './components/Chart';

function App() {
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(getCurrency());
  });

  return (
    <div className="App">
      <div className="App-body">
        <Grid container>
          <Grid xs={6}>
            <DropDown />
          </Grid>
          <Grid xs={6}>
            <Chart />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
