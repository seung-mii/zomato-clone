const headerInput = document.getElementsByClassName("header_input");
const headerArrow = document.getElementById("arrow_icon");
const modalOverlay = document.querySelector(".header_menu_list .modal_overlay");
const login = document.querySelector("header button.login");
const loginModal = document.querySelector(".header_menu_list .modal .login");
const loginCloseBtn = document.querySelector(".header_menu_list .modal .login span#close");
const signup = document.querySelector("header button.signup");
const signupModal = document.querySelector(".header_menu_list .modal .signup");
const signupCloseBtn = document.querySelector(".header_menu_list .modal .signup span#close");
const phonePre = document.querySelector('.header_menu_list .modal .header_phone_pre');
const phoneDropdown = document.querySelector('.header_menu_list .modal .header_phone_select ul');
const phoneInput = document.querySelector('.header_menu_list .modal #header_phone');
const locationInput = document.querySelector("header .header_container input.location"); 
const locationBtn = document.querySelector("header .header_container form #arrow_icon");
const locationDiv = document.querySelector("header .header_container .location_hidden");

let phoneDropdownOpen = false;
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
        locationDiv.style.display = "flex";
        onLocationDiv = true;
    }
    else {
        locationDiv.style.display = "none";
        onLocationDiv = false;
    }
}

function onPhonePreClick(event) {
    phoneDropdownOpen = !phoneDropdownOpen;
    phonePre.classList.toggle('spin', phoneDropdownOpen);
    phoneDropdown.style.display = phoneDropdownOpen ? 'block' : 'none';
    phoneInput.style.borderColor = phoneDropdownOpen ? 'green' : '#d5d5d5';
    phoneInput.style.borderWidth = phoneDropdownOpen ? '2px' : '1px';
}

function onPhoneDropdownClick(event) {
    if (event.target.tagName === 'LI') {
        phonePre.querySelector('.header_phone_btn').textContent = event.target.textContent;
        phoneDropdown.style.display = 'none';
        phonePre.classList.remove('spin');
        phoneInput.style.borderColor = '#d5d5d5';
        phoneDropdownOpen = false;
    }
}

function onPhoneInputFocus(event) {
    if (phoneDropdownOpen) {
        phoneDropdown.style.display = 'none';
        phonePre.classList.remove('spin');
        phoneDropdownOpen = false;
    }
    phoneInput.style.borderColor = 'green';
}

function onLocationClick(event) {
    onLocationDiv = !onLocationDiv;
    locationBtn.classList.toggle('spin', onLocationDiv);
    locationDiv.style.display = onLocationDiv ? 'block' : 'none';
}

function onLocationInputFocus(event) {
    locationBtn.classList.add('spin');
    locationDiv.style.display = "block";
}

function onLocationInputBlur(event) {
    locationBtn.classList.remove("spin");
    locationDiv.style.display = "none";
}

headerArrow.addEventListener("click", onHeaderArrowClick);
modalOverlay.addEventListener("click", onModalOverlay);
login.addEventListener("click", onLoginModalClick);
loginCloseBtn.addEventListener("click", onLoginModalClose);
signup.addEventListener("click", onSignupModalClick);
signupCloseBtn.addEventListener("click", onSignupModalClose);
phonePre.addEventListener('click', onPhonePreClick);
phoneDropdown.addEventListener('click', onPhoneDropdownClick);
phoneInput.addEventListener('focus', onPhoneInputFocus);
locationBtn.addEventListener("click", onLocationClick);
locationInput.addEventListener("click", onLocationClick); 
locationInput.addEventListener("focus", onLocationInputFocus); 
locationInput.addEventListener("blur", onLocationInputBlur); 