//jshint esversion:6
let weather={
    "apiKey" : "a87b3645166900960c3e7f508e1d6e1d",
    fetchWeather:function (city){
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&unit=metrics&appid="+ this.apiKey)
        .then((response)=>response.json())
    .then((data)=> this.displayWeather(data));
    },
    displayWeather:function(data){
        const {name} =data;
        const {icon, description} = data.weather[0];
        var {temp,humidity} = data.main;
        
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText="Weather in " + data.name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.description').innerText=description;
        document.querySelector('.temp').innerHTML=Math.round((( temp - 273.15) * 9/5) + 32) + "<span>&#8451</span>";
        document.querySelector('.humidity').innerText="Humidity : " +humidity+ "%";         
        document.querySelector(".wind").innerText="wind speed :" + speed + " km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value);
    },
};
document.querySelector(".search button").addEventListener("click", ()=>{
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", (event)=>{
    if(event.key == "Enter"){
        weather.search();
    }
});

