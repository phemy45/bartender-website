// BOOKING FORM HANDLER
const form = document.querySelector('form[name="booking"]');
const successMessage = document.getElementById("successMessage");

if (form) {
    form.addEventListener("submit", function () {
        if (successMessage) {
            setTimeout(() => {
                successMessage.style.display = "block";
            }, 100);
        }
        this.reset();
    });
}

// MODIFICATION: Fixed hero button click handler with navbar offset calculation
document.addEventListener("DOMContentLoaded", function () {
    const heroBookingBtn = document.querySelector('.hero .btn');
    const bookingSection = document.getElementById('booking');

    if (heroBookingBtn && bookingSection) {
        heroBookingBtn.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Calculate position accounting for the 80px fixed header height
            const navbarHeight = 80;
            const targetPosition = bookingSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    }
});

// INTERSECTION OBSERVER REVEAL ANIMATION
const elements = document.querySelectorAll('.section, .media-card, .testimonial-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');   
        }
    });
}, {
    threshold: 0.15
});

elements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});