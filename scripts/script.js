import {loadData,data} from './fetchData.js'

const cardContainer = document.getElementsByClassName("card_container")[0];
const searchBox = document.getElementById('searchBox');
const dropDown = document.getElementsByClassName("drop_down")[0];
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
        population.innerText = element.population;
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
        // console.log(element.region)
        // if(i % 2 == 0)
        //     await sleep(100);
    }

}

async function  sleep(interval){
    return new Promise((r) =>{
        setTimeout(r, interval);
    });
}




searchBox.addEventListener("keydown", (e)=>{
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

// `<a href="" class="card ${element.region}" data-name =  ${element.name}>
//         <div class="country_img">
//             <img src="" alt="">
//         </div>
//         <div class="country_info">
//             <h2 class="country_name">
//                 ${element.name}
//             </h2>
//             <div class="country_population mb-1">
//                 Population : <span class="population light-txt">${element.population}</span>
//             </div>
//             <div class="country_region mb-1">
//                 Region : <span class="region light-txt"> ${element.region}</span>
//             </div>
//             <div class="country_capital mb-1">
//                 Capital : <span class="capital light-txt"> ${element.capital}</span>
//             </div>
//         </div>
//     </a>`