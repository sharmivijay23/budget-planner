import { useState } from 'react';
import './App.css';
import Income from './income';
import Savings from './savings'
import { Expenses } from './expenses';

import { useBearStore } from './store';

function App() {
  return (
    <div className='App'>
      <h1> Budget Planner </h1>
      <div className='table'>
        <h2 className='tabname'> Budget </h2>
        {/* <Bears /> */}
        <Income />
        <Savings />
        <Expenses />

      </div>
    </div>
  )
}

// function Bears() {
//   const { bears, setPopulation } = useBearStore()

//   return <>
//     There are {bears} bears.
//     Set: <input type="number" onChange={e => setPopulation(parseInt(e.target.value))} />
//   </>
// }

export default App;













