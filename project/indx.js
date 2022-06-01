
                
                const getrealdata= ((orgVal)=>{
    const cond=document.getElementById("cond");
    const pressure=document.getElementById("pressure");
    const location=document.getElementById("location");
    const temp=document.getElementById("temp");
    const mxtemp=document.getElementById("mxtemp");
    const mntemp=document.getElementById("mntemp");
    const date=document.getElementById("date");
    const city=document.getElementById("city");
    const air=document.getElementById("air");
    const contentOfcond = document.getElementById("cond");
    cond.innerText = orgVal.weather[0].main;
    air.innerText="Air-speed : "+orgVal.wind.speed+" kmph";
    pressure.innerText="Pressure : "+orgVal.main.pressure+" Pa";
    location.innerText=orgVal.name+", "+orgVal.sys.country;
    temp.innerHTML=orgVal.main.temp +"&deg;C";
    mxtemp.innerHTML = "Max : " + orgVal.main.temp_max + "&deg;C";
    mntemp.innerHTML = "Min : " + orgVal.main.temp_min + "&deg;C";
    let atskyData = document.getElementById("atsky");
    console.log(contentOfcond.innerHTML);
    if (contentOfcond.innerHTML == "Clouds") {
    atskyData.innerHTML = "<i class='fas  fa-solid fa-cloud ' style='color:rgba(107, 106, 104, 0.623);'></i>";
    }
    else if (contentOfcond.innerHTML == "moon") {
    atskyData.innerHTML = "<i class='fa fa-solid fa-moon' style='color:white; '></i>";
    }
    else if (contentOfcond.innerHTML == "Rain") {
        atskyData.innerHTML = "<i class='fa fa-solid fa-cloud-rain' style='color:skyblue;'></i>";
    }
    // else if (contentOfcond.innerHTML == "Haze") {
    //     atskyData.innerHTML = "<i class='fas fa-solid fa-sun-haze' style='color:rgba(107, 106, 104, 0.623);'></i>";
    // }

    else //(contentOfcond.innerHTML == "Sunny") 
    {
    atskyData.innerHTML = "<i class='fa fa-solid fa-sun' style='color:rgb(209, 231, 13);'></i>";
    }

   
});


let realdata="";
let city="";
const search =async () => {
    city = document.getElementById("city").value;
    if(city==""||city==null)city="Delhi";
    console.log(city.value);
    const api ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=749ceaeac27f56a865d439d11a7b66b3";
        try{
             data=await fetch(api);
             realdata= await data.json();
            console.log(realdata);
            getrealdata(realdata);
        }catch(error){}
};

const inputMas = () => {
    window.alert("Please Enter city name");
};

const elem = document.getElementById("city");
elem.addEventListener("keypress", (event) => {
    if (event.key=== 'Enter') 
        search();        
   });

search();
setInterval(()=>{
    var newdate = new Date();

    const gettingday = () => {
        let d = newdate.getDay();

        let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = weekday[d];
        let date = newdate.getDate();
        let month = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]
        let m = newdate.getMonth();
        let year = newdate.getFullYear();
        return `${day} | ${date},${month[m]}`;
    };
    let periods = "";
    const gettingtime = () => {
        let hour = newdate.getHours();
        let mins = newdate.getMinutes();
        periods = "AM";

        if (hour >= 12) periods = "PM";
        hour = hour % 12;
        if (mins < 10) { mins = "0" + mins; }
        return `${hour}:${mins} ${periods}`;
    };
    const curdate = document.getElementById("date");
    curdate.innerHTML = gettingday() + "|" + gettingtime();
},500);
    

