import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './Student.sass'

class Student extends PureComponent {

  render() {

    const { img_url, name } = this.props

    return(
      <div className='avatar'>
        <img src={`http://res.cloudinary.com/dyl4vtost/image/upload/v1487858487/Melvin_1_copy_fpel1a.jpg`} className='student-img' />
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}

const mapStateToProps = ({ matches }) => ({ matches })

export default connect(mapStateToProps)(Student)
