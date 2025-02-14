// Toggle Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navUl = document.querySelector('header nav ul');

mobileMenu.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contactForm').reset();
  } else {
    alert('Please fill out all fields.');
  }
});