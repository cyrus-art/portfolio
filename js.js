
// document.addEventListener('DOMContentLoaded', function() {
//     // Mobile menu toggle
//     const mobileMenuButton = document.getElementById('mobileMenuButton');
//     const mobileMenu = document.getElementById('mobileMenu');
//     const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    
//     mobileMenuButton.addEventListener('click', function() {
//       mobileMenu.classList.toggle('active');
      
//       // Change icon based on menu state
//       if (mobileMenu.classList.contains('active')) {
//         mobileMenuButton.innerHTML = '<i class="fas fa-times"></i>';
//       } else {
//         mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
//       }
//     });
    
//     // Smooth scrolling for navigation links
//     navLinks.forEach(link => {
//       link.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         const targetSection = document.querySelector(targetId);
        
//         if (targetSection) {
//           // Close mobile menu if open
//           mobileMenu.classList.remove('active');
//           mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
          
//           // Smooth scroll to section
//           window.scrollTo({
//             top: targetSection.offsetTop - 80,
//             behavior: 'smooth'
//           });
          
//           // Update active link
//           navLinks.forEach(navLink => navLink.classList.remove('active'));
//           this.classList.add('active');
//         }
//       });
//     });
    
//     // Navbar scroll effect
//     const navbar = document.querySelector('.navbar');
    
//     window.addEventListener('scroll', function() {
//       if (window.scrollY > 10) {
//         navbar.style.background = 'rgba(4, 17, 36, 0.95)';
//         navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
//       } else {
//         navbar.style.background = 'var(--deep-blue)';
//         navbar.style.boxShadow = 'none';
//       }
//     });
    
//     // Testimonial slider
//     const testimonials = [
//       {
//         id: 'testimonial1',
//         text: '"Working with Zemo was an absolute pleasure. He understood our vision perfectly and delivered a website that exceeded our expectations. His attention to detail and creativity are unmatched!"',
//         author: 'Maria Johnson',
//         position: 'CEO, Design Studio',
//         image: 'https://randomuser.me/api/portraits/women/65.jpg'
//       },
//       {
//         id: 'testimonial2',
//         text: '"Zemo transformed our outdated website into a modern, user-friendly platform that has significantly increased our conversion rates. His technical skills and design sensibility make him a rare find."',
//         author: 'John Smith',
//         position: 'Marketing Director, Tech Solutions',
//         image: 'https://randomuser.me/api/portraits/men/32.jpg'
//       },
//       {
//         id: 'testimonial3',
//         text: '"The mobile app Zemo designed for us has received fantastic feedback from users. His understanding of UX principles and ability to create intuitive interfaces is impressive."',
//         author: 'Sarah Davis',
//         position: 'Product Owner, MobileApps Inc',
//         image: 'https://randomuser.me/api/portraits/women/42.jpg'
//       }
//     ];
    
//     let currentTestimonialIndex = 0;
//     const testimonialSlider = document.querySelector('.testimonial-slider');
//     const indicators = document.querySelectorAll('.indicator');
//     const prevButton = document.querySelector('.control-prev');
//     const nextButton = document.querySelector('.control-next');
    
//     function showTestimonial(index) {
//       // Create the testimonial HTML
//       const testimonial = testimonials[index];
      
//       testimonialSlider.innerHTML = `
//         <div class="testimonial-card" id="${testimonial.id}">
//           <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
//           <p class="testimonial-text">${testimonial.text}</p>
//           <div class="testimonial-author">
//             <img src="${testimonial.image}" alt="${testimonial.author}">
//             <div>
//               <h4>${testimonial.author}</h4>
//               <p>${testimonial.position}</p>
//             </div>
//           </div>
//         </div>
//       `;
      
//       // Update indicators
//       indicators.forEach((indicator, i) => {
//         indicator.classList.toggle('active', i === index);
//       });
      
//       // Update current index
//       currentTestimonialIndex = index;
//     }
    
//     // Handle indicator clicks
//     indicators.forEach((indicator, index) => {
//       indicator.addEventListener('click', () => {
//         showTestimonial(index);
//       });
//     });
    
//     // Handle prev/next buttons
//     prevButton.addEventListener('click', () => {
//       const newIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
//       showTestimonial(newIndex);
//     });
    
//     nextButton.addEventListener('click', () => {
//       const newIndex = (currentTestimonialIndex + 1) % testimonials.length;
//       showTestimonial(newIndex);
//     });
    
//     // Form submission
//     const contactForm = document.querySelector('.contact-form');
    
//     contactForm.addEventListener('submit', function(e) {
//       e.preventDefault();
      
//       // In a real application, you would send the form data to a server
//       alert('Thank you for your message! I will get back to you soon.');
//       contactForm.reset();
//     });
    
//     // Highlight active nav item based on scroll position
//     function updateActiveNavItem() {
//       const scrollPosition = window.scrollY + 200;
      
//       // Find all sections
//       const sections = document.querySelectorAll('section');
      
//       sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;
//         const sectionId = section.getAttribute('id');
        
//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//           // Remove active class from all links
//           navLinks.forEach(link => link.classList.remove('active'));
          
//           // Add active class to corresponding links
//           document.querySelectorAll(`a[href="#${sectionId}"]`).forEach(link => {
//             link.classList.add('active');
//           });
//         }
//       });
//     }
    
//     window.addEventListener('scroll', updateActiveNavItem);
    
//     // Initialize
//     showTestimonial(0);
//     updateActiveNavItem();
//   });