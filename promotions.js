
document.addEventListener('DOMContentLoaded', function() {
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    const formMessage = document.querySelector('.form-message');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Simple validation (would be connected to backend in real app)
            if (email) {
                formMessage.textContent = 'Thank you for subscribing! We\'ll keep you updated on our latest promotions.';
                formMessage.style.color = '#4CAF50';
                emailInput.value = '';
                
                // Reset message after 5 seconds
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 5000);
            } else {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = '#F44336';
            }
        });
    }
    
    // Animation for benefits list
    const benefitItems = document.querySelectorAll('.benefits-list li');
    
    if (benefitItems.length > 0) {
        // Add a slight delay between each item's animation
        benefitItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 200 * (index + 1));
        });
    }
    
    // Promo card hover effect enhancement
    const promoCards = document.querySelectorAll('.promo-card');
    
    promoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const btn = this.querySelector('.btn');
            if (btn) btn.style.backgroundColor = var(--accent-color);
        });
        
        card.addEventListener('mouseleave', function() {
            const btn = this.querySelector('.btn');
            if (btn) btn.style.backgroundColor = '';
        });
    });
});
