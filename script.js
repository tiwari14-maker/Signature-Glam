document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.stopPropagation(); // Prevent closing when clicking inside the dropdown
            this.classList.toggle("active");

            // Close other dropdowns
            navItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
        navItems.forEach((item) => item.classList.remove("active"));
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll(".carousel img");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

function toggleImage(imgElement, newSrc) {
    imgElement.src = newSrc;
}


function openDialog() {
    document.getElementById("dialog").style.display = "flex";
}

function closeDialog() {
    document.getElementById("dialog").style.display = "none";
}
