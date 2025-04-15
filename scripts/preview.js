import {loadData,data,mapCodeToCountry} from './fetchData.js';

loadData(displayData);
let country;
const countryInfoContainer = document.getElementsByClassName("country_info_container")[0];
function displayData(){
    let params = new URLSearchParams(window.location.search);
    const countryCode = params.get("name");
    

    country = data[mapCodeToCountry[countryCode]];
    if(!country){
        countryInfoContainer.classList.add("hide");
        document.getElementsByClassName("not_found")[0].classList.remove("hide");        
        return;
    }
    
    let borderCountriesContainer = document.getElementsByClassName("border_countries_container")[0];
    countryInfoContainer.classList.remove("hide");
    document.querySelector(".country_info h2").innerText = country.name;
    document.querySelector(".country_img img").src = country.flags.svg;
    document.querySelector(".c_name").innerText = country.name;
    document.querySelector(".c_capital").innerText = country.capital;
    document.querySelector(".c_population").innerText = country.population;
    document.querySelector(".c_region").innerText = country.region;
    document.querySelector(".c_s_region").innerText = country.subregion;
    document.querySelector(".c_language").innerText =  country.languages.map((e)=> e.name).join(",");
    document.querySelector(".c_tld").innerText = country.topLevelDomain;
    document.querySelector(".c_currancy").innerText = country.currencies.map((e)=>e.name).join(",");
    if(country?.borders && country.borders.length != 0){
        country.borders.forEach(element => {
            let atag = document.createElement("a");
            atag.classList.add("border_country");
            let name = data[mapCodeToCountry[element]].name;
            atag.innerText = name;
            atag.href = `preview.html?name=${element}`;
            borderCountriesContainer.append(atag);
        });
    }else{
        borderCountriesContainer.classList.add("hide");
    }
        
}