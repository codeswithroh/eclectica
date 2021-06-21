import Loader from '../Loader';
import Event from './Events';
import React,{useState, useEffect} from 'react';

export default function EventRoute() {
    const [load, setLoad]= useState(true)
    useEffect(() => {
      setTimeout(() => {
        setLoad(false)
      }, 2500)
    },[])
    return(
      <div>
          {load ? <Loader /> : <Event />}
      </div>
    )
  }