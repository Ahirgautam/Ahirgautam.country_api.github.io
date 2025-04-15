let data = null;
let mapCodeToCountry = {};
function loadData(load){
    try{
        fetch("../data.json")
        .then(re => re.json())
        .then(re =>{
            data = re;
            for(let i = 0; i < data.length; i++){
                mapCodeToCountry[data[i].alpha3Code] = i;
            }
            load();
        })
    }
    catch(err){
        console.log(err);
    }
}

export {loadData, data, mapCodeToCountry};
