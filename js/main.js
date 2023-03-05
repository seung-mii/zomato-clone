const popularSeeMore = document.querySelector("main ul.popular_menu>li.more");
const popularHidden = document.querySelectorAll("main ul.popular_menu>li#hidden_popular");
const type = document.getElementsByName("type_choose");
const email = document.querySelector("main .app_menu form.app_input #email");
const phone = document.querySelector("main .app_menu form.app_input .app_phone");
const phonePreBtn = document.querySelector("main .app_menu form.app_input .phone_btn");
const phonePreList = document.querySelectorAll("main .app_menu form.app_input ul");
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

function onEmailClick(event) {
    phone.style.display = "none";
    email.style.display = "inline";
}

function onPhoneClick(event) {
    email.style.display = "none";
    phone.style.display = "inline";
}

function onPhonePreClick(event) {
    if (!onPhoneList) {
        phonePreList.forEach((item) => { // ui
            item.style.display = "inline";
            console.log(item);
            // item.forEach((i) => { // li
                // item.click = function () {
                //     phonePreBtn.innerText = item.innerText;
                // }
            // })
        })
        onPhoneList = true;
    }
    else {
        phonePreList.forEach((item) => {
            item.style.display = "none";
        })
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
        })
    }
}

popularSeeMore.addEventListener("click", onPopularSeeMoreClick);
type[0].addEventListener("click", onEmailClick);
type[1].addEventListener("click", onPhoneClick);
phonePreBtn.addEventListener("click", onPhonePreClick);
exploreSeeMore[0].addEventListener("click", onExploreSeeMoreClickOne);
exploreSeeMore[1].addEventListener("click", onExploreSeeMoreClickTwo);
exploreSeeMore[2].addEventListener("click", onExploreSeeMoreClickThr);