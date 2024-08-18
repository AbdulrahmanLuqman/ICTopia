import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';

const Service = ({Icon:icon, servname, servdesc}) => {
  return (
    <div className='text-white'>
        <p className='text-4xl'>{icon}</p>
        <h2 className='mt-4'>{servname}</h2>
        <p className='mt-4'>{servdesc}.</p>
    </div>
  )
}

export default Service
