const api={ key: "b092b19b34b04b06e0260e9acd7f0578",
base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector(".search");
searchbox.addEventListener("keypress", setValue);

function setValue(evt){
    if (evt.keyCode==13){
       
         console.log(searchbox.value);
    }
}
     
function getResults(Value){   
    fetch(`${api.base}weather?q=${Value}&units=metric&APPID=${api.key}`)
       .then(weather => {
           return weather.json();
       }).then(displayResults);
       }

       function displayResults(weather){
         console.log(weather);
           let city=document.querySelector('.loc .city');
           city.innerText= `${weather.name}, ${weather.sys.country}`;

           let now = new Date();
  let date = document.querySelector('.loc .date');
  date.innerText = dateBuild(now);

  let temp = document.querySelector('.current .temperature');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector('.high-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuild(d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
       
