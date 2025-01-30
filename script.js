// script.js
// Scroll Animations with Intersection Observer
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { 
    threshold: 0.25,
    rootMargin: '0px 0px -100px 0px' 
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    scrollObserver.observe(section);
});

// Form Handling with Formspree
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;

    try {
        // Show loading state
        submitButton.innerHTML = '<div class="spinner"></div>Sending...';
        submitButton.disabled = true;

        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if(response.ok) {
            alert('Message sent successfully! I\'ll respond within 24 hours.');
            form.reset();
        } else {
            throw new Error('Server response not OK');
        }
    } catch (error) {
        alert('Error sending message. Please email me directly at lithikraj03@gmail.com');
    } finally {
        // Reset button state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    }
});

// Smooth Scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerOffset = 80; // Height of your fixed header
        
        if(targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update URL hash
            history.pushState(null, null, targetId);
        }
    });
});

// Add active class to navigation links
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

// Mobile Menu Toggle (Add this if needed)
const menuToggle = document.createElement('button');
menuToggle.innerHTML = '☰';
menuToggle.classList.add('mobile-menu-toggle');
document.querySelector('header').prepend(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if(!e.target.closest('header')) {
        document.querySelector('nav').classList.remove('active');
    }
});
