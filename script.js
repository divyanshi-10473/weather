let searchicon=document.querySelector(".search-icon");
let container=document.querySelector(".container")
let input=document.querySelector(".input");
let temps=document.querySelector(".temp");
let des=document.querySelector(".des");
let info_humidity=document.querySelector(".info-humidity span");
let info_wind=document.querySelector(".info-wind span");
let image=document.querySelector(".image img");
const error=document.querySelector(".error");
searchicon.addEventListener('click',()=>{
         update();
})


const update=async()=>{
    let inpVal=input.value;
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${inpVal}&appid=11b54ea7179d7c892249f09800fbeec6&units=metric`;  
    let response = await fetch(URL);
    let data = await response.json();
    if(data.cod == '404'){
        container.style.visibility = "hidden";
        error.style.visibility="visible";
        return;
    }
    container.style.visibility = "visible";
        error.style.visibility="hidden";
    let temperature = data.main.temp;
    let description=data.weather[0].description;
    let humidity=data.main.humidity;
    let wind=parseInt(data.wind.speed);
    temps.innerHTML=`${temperature}<span>°C</span>`;
    des.innerText=`${description}`;
    info_humidity.innerText=`${humidity}%`;
    info_wind.innerText=`${wind}km/hr`
    switch(data.weather[0].main){
        case 'Clear':
            image.src="image/sunny.png";
            document.body.style.backgroundImage="url('https://images.freeimages.com/images/large-previews/e62/clear-sky-1363026.jpg?fmt=webp&w=500')"
            break;
        case 'Rain':
            image.src="image/cloudy.png";
            document.body.style.backgroundImage="url('https://thumb.ac-illust.com/dd/dd74e4fa17f37e7f1d3cf5f53530709d_t.jpeg')"
            break;
        case 'Snow':
            image.src="image/snowy.png";
            document.body.style.backgroundImage="url('https://www.creativefabrica.com/wp-content/uploads/2023/03/05/Merry-Christmas-of-the-nature-snow-fall-Graphics-63255225-1-580x386.jpg')"
            break;
        case 'Haze':
            image.src="image/foggy.png";
            document.body.style.backgroundImage="url('https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/fog--mist/foggy-morning-in-a-meadow.jpg')"
            break;
        case 'Mist':
            image.src="image/foggy.png";
            document.body.style.backgroundImage="url('https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/fog--mist/foggy-morning-in-a-meadow.jpg')"
            break;
        case 'Clouds':
            image.src="image/clouds.png";
            document.body.style.backgroundImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cloudy_sky_%2826171935906%29.jpg/1024px-Cloudy_sky_%2826171935906%29.jpg')"
            break;
        default:
            image.src="image/sunny.png";
            document.body.style.backgroundImage="url('https://images.freeimages.com/images/large-previews/e62/clear-sky-1363026.jpg?fmt=webp&w=500')"
           
    }
    

}