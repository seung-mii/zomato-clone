const popularSeeMore = document.querySelector("main ul.popular_menu>li.more");
const popularHidden = document.querySelectorAll("main ul.popular_menu>li#hidden_popular");
const type = document.getElementsByName("type_choose");
const appEmail = document.querySelector("main .app_menu form.app_input .app_email");
const appPhone = document.querySelector("main .app_menu form.app_input .app_phone");
const phonePreBtn = document.querySelector("main .app_menu form.app_input .phone_btn");
const phonePreList = document.querySelector("main .app_menu form.app_input ul");
const phonePreSpan = document.querySelector("main .app_menu form.app_input .phone_pre span"); 
const appEmailInput = document.querySelector('main .app_menu form.app_input #email');
const appEmailLabel = document.querySelector('main .app_menu form.app_input .email-label');
const appEmailErrorMessage = document.querySelector('main .app_menu form.app_input .email_error_message');
const appPhoneInput = document.querySelector('main .app_menu form.app_input #phone');
const appPhoneErrorMessage = document.querySelector('main .app_menu form.app_input .phone_error_message');
const appLineBtn = document.querySelector('main .app_menu form.app_input .link_btn');
const exploreSeeMore = document.querySelectorAll("main .explore_options .explore h3");
const exploreHidden1 = document.querySelectorAll("main .explore_options ul.cuisines>li");
const exploreHidden2 = document.querySelectorAll("main .explore_options ul.restaurant>li");
const exploreHidden3 = document.querySelectorAll("main .explore_options .explore_cities ul>li");

let onPhoneList = false;

onEmailClick();

function onPopularSeeMoreClick(event) {
    popularSeeMore.style.display = "none";
    popularHidden.forEach((item) => {
        item.style.display = "inline-block";
    })
}

function onResetInput(event) {
    appEmailErrorMessage.style.display = 'none';
    appEmailLabel.style.fontSize = '16px';
    appEmailLabel.style.color = 'rgb(148, 148, 148)';
    appEmailInput.style.borderColor = '#ddd';
    appEmailLabel.style.transform = 'translateY(-50%)';

    onPhoneList = false; 
    appPhoneInput.value = ''; 
    appPhoneErrorMessage.style.display = 'none'; 
    appPhoneInput.style.borderColor = '#ddd'; 
    phonePreList.style.display = 'none';
    phonePreSpan.style.transform = 'rotate(0deg)';
    
    appLineBtn.disabled = false;
}

function onEmailClick(event) {
    appEmail.style.display = "inline";
    appPhone.style.display = "none"; 

    onResetInput();
}

function onPhoneClick(event) {
    appEmail.style.display = "none";
    appPhone.style.display = "inline"; 
    
    onResetInput();
}

function onPhonePreClick(event) {
    onPhoneList = !onPhoneList; 
    phonePreList.style.display = onPhoneList ? "block" : "none"; 
    phonePreSpan.style.transform = onPhoneList ? "rotate(180deg)" : "rotate(0deg)"; 
}

function onPhoneDropdownClick(event) {
    if (event.target.tagName === 'LI') {
        phonePreBtn.textContent = event.target.textContent;
        phonePreList.style.display = 'none';
        phonePreSpan.style.transform = "rotate(0deg)";
        onPhoneList = false;
    }
}

function onExploreSeeMoreClickOne(event) {
    // window.getComputedStyle() : 요소의 스타일이 인라인이 아닐 때 사용
    if (window.getComputedStyle(exploreHidden1[0]).display == "none") {
        exploreHidden1.forEach((item) => {
            item.style.display = "inline";
        })
    } else {
        exploreHidden1.forEach((item) => {
            item.style.display = "none";
        })
    }
}

function onExploreSeeMoreClickTwo(event) {
    if (window.getComputedStyle(exploreHidden2[0]).display == "none") {
        exploreHidden2.forEach((item) => {
            item.style.display = "inline";
        })
    } else {
        exploreHidden2.forEach((item) => {
            item.style.display = "none";
        })
    }
}

function onExploreSeeMoreClickThr(event) {
    if (window.getComputedStyle(exploreHidden3[0]).display == "none") {
        exploreHidden3.forEach((item) => {
            item.style.display = "inline-block";
        })
    } else {
        exploreHidden3.forEach((item) => {
            item.style.display = "none";
        });
    }
}
 
function isValidEmail(email) {
    return email.includes('@') && email.endsWith('.com');
}

function onEmailInputFocus(event) {
    const emailValue = appEmailInput.value.trim();

    if (emailValue === '' && appEmailErrorMessage.style.display === 'block') {
        appEmailLabel.style.color = 'red';
        appEmailInput.style.borderColor = 'red';
        appLineBtn.disabled = true;
    } else {
        appEmailErrorMessage.style.display = 'none';
        appEmailLabel.style.color = 'green';
        appEmailInput.style.borderColor = 'green';
        appLineBtn.disabled = !isValidEmail(emailValue);
    }
    appEmailLabel.style.transform = 'translateY(-50%)';
    appEmailLabel.style.fontSize = '10px';
};

function onEmailInputBlur(event) {
    const emailValue = appEmailInput.value.trim();

    if (emailValue === '') {
        appEmailErrorMessage.style.display = 'block';
        appEmailLabel.style.color = 'rgb(148, 148, 148)';
        appEmailInput.style.borderColor = 'red';
        appEmailLabel.style.transform = 'translateY(-50%)';
        appEmailLabel.style.fontSize = '16px';
        appLineBtn.disabled = true;
    } else if (!isValidEmail(emailValue)) {
        appEmailErrorMessage.style.display = 'block';
        appEmailLabel.style.color = 'red';
        appEmailInput.style.borderColor = 'red';
        appEmailLabel.style.transform = 'translateY(-50%)';
        appLineBtn.disabled = true;
    } else {
        appEmailErrorMessage.style.display = 'none';
        appEmailLabel.style.color = 'green';
        appEmailInput.style.borderColor = '#ddd';
        appEmailLabel.style.transform = 'translateY(-50%)';
        appEmailLabel.style.fontSize = '10px';
        appLineBtn.disabled = false;
    }
};

function onEmailInput(event) {
    const emailValue = appEmailInput.value.trim();

    if (emailValue === '' || !isValidEmail(emailValue)) {
        appEmailErrorMessage.style.display = 'block';
        appEmailLabel.style.color = 'red';
        appEmailInput.style.borderColor = 'red';
        appLineBtn.disabled = true;
    } else {
        appEmailErrorMessage.style.display = 'none';
        appEmailLabel.style.color = 'green';
        appEmailInput.style.borderColor = 'green';
        appLineBtn.disabled = false;
    }
    appEmailLabel.style.transform = 'translateY(-50%)';
    appEmailLabel.style.fontSize = '10px';
};

function onPhoneInputFocus(event) {
    if (appPhoneInput.value.trim().length < 10 && appPhoneErrorMessage.style.display === 'block') {
        appPhoneInput.style.borderColor = 'red';
        appLineBtn.disabled = true;
    } else {
        appPhoneErrorMessage.style.display = 'none';
        appPhoneInput.style.borderColor = 'green';
        appLineBtn.disabled = false;
    }
};

function onPhoneInputBlur(event) {
    if (appPhoneInput.value.trim().length < 10) {
        appPhoneErrorMessage.style.display = 'block';
        appPhoneInput.style.borderColor = 'red';
        appLineBtn.disabled = true;
    } else {
        appPhoneErrorMessage.style.display = 'none';
        appPhoneInput.style.borderColor = '#ddd';
        appLineBtn.disabled = false;
    }
};

function onPhoneInput(event) {
    if (appPhoneInput.value.trim().length < 10) {
        appPhoneErrorMessage.style.display = 'block';
        appPhoneInput.style.borderColor = 'red';
        appLineBtn.disabled = true;
    } else {
        appPhoneErrorMessage.style.display = 'none';
        appPhoneInput.style.borderColor = 'green';
        appLineBtn.disabled = false;
    }
};

popularSeeMore.addEventListener("click", onPopularSeeMoreClick);
type[0].addEventListener("click", onEmailClick);
type[1].addEventListener("click", onPhoneClick);
phonePreBtn.addEventListener("click", onPhonePreClick); 
phonePreList.addEventListener("click", onPhoneDropdownClick);
appEmailInput.addEventListener("focus", onEmailInputFocus);
appEmailInput.addEventListener("blur", onEmailInputBlur);
appEmailInput.addEventListener("input", onEmailInput);
appPhoneInput.addEventListener("focus", onPhoneInputFocus);
appPhoneInput.addEventListener("blur", onPhoneInputBlur);
appPhoneInput.addEventListener("input", onPhoneInput);
exploreSeeMore[0].addEventListener("click", onExploreSeeMoreClickOne);
exploreSeeMore[1].addEventListener("click", onExploreSeeMoreClickTwo);
exploreSeeMore[2].addEventListener("click", onExploreSeeMoreClickThr);