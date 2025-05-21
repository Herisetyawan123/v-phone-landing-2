
document.addEventListener('DOMContentLoaded', function() {
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length > 0) {
        // Function to check if element is in viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }
        
        // Function to handle scroll animation
        function handleScroll() {
            timelineItems.forEach(item => {
                if (isElementInViewport(item)) {
                    item.classList.add('visible');
                }
            });
        }
        
        // Initial setup for timeline items
        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // Add .visible class to visible items on load
        handleScroll();
        
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // CSS for visible class is added via JS
        document.head.insertAdjacentHTML('beforeend', 
            `<style>
                .timeline-item.visible {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            </style>`
        );
    }
    
    // Team member hover effect
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#FFFFFF';
        });
    });
    
    // Value card click effect
    const valueCards = document.querySelectorAll('.value-card');
    
    valueCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a pulse animation
            this.style.animation = 'pulse 0.5s';
            
            // Remove animation after it completes
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
    
    // Add keyframes for pulse animation
    document.head.insertAdjacentHTML('beforeend', 
        `<style>
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        </style>`
    );
});
