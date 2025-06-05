document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeAnimations();
        setupScrollAnimations();
        setupHoverEffects();
    } catch (error) {
        console.error('Animations initialization error:', error);
        reportError(error);
    }
});

function initializeAnimations() {
    try {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.card, .section-title').forEach(el => {
            observer.observe(el);
        });
    } catch (error) {
        console.error('Initialize animations error:', error);
        reportError(error);
    }
}

function setupScrollAnimations() {
    try {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero-section');
            
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });
    } catch (error) {
        console.error('Scroll animations error:', error);
        reportError(error);
    }
}

function setupHoverEffects() {
    try {
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.transition = 'all 0.3s ease';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    } catch (error) {
        console.error('Hover effects error:', error);
        reportError(error);
    }
}

function addPulseAnimation(element) {
    try {
        element.style.animation = 'pulse 1s infinite';
        setTimeout(() => {
            element.style.animation = '';
        }, 3000);
    } catch (error) {
        console.error('Pulse animation error:', error);
        reportError(error);
    }
}
