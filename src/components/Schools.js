import React from 'react'
import SchoolList from './SchoolList';
import Card from './Card';
import './schools.css';

const Schools = (props) => {
  return (
    <Card className='school'>
      {props.children} 
      <SchoolList 
        name = {props.info[0].name}
        fee = {props.info[0].fee}
        date = {props.info[0].date}
      />
      <SchoolList 
        name = {props.info[1].name}
        fee = {props.info[1].fee}
        date = {props.info[1].date}
      />
    </Card>
  )
}

export default Schools