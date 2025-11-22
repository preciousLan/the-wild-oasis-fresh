import React from 'react'
import Spinner from '../_components/Spinner'

const loading = () => {
  return (
    <div className='grid items-center justify-center'>
        <Spinner/>
        <p>Loading Cabin Data....</p>
        </div>
  )
}

export default loading