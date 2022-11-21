import React from 'react'
import loading from './loading.gif'
import loadingwh from './loadingwh.gif'

export default function Spinner(props) {
  return (
    <div className='text-center my-3'>
      <img src={props.mode == "dark" ? loading : loadingwh} alt="" />
    </div>
  )
}
