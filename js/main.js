
//   Navigation Active class ===================================================
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        console.log(`Current Path: ${currentPath}, Link: ${link.getAttribute('href')}`);
        if (currentPath.endsWith(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});





// Import-Components============================================================

$(document).ready(function () {
    $('#navbar').load('navbar.html');
    $('#nav-bar-2').load('navbar.html');
    $('#footer').load('footer.html');
    $('#customer').load('our-coustomer.html')
});


// Slider Sectio Javascript ===================================================


// Initialize Swiper
// Initialize Swiper
var swiper = new Swiper(".mySlider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    // autoplay: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        1200: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
});

// Function to update the background and dynamic text content
function updateSlideInfo() {
    const activeSlide = document.querySelector('.swiper-slide-active');
    const imgTag = activeSlide.querySelector('img');
    const imgSrc = imgTag ? imgTag.getAttribute('src') : '';
    const newText = activeSlide.getAttribute('data-text') || 'Hello';
    const newDescription = activeSlide.getAttribute('data-description') || 'No description available';

    // Update background image
    const backgroundSection = document.querySelector('.tsetimonial-section-bg');
    if (backgroundSection) {
        backgroundSection.style.backgroundImage = `url(${imgSrc})`;
    }

    // Update "hello" text with slide data-text (title)
    const dynamicText = document.getElementById('dynamicText');
    if (dynamicText) {
        dynamicText.textContent = `${newText} - ${newDescription}`;
    }

    // Update content in #hello-section
    const helloSection = document.getElementById('hello-section');
    if (helloSection) {
        helloSection.innerHTML = `
        <div class="dynamic-text-sec mb-lg-0 mb-md-3 mb-3">
        <h3 class="dynamic-text">${newText}</h3>
            <p class="text-black">${newDescription}</p>
            <div class="text-center">
                <img src="${imgSrc}" alt="${newText}" class="img-fluid rounded-2">
            </div>
        </div>
        `;
    }
}

// Trigger updates on slide change
swiper.on('slideChangeTransitionEnd', updateSlideInfo);

// Manually trigger updates on load
updateSlideInfo();




function showPlanDetail(planName) {
    // Get both sections
    const pricePlanSection = document.getElementById('price-plan-section');
    const planDetailSection = document.getElementById('plan-detail-section');
    const planDetailTitle = document.getElementById('plan-detail-title');

    // Update the plan name dynamically
    planDetailTitle.textContent = planName;

    // Fade out the Price Plan Section
    pricePlanSection.classList.remove('show');
    setTimeout(() => {
        pricePlanSection.classList.add('fade');
        planDetailSection.classList.remove('fade');
        planDetailSection.classList.add('show');
    }, 500); // Match transition duration
}


// For country and name

const countries = [
    { name: "United States", code: "US", flag: "https://flagcdn.com/us.svg" },
    { name: "Canada", code: "CA", flag: "https://flagcdn.com/ca.svg" },
    { name: "United Kingdom", code: "GB", flag: "https://flagcdn.com/gb.svg" },
    { name: "India", code: "IN", flag: "https://flagcdn.com/in.svg" },
    { name: "Australia", code: "AU", flag: "https://flagcdn.com/au.svg" },
    { name: "Germany", code: "DE", flag: "https://flagcdn.com/de.svg" },
    { name: "France", code: "FR", flag: "https://flagcdn.com/fr.svg" },
    { name: "Japan", code: "JP", flag: "https://flagcdn.com/jp.svg" },
    { name: "China", code: "CN", flag: "https://flagcdn.com/cn.svg" },
    { name: "Brazil", code: "BR", flag: "https://flagcdn.com/br.svg" }
];

const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.getElementById('dropdown-content');
const selectedFlag = document.getElementById('selected-flag');
const selectedCountry = document.getElementById('selected-country');

// Populate dropdown content
countries.forEach(country => {
    const option = document.createElement('div');
    option.innerHTML = `
        <img src="${country.flag}" alt="${country.name}" />
        ${country.name}
    `;
    option.addEventListener('click', () => {
        selectedFlag.src = country.flag;
        selectedFlag.style.display = "inline";
        selectedCountry.textContent = country.name;
        dropdownContent.style.display = 'none';
    });
    dropdownContent.appendChild(option);
});

// Toggle dropdown visibility
dropdownBtn.addEventListener('click', () => {
    dropdownContent.style.display =
        dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown if clicked outside
window.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        dropdownContent.style.display = 'none';
    }
});


// for referral progressbar
// Set remaining days dynamically
const totalDays = 60; // Total qualification period days
const daysLeft = 28; // Days left
const progressPercent = ((totalDays - daysLeft) / totalDays) * 100;

document.getElementById("progressCompleted").style.width = progressPercent + "%";
document.getElementById("progressRemaining").style.width = (100 - progressPercent) + "%";
document.getElementById("daysLeft").textContent = daysLeft;



// Register Form Contact number javascript
document.addEventListener("DOMContentLoaded", function () {
    const countryCodeSelect = document.getElementById("countryCode");
    const contactInput = document.getElementById("contactNumber");

    // Update the contact input placeholder dynamically
    countryCodeSelect.addEventListener("change", function () {
        const selectedOption = this.options[this.selectedIndex];
        const code = selectedOption.getAttribute("data-code");
        contactInput.placeholder = `${code} Enter Your Mobile Number`;
    });

    // Trigger the change event on load to set the initial value
    countryCodeSelect.dispatchEvent(new Event("change"));
});

