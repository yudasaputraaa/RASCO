AOS.init();

// Add "scrolled" class when scrolling past a certain point
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hover effect on navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', (e) => {
    const bounding = link.getBoundingClientRect();
    const mouseX = e.clientX - bounding.left;
    const centerX = bounding.width / 2;

    link.classList.add('hover');

    if (mouseX < centerX) {
      link.classList.add('hover-left');
      link.classList.remove('hover-right');
    } else {
      link.classList.add('hover-right');
      link.classList.remove('hover-left');
    }
  });

  link.addEventListener('mouseleave', () => {
    link.classList.remove('hover', 'hover-left', 'hover-right');
  });
});
