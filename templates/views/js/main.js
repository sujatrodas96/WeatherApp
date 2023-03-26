const cityname = document.getElementById('city');
const submitbtn = document.getElementById('submission');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer');

const getinfo = async(event) => {
    event.preventDefault();
    let cityval = cityname.value;
    if(cityval === ""){
        city_name.innerText = `plz write the city name`;
        datahide.classList.add('data_hide'); 
    }
    else{
        try{
            // let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid={d7300eeb0e824393a85193136232302}`;
            let url = `http://api.weatherapi.com/v1/current.json?key=d7300eeb0e824393a85193136232302&q=${cityval}&aqi=yes`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];

            city_name.innerText = `${arrdata[0].location.name}, ${arrdata[0].location.country}`;
            temp.innerText = arrdata[0].current.temp_c;
            temp_status.innerText = arrdata[0].current.condition.text;

            datahide.classList.remove('data_hide');

        }
        catch{
            city_name.innerText = `plz write the city name`;
            datahide.classList.add('data_hide');
        }
        
    }
}

submitbtn.addEventListener('click', getinfo);