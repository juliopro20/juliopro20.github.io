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
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.section-title, .skill-card, .project-card, .contact-info, .contact-form').forEach(el => {
            observer.observe(el);
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation and submission simulation
            const formData = new FormData(this);
            const submitBtn = this.querySelector('.submit-btn');
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Message sent successfully! Thank you for reaching out.');
                this.reset();
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }, 1500);
        });

        // Add staggered animation delay to cards
        document.addEventListener('DOMContentLoaded', () => {
            const skillCards = document.querySelectorAll('.skill-card');
            const projectCards = document.querySelectorAll('.project-card');
            
            skillCards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 0.1}s`;
            });
            
            projectCards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 0.1}s`;
            });
        });

        // Typing effect for hero text (optional enhancement)
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Add hover effects for skill icons
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.skill-icon');
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.skill-icon');
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });