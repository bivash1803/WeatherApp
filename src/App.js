//import "bootstarp/dist/css/bootstrap.min.css"
import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {

  const apiKey = "b97b14cd3ae9bee3270217775a3ea09b";
  const[inputCity,setInputCity] = useState("")
  const[data,setData] = useState({})


const getWeatherDetails =(cityName)=>{
  if(!cityName) return
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    apiKey;
  axios.get(apiUrl).then((res)=>{
    console.log("response",res.data)
    setData(res.data)
  }).catch((err)=>{
    console.log("err",err)
  })
}
 const handleChangeInput = (e) => {
   console.log("value", e.target.value);
   setInputCity(e.target.value);
 }

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  }



return (
  <div className="col-md-12">
    <div className="weatherBg">
      <h1 className="heading">WEATHER INFO</h1>

      <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className="form-control"value ={inputCity} onChange= {handleChangeInput} />
        <button className="btn btn-primary" type="button"
          onClick={handleSearch}
          >Search
        </button>
      </div>
    </div>
    {Object.keys(data).length>0 &&
    <div className="col-md-12 text-center mt-5">
      <div className="shadow rounded weatherResultBox">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCVQXEaNF_UHJiJYzHaDgqMCXS0xm9hFKnDWFN9Dr-fQ&s"
        />

        <h5 className="weatherCity">{data?.name}</h5>
        <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
      </div>
    </div>
    }
  </div>
);
}

export default App;
