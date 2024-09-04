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
const fullnameInput = document.querySelector('header .header_list .header_menu_list #fullname');
const fullnameLabel = document.querySelector('header .header_list .header_menu_list .fullname-label');
const fullnameErrorMessage = document.querySelector('header .header_list .header_menu_list .fullname_error_message');
const emailInput = document.querySelector('header .header_list .header_menu_list #email');
const emailLabel = document.querySelector('header .header_list .header_menu_list .email-label');
const emailErrorMessage = document.querySelector('header .header_list .header_menu_list .email_error_message');
const agreeCheckbox = document.getElementById('agree');
const accountBtn = document.querySelector('header .header_list .header_menu_list .account_btn');
const locationInput = document.querySelector("header .header_container input.location"); 
const locationBtn = document.querySelector("header .header_container form #arrow_icon");
const locationDiv = document.querySelector("header .header_container .location_hidden");

let phoneDropdownOpen = false;
let onLocationDiv = false;

updateAccountBtnState();

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

function onFullNameInputFocus(event) {
    if (fullnameInput.value.trim() === '' && fullnameErrorMessage.style.display === 'block') {
        fullnameLabel.style.color = 'red';
        fullnameInput.style.borderColor = 'red';
    } else {
        fullnameErrorMessage.style.display = 'none';
        fullnameLabel.style.color = 'green';
        fullnameInput.style.borderColor = 'green';
    }
    fullnameLabel.style.transform = 'translateY(-40%)';
    fullnameLabel.style.fontSize = '10px';
}

function onFullNameInputBlur(event) {
    if (fullnameInput.value.trim() === '') {
        fullnameErrorMessage.style.display = 'block';
        fullnameLabel.style.color = 'rgb(148, 148, 148)';
        fullnameInput.style.borderColor = 'red';
        fullnameLabel.style.transform = 'translateY(-50%)';
        fullnameLabel.style.fontSize = '16px';
    } else {
        fullnameErrorMessage.style.display = 'none';
        fullnameLabel.style.color = 'green';
        fullnameInput.style.borderColor = '#ddd';
        fullnameLabel.style.transform = 'translateY(-40%)';
        fullnameLabel.style.fontSize = '10px';
    }
}

function onFullNameInput(event) {
    if (fullnameInput.value.trim() === '') {
        fullnameErrorMessage.style.display = 'block';
        fullnameLabel.style.color = 'red';
        fullnameInput.style.borderColor = 'red';
    } else {
        fullnameErrorMessage.style.display = 'none';
        fullnameLabel.style.color = 'green';
        fullnameInput.style.borderColor = 'green';
    }
    fullnameLabel.style.transform = 'translateY(-40%)';
    fullnameLabel.style.fontSize = '10px';
}

function isValidEmail(email) {
    return email.includes('@') && email.endsWith('.com');
}

function onEmailInputFocus(event) {
    if (emailInput.value.trim() === '' && emailErrorMessage.style.display === 'block') {
        emailLabel.style.color = 'red';
        emailInput.style.borderColor = 'red';
    } else {
        emailErrorMessage.style.display = 'none';
        emailLabel.style.color = 'green';
        emailInput.style.borderColor = 'green';
    }
    emailLabel.style.transform = 'translateY(-40%)';
    emailLabel.style.fontSize = '10px';
}

function onEmailInputBlur(event) {
    const emailValue = emailInput.value.trim();

    if (emailValue === '') {
        emailErrorMessage.style.display = 'block';
        emailLabel.style.color = 'rgb(148, 148, 148)';
        emailInput.style.borderColor = 'red';
        emailLabel.style.transform = 'translateY(-50%)';
        emailLabel.style.fontSize = '16px';
    } else if (!isValidEmail(emailValue)) {
        emailErrorMessage.style.display = 'block';
        emailLabel.style.color = 'red';
        emailInput.style.borderColor = 'red';
        emailLabel.style.transform = 'translateY(-50%)';
    } else {
        emailErrorMessage.style.display = 'none';
        emailLabel.style.color = 'green';
        emailInput.style.borderColor = '#ddd';
        emailLabel.style.transform = 'translateY(-50%)';
        emailLabel.style.fontSize = '10px';
    }
}

function onEmailInput(event) {
    const emailValue = emailInput.value.trim();

    if (emailValue === '' || !isValidEmail(emailValue)) {
        emailErrorMessage.style.display = 'block';
        emailLabel.style.color = 'red';
        emailInput.style.borderColor = 'red';
    } else {
        emailErrorMessage.style.display = 'none';
        emailLabel.style.color = 'green';
        emailInput.style.borderColor = 'green';
    }

    emailLabel.style.transform = 'translateY(-50%)';
    emailLabel.style.fontSize = '10px';
}

function updateAccountBtnState() {
    const emailEmpty = emailInput.value.trim() === '';
    const fullnameEmpty = fullnameInput.value.trim() === '';
    const isCheckboxChecked = agreeCheckbox ? agreeCheckbox.checked : false;

    accountBtn.disabled = emailEmpty || fullnameEmpty || !isValidEmail(emailInput.value.trim()) || !isCheckboxChecked;
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
fullnameInput.addEventListener("focus", onFullNameInputFocus);
fullnameInput.addEventListener("blur", onFullNameInputBlur);
fullnameInput.addEventListener("input", onFullNameInput);
fullnameInput.addEventListener('input', updateAccountBtnState);
emailInput.addEventListener("focus", onEmailInputFocus);
emailInput.addEventListener("blur", onEmailInputBlur);
emailInput.addEventListener("input", onEmailInput);
emailInput.addEventListener('input', updateAccountBtnState);
if (agreeCheckbox) agreeCheckbox.addEventListener('change', updateAccountBtnState);
locationBtn.addEventListener("click", onLocationClick);
locationInput.addEventListener("click", onLocationClick); 
locationInput.addEventListener("focus", onLocationInputFocus); 
locationInput.addEventListener("blur", onLocationInputBlur); 