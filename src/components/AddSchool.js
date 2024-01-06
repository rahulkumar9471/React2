import React from 'react'
import SchoolForm from './SchoolForm'
import Card from './Card'

const AddSchool = (props) => {

  function printAddSchooldata(data) { 
    console.log('printAddSchooldata');
    console.log(data);

    // Calling parent function

    props.printData(data);
  }

  return (
    <Card>
        <SchoolForm AddSchooldata={printAddSchooldata}/>
    </Card>
  )
}

export default AddSchool