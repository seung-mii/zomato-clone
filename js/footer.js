const countryBtn = document.querySelector("footer .country");
const countryList = document.querySelector("footer .country_list");
const countryListLi = document.querySelectorAll("footer .country_list li");
const countryDiv = document.querySelector("footer .footer_select .country_speech_bubble");
const currentCountryImg = document.querySelector("footer div.head .country img");
const currentCountryText = document.querySelector("footer .select_country_btn"); 
const languageBtn = document.querySelector("footer .language");
const languageList = document.querySelector("footer .language_list");
const languageListLi = document.querySelectorAll("footer .language_list li");
const languageDiv = document.querySelector("footer .footer_select .language_speech_bubble");
const currentLanguageImg = document.querySelector("footer div.head .language img");
const currentLanguageText = document.querySelector("footer .select_language_btn");

let onCountryList = false;
let onLanguageList = false;

function onCountryClick(event) {
    if (!onCountryList) {
        languageList.style.display = "none";
        languageDiv.style.display = "none";
        countryList.style.display = "block";
        countryDiv.style.display = "block";
        onCountryList = true;
        countryBtn.focus();  
    } else {
        countryList.style.display = "none";
        countryDiv.style.display = "none";
        onCountryList = false;
    }
    event.stopPropagation();  
}

function onCountryListClick(event) {
    currentCountryText.innerText = event.target.innerText;
    const length = currentCountryText.innerText.length;
    currentCountryText.style.width = 120 + length * 6 + "px";
    countryList.style.display = "none";
    countryDiv.style.display = "none";
    onCountryList = false;
    event.stopPropagation();  
}

function onLanguageClick(event) {
    if (!onLanguageList) {
        countryList.style.display = "none";
        countryDiv.style.display = "none";
        languageList.style.display = "block";
        languageDiv.style.display = "block";
        onLanguageList = true;
        languageBtn.focus();  
    } else {
        languageList.style.display = "none";
        languageDiv.style.display = "none";
        onLanguageList = false;
    }
    event.stopPropagation();  
}

function onLanguageListClick(event) {
    currentLanguageText.innerText = event.target.innerText;
    const length = currentLanguageText.innerText.length;
    currentLanguageText.style.width = 115 + length * 5 + "px";
    languageList.style.display = "none";
    languageDiv.style.display = "none";
    onLanguageList = false;
    event.stopPropagation(); 
}

function handleFocusOut(event) {
    if (onCountryList && !countryList.contains(event.relatedTarget) && !countryBtn.contains(event.relatedTarget)) {
        countryList.style.display = "none";
        countryDiv.style.display = "none";
        onCountryList = false;
    }
    if (onLanguageList && !languageList.contains(event.relatedTarget) && !languageBtn.contains(event.relatedTarget)) {
        languageList.style.display = "none";
        languageDiv.style.display = "none";
        onLanguageList = false;
    }
}

countryBtn.addEventListener("click", onCountryClick);
languageBtn.addEventListener("click", onLanguageClick);
countryList.addEventListener("click", onCountryListClick);
languageList.addEventListener("click", onLanguageListClick);
document.addEventListener("focusout", handleFocusOut);