const headerInput = document.getElementsByClassName("header_input");
const headerArrow = document.getElementById("arrow_icon");
const modalOverlay = document.querySelector(".header_menu_list .modal_overlay");
const login = document.querySelector("header button.login");
const loginModal = document.querySelector(".header_menu_list .modal .login");
const loginCloseBtn = document.querySelector(".header_menu_list .modal .login span#close");
const signup = document.querySelector("header button.signup");
const signupModal = document.querySelector(".header_menu_list .modal .signup");
const signupCloseBtn = document.querySelector(".header_menu_list .modal .signup span#close");
const locationBtn = document.querySelector("header .header_container form #arrow_icon");
const locationDiv = document.querySelector("header .header_container .location_hidden");

let onLocationDiv = false;

function onHeaderArrowClick(event) {
    headerArrow.classList.toggle("arrowRotate0");
    headerArrow.classList.toggle("arrowRotate180");
}

function onModalOverlay(event) {
    if (loginModal.style.display === 'block') {
        onLoginModalClose();
    }
    if (signupModal.style.display === 'block') {
        onSignupModalClose();
    }
}

function onLoginModalClick(event) {
    loginModal.style.display = "block";
    modalOverlay.style.display = "block";
}

function onLoginModalClose(event) {
    loginModal.style.display = "none";
    modalOverlay.style.display = "none";
}

function onSignupModalClick(event) {
    signupModal.style.display = "block";
    modalOverlay.style.display = "block";
}

function onSignupModalClose(event) {
    signupModal.style.display = "none";
    modalOverlay.style.display = "none";
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
modalOverlay.addEventListener("click", onModalOverlay);
login.addEventListener("click", onLoginModalClick);
loginCloseBtn.addEventListener("click", onLoginModalClose);
signup.addEventListener("click", onSignupModalClick);
signupCloseBtn.addEventListener("click", onSignupModalClose);
locationBtn.addEventListener("click", onLocationClick);