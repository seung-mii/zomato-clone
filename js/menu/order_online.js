const filterBtn = document.querySelector("main .filter_btn");
const filterModalBackground = document.querySelector("main .filter_modal_on");
const filterModal = document.querySelector("main .filter");
const filterModalClearBtn = document.querySelector("main .filter .modal_footer button:first-child");
const sortByLi = document.querySelector("main .filter .filters_type .filters_subtype li:first-child");
const cuisinesLi = document.querySelector("main .filter .filters_type .filters_subtype li:nth-child(2)");
const ratingLi = document.querySelector("main .filter .filters_type .filters_subtype li:nth-child(3)");
const costPerPersonLi = document.querySelector("main .filter .filters_type .filters_subtype li:nth-child(4)");
const moreFilterLi = document.querySelector("main .filter .filters_type .filters_subtype li:last-child");
const filterSortBy = document.querySelector("main .filter .filters_type .sort_by");
const filterCuisines = document.querySelector("main .filter .filters_type .cuisines");
const filterRating = document.querySelector("main .filter .filters_type .rating");
const filterCostPerPerson = document.querySelector("main .filter .filters_type .cost");
const filterMoreFilter = document.querySelector("main .filter .filters_type .more_filters");
const filterIcon = document.querySelector("main .filter .modal_header span");
const cuisinesBtn = document.querySelector(".filter_type button:nth-child(4)");
const moreFiltersBtn = document.querySelector(".filter_type button:nth-child(5)");
const cuisines = document.querySelector(".filter_type .cuisines_option");
const moreFilters = document.querySelector(".filter_type .more_filters_option");
const exploreSeeMore = document.querySelectorAll("main .explore_options .explore h3");
const exploreHidden1 = document.querySelectorAll("main .explore_options ul.cuisines>li");
const exploreHidden2 = document.querySelectorAll("main .explore_options ul.restaurant>li");
const exploreHidden3 = document.querySelectorAll("main .explore_options .explore_cities ul>li");

const swiper = new Swiper('.swiper-container', {
  loop: true,       
  spaceBetween: 20, 
  slidesPerView: 6, 
  slidesPerGroup: 1, 
  navigation: { 
    prevEl: '.swiper-prev', 
    nextEl: '.swiper-next' 
  }
})

$('.swiper-container').hover(
  function () {
  swiper.autoplay.stop();
}, function(){
  swiper.autoplay.start();
});

function onFilterBtn(event) {
  if (window.getComputedStyle(filterModal).display == "none") {
    filterModal.style.display = "block";
    filterModalBackground.style.width = "100vw";
    filterModalBackground.style.height = "100vh";
  } else {
    filterModal.style.display = "none";
    filterModalBackground.style.width = "0vw";
    filterModalBackground.style.height = "0vh";
  }
}

function onFilterIcon(event) {
  filterModal.style.display = "none";
  filterModalBackground.style.width = "0vw";
  filterModalBackground.style.height = "0vh";
}

function onFilterSortBy(event) {
  if (window.getComputedStyle(filterSortBy).display == "none") {
    filterSortBy.style.display = "block";
    sortByLi.style.borderLeft = "5px solid #FF7171";
    sortByLi.style.backgroundColor = "#fff";
    // sortByLi.style.transition = "border-left 1s";

    cuisinesLi.style.borderLeft = "5px solid transparent";
    ratingLi.style.borderLeft = "5px solid transparent";
    costPerPersonLi.style.borderLeft = "5px solid transparent";
    moreFilterLi.style.borderLeft = "5px solid transparent";

    cuisinesLi.style.backgroundColor = "#f9f9f9";
    ratingLi.style.backgroundColor = "#f9f9f9";
    costPerPersonLi.style.backgroundColor = "#f9f9f9";
    moreFilterLi.style.backgroundColor = "#f9f9f9";

    filterCuisines.style.display = "none";
    filterRating.style.display = "none";
    filterCostPerPerson.style.display = "none";
    filterMoreFilter.style.display = "none";
  }
}

function onFilterCuisines(event) {
  if (window.getComputedStyle(filterCuisines).display == "none") {
    filterCuisines.style.display = "block";
    cuisinesLi.style.borderLeft = "5px solid #FF7171";
    cuisinesLi.style.backgroundColor = "#fff";
    // cuisinesLi.style.transition = "border-left 1s";
    
    sortByLi.style.borderLeft = "5px solid transparent";
    ratingLi.style.borderLeft = "5px solid transparent";
    costPerPersonLi.style.borderLeft = "5px solid transparent";
    moreFilterLi.style.borderLeft = "5px solid transparent";

    sortByLi.style.backgroundColor = "#f9f9f9";
    ratingLi.style.backgroundColor = "#f9f9f9";
    costPerPersonLi.style.backgroundColor = "#f9f9f9";
    moreFilterLi.style.backgroundColor = "#f9f9f9";

    filterSortBy.style.display = "none";
    filterRating.style.display = "none";
    filterCostPerPerson.style.display = "none";
    filterMoreFilter.style.display = "none";
  }
}

function onFilterRating(event) {
  if (window.getComputedStyle(filterRating).display == "none") {
    filterRating.style.display = "block";
    ratingLi.style.borderLeft = "5px solid #FF7171";
    ratingLi.style.backgroundColor = "#fff";
    
    sortByLi.style.borderLeft = "5px solid transparent";
    cuisinesLi.style.borderLeft = "5px solid transparent";
    costPerPersonLi.style.borderLeft = "5px solid transparent";
    moreFilterLi.style.borderLeft = "5px solid transparent";

    sortByLi.style.backgroundColor = "#f9f9f9";
    cuisinesLi.style.backgroundColor = "#f9f9f9";
    costPerPersonLi.style.backgroundColor = "#f9f9f9";
    moreFilterLi.style.backgroundColor = "#f9f9f9";

    filterSortBy.style.display = "none";
    filterCuisines.style.display = "none";
    filterCostPerPerson.style.display = "none";
    filterMoreFilter.style.display = "none";
  }
}

function onFilterCostPerPerson(event) {
  if (window.getComputedStyle(filterCostPerPerson).display == "none") {
    filterCostPerPerson.style.display = "block";
    costPerPersonLi.style.borderLeft = "5px solid #FF7171";
    costPerPersonLi.style.backgroundColor = "#fff";
    
    sortByLi.style.borderLeft = "5px solid transparent";
    cuisinesLi.style.borderLeft = "5px solid transparent";
    ratingLi.style.borderLeft = "5px solid transparent";
    moreFilterLi.style.borderLeft = "5px solid transparent";

    sortByLi.style.backgroundColor = "#f9f9f9";
    cuisinesLi.style.backgroundColor = "#f9f9f9";
    ratingLi.style.backgroundColor = "#f9f9f9";
    moreFilterLi.style.backgroundColor = "#f9f9f9";

    filterSortBy.style.display = "none";
    filterCuisines.style.display = "none";
    filterRating.style.display = "none";
    filterMoreFilter.style.display = "none";
  }
}

function onFilterMoreFilter(event) {
  if (window.getComputedStyle(filterMoreFilter).display == "none") {
    filterMoreFilter.style.display = "block";
    moreFilterLi.style.borderLeft = "5px solid #FF7171";
    moreFilterLi.style.backgroundColor = "#fff";
    
    sortByLi.style.borderLeft = "5px solid transparent";
    cuisinesLi.style.borderLeft = "5px solid transparent";
    ratingLi.style.borderLeft = "5px solid transparent";
    costPerPersonLi.style.borderLeft = "5px solid transparent";

    sortByLi.style.backgroundColor = "#f9f9f9";
    cuisinesLi.style.backgroundColor = "#f9f9f9";
    ratingLi.style.backgroundColor = "#f9f9f9";
    costPerPersonLi.style.backgroundColor = "#f9f9f9";

    filterSortBy.style.display = "none";
    filterCuisines.style.display = "none";
    filterRating.style.display = "none";
    filterCostPerPerson.style.display = "none";
  }
}

function onCuisinesBtn(event) {
  if (window.getComputedStyle(cuisines).display == "none") {
    cuisines.style.display = "block";
    // cuisines.classList.toggle('.show');
  } else {
    cuisines.style.display = "none";
    onCuisinesModal = false;
  }
}

function onMoreFiltersBtn(event) {
  if (window.getComputedStyle(moreFilters).display == "none") {
    moreFilters.style.display = "block";
  } else {
    moreFilters.style.display = "none";
  }
}

function onExploreSeeMoreClickOne(event) {
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

filterBtn.addEventListener("click", onFilterBtn);
filterModalClearBtn.addEventListener("click", onFilterBtn);
filterIcon.addEventListener("click", onFilterIcon);
sortByLi.addEventListener("click", onFilterSortBy);
cuisinesLi.addEventListener("click", onFilterCuisines);
ratingLi.addEventListener("click", onFilterRating);
costPerPersonLi.addEventListener("click", onFilterCostPerPerson);
moreFilterLi.addEventListener("click", onFilterMoreFilter);
cuisinesBtn.addEventListener("click", onCuisinesBtn);
moreFiltersBtn.addEventListener("click", onMoreFiltersBtn);
exploreSeeMore[0].addEventListener("click", onExploreSeeMoreClickOne);
exploreSeeMore[1].addEventListener("click", onExploreSeeMoreClickTwo);
exploreSeeMore[2].addEventListener("click", onExploreSeeMoreClickThr);