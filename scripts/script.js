import {loadData,data} from './fetchData.js'

const cardContainer = document.getElementsByClassName("card_container")[0];
const searchBox = document.getElementById('searchBox');
const dropDown = document.getElementsByClassName("drop_down")[0];
const goUp = document.getElementsByClassName("goto_top")[0];
let dropDownContent = document.getElementsByClassName("drop_down_content")[0];

let cards = cardContainer.children;

loadData(displayData)

async function displayData(){
    if(!data)return;
    for(let i = 0; i < data.length; i++){
        let element = data[i]
   
        let card = document.createElement("a");
        let cardImag = document.createElement("div");
        let cardInfo = document.createElement("div");
        let img = document.createElement("img");
        let countryName = document.createElement("h2");
        let countryPopulation = document.createElement("div");
        let countryRegion = document.createElement("div");
        let countryCapital = document.createElement("div");
        let population = document.createElement("span");
        let capital = document.createElement("span");
        let region = document.createElement("span");

        card.classList.add("card");
        
        cardImag.classList.add("country_img");
        cardInfo.classList.add("country_info");
        countryName.classList.add("country_name");
        countryCapital.classList.add("mb-1");
        countryRegion.classList.add("mb-1");
        countryPopulation.classList.add("mb-1");
        population.className = capital.className = region.className = "light-txt";

        card.dataset.name = element.name;
        card.dataset.region = element.region;
        countryName.innerText = element.name;
        population.innerText = (element.population).toLocaleString();
        capital.innerText = element.capital;
        region.innerText = element.region;
        
        countryPopulation.innerText = "Population : ";
        countryRegion.innerText = "Region : ";
        countryCapital.innerText = "Capital : ";

        img.src = element.flags.svg;
        img.alt = element.name;
        card.href = `preview.html?name=${element.alpha3Code}`;

        countryPopulation.append(population)
        countryRegion.append(region);
        countryCapital.append(capital);
        cardInfo.append(countryName, countryPopulation, countryRegion, countryCapital);
        cardImag.append(img);
        card.append(cardImag);
        card.append(cardInfo);

        cardContainer.append(
            card
        );

    }

}

async function  sleep(interval, card){
    return new Promise((r) =>{
        setTimeout(()=>{
            card.classList.remove("hide");
            r();
        }, interval);
    });
}




searchBox.addEventListener("input", (e)=>{
   for(let i = 0;i < cards.length; i++){
        let element = cards[i];
        if(element.dataset.name.toUpperCase().indexOf(searchBox.value.toUpperCase()) != -1){
            cardContainer.prepend(element)
        }
    };
})

dropDownContent.addEventListener("click", (e)=>{
    for(let i = 0; i < cards.length; i++){
        
        if(e.target.innerText === cards[i].dataset.region){
            cardContainer.prepend(cards[i]);
        }
    }
    dropDown.open = false;
});

goUp.addEventListener("click", ()=>{
    window.scrollTo(0,0);
});

window.addEventListener("scroll", (e)=>{
    if(window.scrollY >= window.innerHeight){
        goUp.classList.remove("hide");
    }else{
        goUp.classList.add("hide");
    }
})
