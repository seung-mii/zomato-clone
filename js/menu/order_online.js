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
const cuisines = document.querySelector(".filter_type .cuisines_option");
const cuisinesListItems = document.querySelectorAll(".filter_type .cuisines_option ul li");
const cuisinesListCheckboxes = document.querySelectorAll('.filter_type .cuisines_option input[type="checkbox"]');
const clearAllBtn = document.querySelector(".filter_type .cuisines_option .clearAllBtn");
const applyBtn = document.querySelector(".filter_type .cuisines_option .applyBtn");
const exploreSeeMore = document.querySelectorAll("main .explore_options .explore h3");
const exploreHidden1 = document.querySelectorAll("main .explore_options ul.cuisines>li");
const exploreHidden2 = document.querySelectorAll("main .explore_options ul.restaurant>li");
const exploreHidden3 = document.querySelectorAll("main .explore_options .explore_cities ul>li");
const pageUpBtn = document.getElementById("page_up");

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

function initializeSwipers(event) {
  const inspirationSwiper = new Swiper('.insp_background .swiper-container', {
    loop: true,
    slidesPerView: 6,
    slidesPerGroup: 1,
    navigation: {
      prevEl: '.insp_background .swiper-prev',
      nextEl: '.insp_background .swiper-next'
    }
  });

  const brandsSwiper = new Swiper('.brands_background .swiper-container', {
    loop: true,
    slidesPerView: 6,
    slidesPerGroup: 1,
    navigation: {
      prevEl: '.brands_background .swiper-prev',
      nextEl: '.brands_background .swiper-next'
    }
  });
}

function onCuisinesBtn(event) {
  cuisines.style.display = cuisines.style.display === 'none' ? 'block' : 'none';
}

function onCuisinesMouseUp(event) {
  event.stopPropagation();
}

function onCuisinesMouseDown(event) {
  if (!cuisines.contains(event.target)) cuisines.style.display = 'none';
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

function onPageUpScroll() {
  if (window.scrollY > 100) {
    pageUpBtn.classList.add('show');
  } else {
    pageUpBtn.classList.remove('show');
  }
}

function onPageUpClick() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}

function onCuisinesInitialize() {
  let scrollTop = 0;
  
  function onListItemClick(event) {
    const li = event.currentTarget;
    const checkbox = li.querySelector('input[type="checkbox"]');
    if (checkbox) checkbox.checked = !checkbox.checked;
    scrollTop = window.scrollY;

    window.scrollTo({
      top: scrollTop,
      behavior: 'auto'  
    });
  }
  
  cuisinesListItems.forEach(li => {
    li.addEventListener('click', onListItemClick);
  });
}

function onClearAllBtnClick() {
  cuisinesListCheckboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
}

filterBtn.addEventListener("click", onFilterBtn);
filterModalClearBtn.addEventListener("click", onFilterBtn);
filterIcon.addEventListener("click", onFilterIcon);
sortByLi.addEventListener("click", onFilterSortBy);
cuisinesLi.addEventListener("click", onFilterCuisines);
ratingLi.addEventListener("click", onFilterRating);
costPerPersonLi.addEventListener("click", onFilterCostPerPerson);
moreFilterLi.addEventListener("click", onFilterMoreFilter);
cuisines.addEventListener("mouseup", onCuisinesMouseUp);
cuisinesBtn.addEventListener("click", onCuisinesBtn);
clearAllBtn.addEventListener("click", onClearAllBtnClick);
applyBtn.addEventListener("click", onCuisinesBtn);
exploreSeeMore[0].addEventListener("click", onExploreSeeMoreClickOne);
exploreSeeMore[1].addEventListener("click", onExploreSeeMoreClickTwo);
exploreSeeMore[2].addEventListener("click", onExploreSeeMoreClickThr);
window.addEventListener('scroll', onPageUpScroll);
pageUpBtn.addEventListener('click', onPageUpClick);
document.addEventListener('DOMContentLoaded', initializeSwipers);
document.addEventListener("mousedown", onCuisinesMouseDown);
document.addEventListener("DOMContentLoaded", onCuisinesInitialize);