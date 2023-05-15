const headerInput = document.getElementsByClassName("header_input");
const headerArrow = document.getElementById("arrow_icon");
const login = document.querySelector("header button.login");
const loginHidden = document.querySelector(".header_menu_list .modal .login");
const loginCloseBtn = document.querySelector(".header_menu_list .modal .login span#close");
const signup = document.querySelector("header button.signup");
const signupHidden = document.querySelector(".header_menu_list .modal .signup");
const signupCloseBtn = document.querySelector(".header_menu_list .modal .signup span#close");
const locationBtn = document.querySelector("header .header_container form #arrow_icon");
const locationDiv = document.querySelector("header .header_container .location_hidden");

let onLoginModal = false;
let onSignupModal = false;
let onLocationDiv = false;

function onHeaderArrowClick(event) {
    headerArrow.classList.toggle("arrowRotate0");
    headerArrow.classList.toggle("arrowRotate180");
}

function onLoginClick(event) {
    if (onSignupModal) {
        signupHidden.style.display = "none";
        onSignupModal = false;
    }

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
    if (onLoginModal) {
        loginHidden.style.display = "none";
        onLoginModal = false;
    }

    if (!onSignupModal) {
        signupHidden.style.display = "block";
        onSignupModal = true;
    }
}

function onSignupModalClose(event) {
    if (onSignupModal) {
        signupHidden.style.display = "none";
        onSignupModal = false;
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
signup.addEventListener("click", onSignupClick);
signupCloseBtn.addEventListener("click", onSignupModalClose);
locationBtn.addEventListener("click", onLocationClick);