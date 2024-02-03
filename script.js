const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8f838f4533msh3170d58089c3769p1647ddjsn2d5fcd4123d0',
		'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
	}
};
const getWeather =(city)=>{
  cityName.innerHTML=city
//fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
fetch('https://weather338.p.rapidapi.com/locations/search?query=' + city, options)
/*try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/
.then(response => response.json())
.then((response) => {
  console.log(response)
  cloud_pct.innerHTML =response.cloud_pct
  temp.innerHTML =response.temp
  temp2.innerHTML =response.temp
  feels_like.innerHTML =response.feels_like
  humidity.innerHTML =response.humidity
  //humidity2.innerHTML =response.humidity
  min_temp.innerHTML =response.min_temp
  max_temp.innerHTML =response.max_temp
  wind_speed.innerHTML =response.wind_speed
  wind_speed2.innerHTML =response.wind_speed
  wind_degrees.innerHTML =response.wind_degrees
  sunrise.innerHTML =response.sunrise
  sunset.innerHTML =response.sunset
})
.catch(response => console.error(err));
}
submit.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)
})
getWeather("Delhi")
/*async function fetchWeather() {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8f838f4533msh3170d58089c3769p1647ddjsn2d5fcd4123d0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  fetchWeather();*/
  