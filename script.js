document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');
    const contactForm = document.getElementById('contactForm');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navMenu?.classList.remove('active');
            hamburger?.classList.remove('active');
        });
    });

    const setActiveLink = () => {
        const scrollPos = window.scrollY + 180;
        let currentId = 'home';

        sections.forEach((section) => {
            if (scrollPos >= section.offsetTop) {
                currentId = section.id;
            }
        });

        navLinks.forEach((link) => {
            const href = link.getAttribute('href') || '';
            link.classList.toggle('active', href === `#${currentId}`);
        });
    };

    window.addEventListener('scroll', setActiveLink, { passive: true });
    setActiveLink();

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const targetId = anchor.getAttribute('href');
            const target = targetId ? document.querySelector(targetId) : null;

            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });

        document.querySelectorAll('.timeline-card, .edu-card, .skill-pill, .premium-card, .contact-item, .contact-form').forEach((el) => {
            revealObserver.observe(el);
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');

            if (!submitBtn) return;

            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            window.setTimeout(() => {
                submitBtn.textContent = 'Message Sent ✓';
                contactForm.reset();

                window.setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2200);
            }, 900);
        });
    }

    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scrollToTopBtn';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);

    const updateScrollButton = () => {
        const visible = window.scrollY > 350;
        scrollToTopBtn.style.display = visible ? 'flex' : 'none';
    };

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', updateScrollButton, { passive: true });
    updateScrollButton();
});

const style = document.createElement('style');
style.textContent = `
    #scrollToTopBtn {
        position: fixed;
        right: 24px;
        bottom: 24px;
        width: 52px;
        height: 52px;
        border: none;
        border-radius: 50%;
        background: linear-gradient(135deg, #1E7FBE, #F56399);
        color: #fff;
        box-shadow: 0 16px 30px rgba(0, 0, 0, 0.18);
        z-index: 999;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    #scrollToTopBtn:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 36px rgba(0, 0, 0, 0.22);
    }

    .scroll-animate {
        animation: fadeInUp 0.7s ease-out both;
    }
`;
document.head.appendChild(style);

console.log('Premium data science portfolio loaded.');
