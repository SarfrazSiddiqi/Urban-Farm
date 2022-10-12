import React from 'react'
import './Alert.css'



function Alert(props) {
  return (
    <div className='alert-style'>
        {props.alert}
    </div>
  )
}

export default Alert