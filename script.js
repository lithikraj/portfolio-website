// script.js
// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form Submission
// Add EmailJS initialization
(function() {
    emailjs.init("service_wu9tn9k"); // Get this from EmailJS dashboard
  })();
  
  // Update form submission
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_id', 'template_id', e.target)
      .then(() => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Error: ' + JSON.stringify(error));
      });
  });
});