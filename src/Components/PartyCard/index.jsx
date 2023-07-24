import React from 'react';
import "./index.scss";


const index = ({img, title,artists}) => {
  return (
    <div className='card'>
        <img src={img}></img>
        <h6>{title}</h6>
        <p>{artists}</p>
    </div>
  )
}

export default index