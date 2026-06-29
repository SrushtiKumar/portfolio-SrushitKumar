document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');
    const contactForm = document.getElementById('contactForm');

    // 1. Mobile Navbar Toggle
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

    // 2. Active Section Tracker in Navbar
    const setActiveLink = () => {
        const scrollPos = window.scrollY + 120;
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

    // 3. Smooth Navigation Scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const targetId = anchor.getAttribute('href');
            const target = targetId ? document.querySelector(targetId) : null;

            if (target) {
                event.preventDefault();
                const offset = 80; // Offset for navbar height
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Scroll Reveal Intersection Observer
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        // Select timeline cards, edu cards, skill pills, project/contact window cards
        document.querySelectorAll('.timeline-card, .edu-card, .skill-pill, .premium-card, .contact-item, .window-card').forEach((el) => {
            el.classList.add('scroll-animate');
            revealObserver.observe(el);
        });
    } else {
        // Fallback for older browsers
        document.querySelectorAll('.timeline-card, .edu-card, .skill-pill, .premium-card, .contact-item, .window-card').forEach((el) => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }

    // 5. Contact Form Simulation
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');

            if (!submitBtn) return;

            const originalHTML = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            window.setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent ✓';
                submitBtn.style.backgroundColor = '#88D49E';
                
                logToConsole('Mail message sent successfully to Srushti Kumar.');
                contactForm.reset();

                window.setTimeout(() => {
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 2200);
            }, 1000);
        });
    }

    // 6. Dynamic System Taskbar Clock (HH:MM:SS AM/PM)
    const updateClock = () => {
        const clockElement = document.getElementById('clock-display');
        if (!clockElement) return;

        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 should map to 12
        const hoursStr = String(hours).padStart(2, '0');

        clockElement.textContent = `${hoursStr}:${minutes}:${seconds} ${ampm}`;
    };

    setInterval(updateClock, 1000);
    updateClock();

    // 7. Interactive Close Window Controls
    document.querySelectorAll('.control-btn.close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const windowCard = e.target.closest('.window-card');
            if (windowCard) {
                windowCard.style.transition = 'all 0.25s cubic-bezier(0.6, -0.28, 0.735, 0.045)';
                windowCard.style.transform = 'scale(0.85)';
                windowCard.style.opacity = '0';
                
                const title = windowCard.querySelector('.window-title')?.textContent.trim() || 'window';
                logToConsole(`Closed Panel: ${title}`);
                
                setTimeout(() => {
                    windowCard.style.display = 'none';
                }, 250);
            }
        });
    });

    // 8. Simulated Typing Diagnostic Console Script
    const runConsoleDemo = () => {
        const consoleBody = document.querySelector('.console-body');
        if (!consoleBody) return;

        // Clear existing static lines and set cursor
        consoleBody.innerHTML = '<p class="console-line cursor-line">_</p>';

        const lines = [
            { text: 'NAME: Srushti Kumar', type: 'info' },
            { text: 'DEGREE: B.E. Computer Science & Design', type: 'info' },
            { text: 'CREDENTIAL: KSIT (Affiliated with VTU)', type: 'info' },
            { text: 'CGPA: 9.44 / 10.00', type: 'info' },
            { text: 'FOCUS: Software Dev, QA Automation, Data Analytics', type: 'info' },
            { text: 'TOOLKIT: Python | SQL | Java | JavaScript | React | FastAPI', type: 'info' },
            { text: 'PORTFOLIO STATUS: RUNNING AND ONLINE', type: 'success' }
        ];

        let lineIndex = 0;
        
        const typeLine = () => {
            if (lineIndex >= lines.length) return;

            const cursorLine = consoleBody.querySelector('.cursor-line');
            const lineData = lines[lineIndex];
            const lineElement = document.createElement('p');
            lineElement.className = 'console-line';

            if (lineData.type === 'success') {
                lineElement.classList.add('text-yellow');
            }

            let charIndex = 0;
            
            const typeChar = () => {
                if (charIndex < lineData.text.length) {
                    lineElement.textContent += lineData.text[charIndex];
                    charIndex++;
                    setTimeout(typeChar, 15);
                } else {
                    consoleBody.insertBefore(lineElement, cursorLine);
                    consoleBody.scrollTop = consoleBody.scrollHeight;
                    lineIndex++;
                    setTimeout(typeLine, 350);
                }
            };

            typeChar();
        };

        setTimeout(typeLine, 400);
    };

    // Helper Console Logging
    window.logToConsole = (text) => {
        const consoleBody = document.querySelector('.console-body');
        if (!consoleBody) return;
        const cursorLine = consoleBody.querySelector('.cursor-line');
        const newLine = document.createElement('p');
        newLine.className = 'console-line text-yellow';
        newLine.textContent = `[Info] ${text}`;
        consoleBody.insertBefore(newLine, cursorLine);
        consoleBody.scrollTop = consoleBody.scrollHeight;
    };

    // Run the terminal loading sequence
    runConsoleDemo();
});
