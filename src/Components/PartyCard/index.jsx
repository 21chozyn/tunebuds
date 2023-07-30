import React from 'react';
import "./index.scss";
import { useDispatch } from 'react-redux';
import {showPartyTab} from '../../Slices/UI/uiSlice'


const index = ({img, title,artists}) => {
  const dispatch = useDispatch();
  const handlePartyClick = ()=>{
    console.log(dispatch)
    dispatch(showPartyTab({data: {img:{src:img,avgColor:"#388BA1"},title,artists}}))
  }
  return (
    <div className='card' onClick={handlePartyClick} > 
        <img src={img}></img>
        <h6>{title}</h6>
        <p>{artists}</p>
    </div>
  )
}

export default index