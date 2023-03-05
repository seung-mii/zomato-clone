const countryBtn = document.querySelector("footer .country");
const countryList = document.querySelector("footer .country_list");
const countryListLi = document.querySelectorAll("footer .country_list li");
const currentCountryImg = document.querySelector("footer div.head .country img");
const currentCountryText = document.querySelector("footer .select_country_btn"); 
const langageBtn = document.querySelector("footer .langage");
const langageList = document.querySelector("footer .langage_list");
const langageListLi = document.querySelectorAll("footer .langage_list li");
const currentLangageImg = document.querySelector("footer div.head .langage img");
const currentLangageText = document.querySelector("footer .select_langage_btn");

let onCountryList = false;
let onLangageList = false;

function onCountryClick(event) {
    if (!onCountryList) {
        langageList.style.display = "none";
        countryList.style.display = "block";
        onCountryList = true;
    }
    else {
        countryList.style.display = "none";
        onCountryList = false;
    }
}

function onCountryListClick(event) {
    // console.log(event);
    // currentCountryImg.src = event.target.firstElementChild..;
    currentCountryText.innerText = event.target.innerText;
    const length = currentCountryText.innerText.length;
    currentCountryText.style.width = 120 + length*6 + "px";
}

function onLangageClick(event) {
    if (!onLangageList) {
        countryList.style.display = "none";
        langageList.style.display = "block";
        onLangageList = true;
    }
    else {
        langageList.style.display = "none";
        onLangageList = false;
    }
}

function onLangageListClick(event) {
    // console.log(event);
    currentLangageText.innerText = event.target.innerText;
    const length = currentLangageText.innerText.length;
    currentLangageText.style.width = 115 + length*5 + "px";
}

countryBtn.addEventListener("click", onCountryClick);
langageBtn.addEventListener("click", onLangageClick);
countryList.addEventListener("click", onCountryListClick);
langageList.addEventListener("click", onLangageListClick);