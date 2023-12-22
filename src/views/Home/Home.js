import React, { useEffect } from 'react';
import './Home.css'
import axios from 'axios';
import { useState } from 'react';
import img1 from './wheather.webp'

const Home = () => {

  const [wheather,setwheather] = useState({});
  const [description,setdescription] = useState()
  const [city,setcity] = useState('nagpur');
  async function loadwheather() {
    try{
      const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q= ${city} &appid=f652964084c552e8c0492237a3fabd9c`)
      console.log(response?.data);
      setwheather(response?.data);
    }
    catch(error){
      console.log(error);
    }
  
  }
  useEffect(()=>{
    loadwheather();
  },[]);
 useEffect(()=>{
  loadwheather();
 },[city]);

  return (
    <div>
<div className='maindiv'>
  <div className='background'>
    <img src={img1} className='wheatherimg'></img>
    <h2>City Name : {wheather?.name}</h2>

  </div>

  <div className='wheatherapp'>
    <div className='wheatherdiscripton'>
      <div className='whatherimgchange'>
        <div><span></span></div>

      </div>
      <div className='displaywheatherdetail'>
        <div className='searbar'>
          <input type='text' value={city} onChange={(e)=>{
setcity(e.target.value);
          }} placeholder='search any city' className='searchherer' />
        </div>
        <div className='searbar'>
          <span className='detail'>Detail</span>
        </div>
        <div  className='searbar'>
          <span className='temprature'>Temperature</span>
          <span className='data'>{(wheather?.main?.temp - 273).toFixed(2)} °C</span>
        </div>
        <div className='searbar'>
          <span className='temprature'>Humidity</span>
          <span className='datavisibility'>{wheather?.main?.humidity}</span>
        </div>
        <div className='searbar'>
          <span className='temprature'>Visibility </span>
          <span className='datavisibility'> {wheather?.visibility}</span>
        </div>
        <div className='searbar'>
          <span className='temprature'>Wind Speed</span>
          <span className='datavisibility'>{wheather?.wind?.speed}</span>
        </div>

      </div>
    </div>

  </div>
</div>

      {/* this is weather app
     <p>city: {wheather?.name}</p>
     <p>temperature: {(wheather?.main?.temp - 273).toFixed(2)}</p>
     <p>description:{description}</p> */}
     
    
    </div>
  )
}

export default Home
