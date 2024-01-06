import React,{useState} from 'react';
import SchoolDate from './SchoolDate';
import Card from './Card';
import './schoollist.css';

const SchoolList = (props) => { 

  const [name, setName] = useState(props.name);

  function clickHandler () {
    setName('ZYX');
  }

  return (
    <Card className='schoollist'>
        <SchoolDate date= {props.date}/>
        <div>
            <h4>{name}</h4>
        </div>
        <button onClick={clickHandler}>Add cart</button>
    </Card>
  )
}

export default SchoolList