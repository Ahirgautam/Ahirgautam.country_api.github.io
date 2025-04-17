const theamToggler = document.getElementsByClassName("day_night_toggle")[0];
const theamImg = document.querySelector(".day_night_toggle .toggle_icon");
const theamText = document.querySelector(".day_night_toggle .toggle_text");



if(window.matchMedia("(prefers-color-scheme : light)").matches || localStorage.getItem("theme") === "light"){
    setToLight();
}

theamToggler.addEventListener("click", ()=>{
    if(document.body.dataset.theam === 'dark' ){
        setToLight();
        localStorage.setItem("theme", "light");
    }else{
        setToDark();
        localStorage.setItem("theme", "dark");
    }
});
window.matchMedia("(prefers-color-scheme : dark)").addEventListener("change", (e)=>{
    e.matches ? setToDark() : setToLight();
});

function setToDark(){
    theamImg.src = "icons/moon.svg";
    theamText.innerText = "Dark Mode";
    document.body.dataset.theam = "dark";
}

function setToLight(){
    theamImg.src = "icons/sun.svg";
    theamText.innerText = "Light Mode";
    document.body.dataset.theam = "light";
}
