  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
          // Close mobile menu if open
          navLinks.classList.remove('active');
      });
  });

  // Scroll animations
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, observerOptions);

  document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
  });

  // Header background on scroll
  window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 100) {
          header.style.background = 'rgba(255, 255, 255, 0.98)';
      } else {
          header.style.background = 'rgba(255, 255, 255, 0.95)';
      }
  });

  // Contact form handling
  document.querySelector('.contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // Simple validation
      if (name && email && message) {
          // In a real application, you would send this data to your server
          alert('Thank you for your message! I\'ll get back to you soon.');
          this.reset();
      } else {
          alert('Please fill in all fields.');
      }
  });

  // Tech badge hover effects
  document.querySelectorAll('.tech-badge').forEach(badge => {
      badge.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-2px) scale(1.05)';
      });
      
      badge.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) scale(1)';
      });
  });