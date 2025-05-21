
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        // Animate menu icon to X
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.toggle('change'));
    });

    // Product Slider Functionality
    const productSlider = document.querySelector('.product-slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (productSlider && prevBtn && nextBtn) {
        const cardWidth = 320; // card width + gap
        
        prevBtn.addEventListener('click', function() {
            productSlider.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            productSlider.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        });
    }

    // Automatic slider for hero section (if implemented)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    
    if (slides.length > 1) {
        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.style.opacity = 1;
                    slide.style.zIndex = 1;
                } else {
                    slide.style.opacity = 0;
                    slide.style.zIndex = 0;
                }
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Initialize first slide
        showSlide(0);
        
        // Auto advance slides
        setInterval(nextSlide, 5000);
    }
});
