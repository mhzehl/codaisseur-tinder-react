import React, { PureComponent } from 'react'
import './Student.sass'

class Student extends PureComponent {
  render() {
    return(
      <div className='avatar'>
        <img src={`http://res.cloudinary.com/dyl4vtost/image/upload/v1487858487/Melvin_1_copy_fpel1a.jpg`} className='student-img' />
        <h2>Melvin Zehl</h2>
      </div>
    )
  }
}

export default Student
