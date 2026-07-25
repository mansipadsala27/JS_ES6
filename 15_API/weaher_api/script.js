const apiKey = "ceb501107e25e1913ebc3ebbf884b740";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const locationBtn = document.getElementById("locationBtn");

async function getWeather(city){

    try{

        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
        console.log("updateUI called");

        const res=await fetch(url);

        const data=await res.json();
        console.log(data);
        
        if(data.cod != 200){
            console.log(data);
            alert(data.message);
            return;
        }

        updateUI(data);

    }
    catch(err){
        console.log(err);
    }

}

function updateUI(data){

    document.getElementById("cityName").innerHTML=data.name;

    document.getElementById("temp").innerHTML=Math.round(data.main.temp)+"°C";

    document.getElementById("description").innerHTML=data.weather[0].description;

    document.getElementById("humidity").innerHTML=data.main.humidity+"%";

    document.getElementById("wind").innerHTML=data.wind.speed+" km/h";

    document.getElementById("pressure").innerHTML=data.main.pressure+" hPa";

    document.getElementById("visibility").innerHTML=(data.visibility/1000)+" km";

    document.getElementById("maxTemp").innerHTML=Math.round(data.main.temp_max)+"°";

    document.getElementById("minTemp").innerHTML=Math.round(data.main.temp_min)+"°";

    const icon=data.weather[0].icon;

    document.getElementById("weatherIcon").src=
    `https://openweathermap.org/img/wn/${icon}@4x.png`;

    const sunrise=new Date(data.sys.sunrise*1000);

    const sunset=new Date(data.sys.sunset*1000);

    document.getElementById("sunrise").innerHTML=
    sunrise.toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    });

    document.getElementById("sunset").innerHTML=
    sunset.toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    });

    document.getElementById("date").innerHTML=
    new Date().toDateString();

}

searchBtn.addEventListener("click",()=>{

    if(cityInput.value!=""){

        getWeather(cityInput.value);

    }

});

cityInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        getWeather(cityInput.value);

    }

});

locationBtn.addEventListener("click",()=>{

    navigator.geolocation.getCurrentPosition(async(position)=>{

        const lat=position.coords.latitude;

        const lon=position.coords.longitude;

        const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

        const res=await fetch(url);

        const data=await res.json();

        updateUI(data);

    });

});

getWeather("Surat");