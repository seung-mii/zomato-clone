const headerInput = document.getElementsByClassName("header_input");
const headerArrow = document.getElementById("arrow_icon");
const login = document.querySelector("header button.login");
const loginHidden = document.querySelector("header .header_list .header_menu_list .modal");
const loginCloseBtn = document.querySelector("header .header_list .header_menu_list .modal span#close");
// const signup = document.querySelector("header button.signup");
// const signupHidden = document.querySelector("header .header_list .header_menu_list .modal");
// const signupCloseBtn = document.querySelector("header .header_list .header_menu_list .modal span#close");
const locationBtn = document.querySelector("header .header_container form #arrow_icon");
const locationDiv = document.querySelector("header .header_container .location_hidden");

let onLoginModal = false;
let onSignupModal = false;
let modalCheck = false;
let onLocationDiv = false;

function onHeaderArrowClick(event) {
    headerArrow.classList.toggle("arrowRotate0");
    headerArrow.classList.toggle("arrowRotate180");
}

function onLoginClick(event) {
    if (!onLoginModal) {
        loginHidden.style.display = "block";
        onLoginModal = true;
    }
}

function onLoginModalClose(event) {
    if (onLoginModal) {
        loginHidden.style.display = "none";
        onLoginModal = false;
    }
}

function onSignupClick(event) {
    if (!onSingupModal) {
        signupHidden.style.display = "block";
        onSingupModal = true;
    }
}

function onSignupModalClose(event) {
    if (onSingupModal) {
        signupHidden.style.display = "none";
        onSingupModal = false;
    }
}

function onLocationClick(event) {
    if (!onLocationDiv) {
        locationDiv.style.display = "block";
        onLocationDiv = true;
    }
    else {
        locationDiv.style.display = "none";
        onLocationDiv = false;
    }
}

headerArrow.addEventListener("click", onHeaderArrowClick);
login.addEventListener("click", onLoginClick);
loginCloseBtn.addEventListener("click", onLoginModalClose);
// signup.addEventListener("click", onSignupClick);
// signupCloseBtn.addEventListener("click", onSignupModalClose);
locationBtn.addEventListener("click", onLocationClick);