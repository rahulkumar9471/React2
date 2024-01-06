import React from 'react'; 
import Card from './Card';
import './schooldate.css';

const SchoolDate = (props) => {

    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();

  return ( 
    <Card className='date'>
        <p className="">{day}</p>
        <p className="">{month}</p>
        <p className="">{year}</p>
    </Card> 
  )
}

export default SchoolDate