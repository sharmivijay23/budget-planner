
import './App.css';
import Income from './income';
import Savings from './savings'
import { Expenses } from './expenses';

// import { useBearStore } from './store';

function App() {
  return (
    
    <div className="app flex justify-center flex-col w-full min-h-screen" style= {{ backgroundImage : `url("/3.png")`}}>
       <div className='font-bold text-4xl flex justify-center mx-auto p-6'> Budget Planner </div>
      <div className='flex justify-center flex-col w-2/3 mx-auto border-purple-400 border-4 rounded-lg p-6'>
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













