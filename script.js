document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            const icon = mobileNav.classList.contains('active') ? 'x' : 'menu';
            // Update icon if needed, or just rely on CSS/overlay
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

    // Typing Effect
    const text = "Software Engineer";
    const typingElement = document.getElementById('typing-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 1000);

    // Vanta.js Background
    try {
        VANTA.NET({
            el: "#canvas-container",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x00f3ff,
            backgroundColor: 0x050505,
            points: 10.00,
            maxDistance: 22.00,
            spacing: 18.00
        });
    } catch (e) {
        console.log("Vanta JS not loaded or error initializing", e);
    }

    // Scroll Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Resume Modal
    const modal = document.getElementById('resume-modal');
    const btn = document.getElementById('resume-btn');
    const span = document.getElementsByClassName('close-modal')[0];

    if (btn && modal && span) {
        btn.onclick = function() {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        span.onclick = function() {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        }
    }
});
