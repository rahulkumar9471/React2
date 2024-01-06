import React from 'react' 
import Schools from "./components/Schools";
import "./App.css";
import AddSchool from './components/AddSchool';

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
  ];

  function printSchoolData(data) {
    console.log("app.js");
    console.log(data);
  }

  return (
    <div className="App">
      <AddSchool printData={printSchoolData}/>
       <Schools info={SchoolsInfo}>
        <h1>School List</h1>
        </Schools> 
    </div>
  )
}

export default App
