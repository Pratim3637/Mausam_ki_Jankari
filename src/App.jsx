import react from 'react';
import './App.css';
import Input from './component/input.jsx';
import axios from 'axios'
import { useEffect, useState } from 'react'
import './input.css';
import './input.css';
import './index.css';


function App() {

  const [degrees, setDegrees] = useState("")
  const [city, setCity] = useState("");
  const [description, setDescripton] = useState("");
  const [icon, setIcon] = useState("")
  const [Humadity, setHumadity] = useState("")
  const [wind, setWind] = useState("")
  const [country, setCountry] = useState("");
  // const [date, setDate] = useState("");
  const [textlocation,setTextlocation]= useState("")
  const [feels,setfeels] =useState("")
  const [dataFetched,setDatafetched]= useState(false)


  const APIkey = '5d24fe00fa788a2db8a60092604b28aa';

  const fetchData = async (e) => {
    e.preventDefault()
    try{
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${textlocation}&appid=${APIkey}&units=metric`);
    const data = await res.data
    setDegrees(data.main.temp)
    setCity(data.name)
    setDescripton(data.weather[0].description)
    setIcon(data.weather[0].icon)
    setHumadity(data.main.humidity)
    setWind(data.wind.speed)
    setCountry(data.sys.country)
    // setDate(data.dt)
    setfeels(data.main.feels_like)
    setDatafetched(true)
    console.log(data)

    }catch(error){
      console.log(error)
      alert("plz enter a valid city location")
    }
    

    
  }
  const defaultDatafetched =async ()=>{
    if(!dataFetched){
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=samastipur&appid=${APIkey}&units=metric`);
    const data = await res.data

    setDegrees(data.main.temp)
    setCity(data.name)
    setDescripton(data.weather[0].description)
    setIcon(data.weather[0].icon)
    setHumadity(data.main.humidity)
    setWind(data.wind.speed)
    setCountry(data.sys.country)
    setfeels(data.main.feels_like)
    console.log(data)
  
    }

  }

  useEffect(() => {
    defaultDatafetched();
  }, [])

  return (
    <>
    <div className='heading'>
    <marquee direction="left-right" >...Mausam Ki Jankari..</marquee>
    </div>
    <div className="box">
      
      <div className="weather">
        <Input text={(e)=>setTextlocation(e.target.value)} submit={fetchData} func={fetchData} className="inputData"></Input>
        <div className='weather-display' >
          <h2 className='location'>Current Weather in {city}</h2>

        </div>
        <div>
          <h1 className='deg'>{degrees}°C feels like {feels}°C </h1>
        </div>

        <div className='dec'>
          <div >
            <div className='weather-des-head'>
              <span className='img-icon'>
                <img src={` http://openweathermap.org/img/wn/${icon}.png`} alt="icon" /> </span>
              <h3>{description}</h3>
            </div>

            <h3 className='weve_one'>Humadity: {Humadity}%</h3>
            <h3 className="wave_two">Wind Speed: {wind} m/s</h3>
          </div>
          <div className='country'>
            <h3>Country: {country}</h3>
          </div>
        </div>

      </div>
    </div>
    </>
  );
  
}

export default App;