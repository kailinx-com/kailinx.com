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

    // Data Fetching and Rendering
    const loadData = async () => {
        try {
            await Promise.all([
                loadExperience(),
                loadEducation(),
                loadProjects()
            ]);
            // Re-initialize icons after dynamic content is loaded
            lucide.createIcons();
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    const loadExperience = async () => {
        const container = document.querySelector('#experience .timeline');
        if (!container) return;

        try {
            const response = await fetch('data/experience.json');
            const data = await response.json();

            container.innerHTML = data.map(item => `
                <div class="timeline-item glass-card">
                    <div class="timeline-date">${item.date}</div>
                    <div class="timeline-content">
                        <h3>${item.role}</h3>
                        <h4>${item.company}</h4>
                        <p>${item.description}</p>
                        ${item.techStack && item.techStack.length > 0 ? `
                        <div class="tech-stack">
                            ${item.techStack.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                        ` : ''}
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error loading experience:', error);
        }
    };

    const loadEducation = async () => {
        const container = document.querySelector('#education .timeline');
        if (!container) return;

        try {
            const response = await fetch('data/education.json');
            const data = await response.json();

            container.innerHTML = data.map(item => `
                <div class="timeline-item glass-card">
                    <div class="timeline-date">${item.date}</div>
                    <div class="timeline-content">
                        <h3>${item.school}</h3>
                        ${item.degree ? `<h4>${item.degree.replace(/\n/g, '<br>')}</h4>` : ''}
                        <p>${item.description.replace(/\n/g, '<br>')}</p>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error loading education:', error);
        }
    };

    const loadProjects = async () => {
        const container = document.querySelector('.projects-grid');
        if (!container) return;

        try {
            const response = await fetch('data/projects.json');
            const data = await response.json();

            container.innerHTML = data.map(item => `
                <div class="project-card glass-card">
                    <div class="project-header">
                        <div>
                            <h3>${item.title}</h3>
                            <div class="project-date">${item.date}</div>
                        </div>
                        <div class="project-links">
                            ${item.links.map(link => `
                                <a href="${link.url}" target="_blank" aria-label="${link.type === 'github' ? 'Code' : 'Website'}">
                                    <i data-lucide="${link.type}"></i>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                    <p>${item.description}</p>
                    <div class="tech-stack">
                        ${item.techStack.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error loading projects:', error);
        }
    };

    loadData();
});
