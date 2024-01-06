import React from 'react' 
import Schools from "./components/Schools";
import "./App.css";

const App = () => {
  const SchoolsInfo = [
    {
      id: 1,
      name: 'ABC',
      fee: 1000,
      date: new Date(2000, 8, 10),
    },
    {
      id: 2,
      name: 'CBA',
      fee: 1000,
      date: new Date(2000, 8, 10),
    }
  ]
  return (
    <div className="App">
       <Schools info={SchoolsInfo}>
        <h1>School List</h1>
        </Schools> 
    </div>
  )
}

export default App
