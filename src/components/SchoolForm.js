import React,{useState} from 'react' 
import './SchoolForm.css';

const SchoolForm = (props) => {

  const [newName, setName] = useState('');
  const [newDate, setdate] = useState('');

  function nameHandaler (e) {
    setName(e.target.value);
    // console.log(e.target.value)
  }

  function dateHandaler (e) {
    setdate(e.target.value);
    // console.log(e.target.value)
  }

  function sbmitHandler(e){
    e.preventDefault();

    const newSchool = {
      name: newName,
      date: newDate
    } 

    // console.log(newSchool);

    props.AddSchooldata(newSchool);

    setName('');
    setdate('');
  }

  return ( 
    <form onSubmit={sbmitHandler}>
        <div className='add-name'>
            <label>Name</label>
            <input type="text" value={newName} onChange={nameHandaler}/>
        </div>
        <div className='add-date'>
            <label>Date</label>
            <input type="date" value={newDate} onChange={dateHandaler}/>
        </div>
        <div className='sbmit-button'>
            <button type="submit">Add School</button>
        </div>
    </form> 
  )
}

export default SchoolForm