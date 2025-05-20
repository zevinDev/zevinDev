document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    fixScrollingIssues();
    initTerminalTyping();
    createBackgroundEffects();
    initEnhancedScrollAnimations();
    setupContactForm();
});

function initTerminalTyping() {
    const terminalContent = document.querySelector('.typing-text');
    let delay = 0;
    
    Array.from(terminalContent.children).forEach((element) => {
        if (element.classList.contains('command') || 
            element.classList.contains('response') || 
            element.classList.contains('prompt')) {
            
            const text = element.textContent;
            element.textContent = '';
            
            for (let i = 0; i < text.length; i++) {
                const letter = document.createTextNode(text[i]);
                
                setTimeout(() => {
                    element.appendChild(letter);
                }, delay);
                
                delay += 50;
            }
            
            delay += 500;
        }
    });
}

function createBackgroundEffects() {
    createMatrixRain();
    createParticles();
    createDigitalCircuit();
    createScrollProgressBar();
}

function createMatrixRain() {
    const existingMatrix = document.querySelector('.matrix-rain');
    if (existingMatrix) {
        existingMatrix.remove();
    }
    
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-rain';
    matrixContainer.style.opacity = '0';
    
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const columnCount = Math.floor(window.innerWidth / 20);
    const columns = [];
    
    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20 + Math.random() * 10}px`;
        column.style.opacity = 0
        const duration = Math.random() * 5 + 3;
        column.style.animationDuration = `${duration}s`;
        
        const delay = Math.random() * 2;
        column.style.animationDelay = `${delay}s`;
        
        const columnHeight = Math.floor(Math.random() * 15) + 5;
        for (let j = 0; j < columnHeight; j++) {
            const charIndex = Math.floor(Math.random() * characters.length);
            const charSpan = document.createElement('span');
            charSpan.textContent = characters[charIndex];
            column.appendChild(charSpan);
        }
        
        columns.push({
            column: column,
            duration: duration,
            delay: delay
        });
    }
    
    document.body.appendChild(matrixContainer);
    
    columns.forEach(({column, duration, delay}) => {
        matrixContainer.appendChild(column);
        
        setTimeout(() => {
            if (document.body.contains(column)) {
                column.remove();
                const newColumn = column.cloneNode(false);
                newColumn.style.left = `${Math.random() * window.innerWidth}px`;
                
                const newColumnHeight = Math.floor(Math.random() * 15) + 5;
                for (let j = 0; j < newColumnHeight; j++) {
                    const charIndex = Math.floor(Math.random() * characters.length);
                    const charSpan = document.createElement('span');
                    charSpan.textContent = characters[charIndex];
                    newColumn.appendChild(charSpan);
                }
                matrixContainer.appendChild(newColumn);
            }
        }, (duration + delay) * 1000);
    });
    
    setTimeout(() => {
        matrixContainer.style.transition = 'opacity 0.5s ease-in';
        matrixContainer.style.opacity = '1';
    }, 100);
    
    window.addEventListener('resize', debounce(() => {
        createMatrixRain();
    }, 300));
}

function createParticles() {
    let container = document.getElementById('cyber-particles-container');
    
    if (!container) {
        container = document.createElement('div');
        container.id = 'cyber-particles-container';
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.zIndex = '-1';
        container.style.pointerEvents = 'none';
        document.body.appendChild(container);
    } else {
        container.innerHTML = '';
    }
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `-${Math.random() * 10}%`;
        
        const speed = Math.random() * 15 + 10;
        particle.style.animationDuration = `${speed}s`;
        
        const delay = Math.random() * 5;
        particle.style.animationDelay = `${delay}s`;
        
        particle.setAttribute('data-speed', Math.random() * 0.03);
        
        if (Math.random() > 0.75) {
            particle.style.backgroundColor = 'var(--secondary)';
            particle.style.boxShadow = 'var(--magenta-glow)';
        }
        
        container.appendChild(particle);
        
        setTimeout(() => {
            if (document.body.contains(particle)) {
                particle.remove();
                createSingleParticle(container);
            }
        }, (speed + delay) * 1000);
    }
}

function createSingleParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 6 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    particle.style.left = `${Math.random() * 100}%`;
    
    particle.style.bottom = `-${Math.random() * 10}%`;
    
    const duration = Math.random() * 15 + 10;
    particle.style.animationDuration = `${duration}s`;
    
    const delay = Math.random() * 5;
    particle.style.animationDelay = `${delay}s`;
    
    particle.setAttribute('data-speed', Math.random() * 0.03);
    
    if (Math.random() > 0.75) {
        particle.style.backgroundColor = 'var(--secondary)';
        particle.style.boxShadow = 'var(--magenta-glow)';
    }
    
    container.appendChild(particle);
    
    setTimeout(() => {
        if (document.body.contains(particle)) {
            particle.remove();
            createSingleParticle(container);
        }
    }, (duration + delay) * 1000);
}

function createWarpLine(container) {
    const line = document.createElement('div');
    line.className = 'warp-line';
    
    const angle = Math.random() * Math.PI * 2;
    line.style.transform = `rotate(${angle}rad)`;
    
    const duration = Math.random() * 3 + 2;
    line.style.animationDuration = `${duration}s`;
    
    const delay = Math.random() * 3;
    line.style.animationDelay = `${delay}s`;
    
    container.appendChild(line);
    
    setTimeout(() => {
        line.remove();
        createWarpLine(container);
    }, (duration + delay) * 1000);
}

function createDigitalCircuit() {
    const existingCircuit = document.querySelector('.digital-circuit');
    if (existingCircuit) {
        existingCircuit.remove();
    }
    
    const container = document.createElement('div');
    container.className = 'digital-circuit';
    document.body.appendChild(container);
    
    const lineCount = 15;
    
    for (let i = 0; i < lineCount; i++) {
        const hLine = document.createElement('div');
        hLine.className = 'digital-line horizontal';
        const hPosition = Math.random() * 100;
        hLine.style.top = `${hPosition}%`;
        
        const hDelay = Math.random() * 5;
        hLine.style.animationDelay = `${hDelay}s`;
        
        container.appendChild(hLine);
        
        createDataPackets(hLine, 'horizontal');
        
        const vLine = document.createElement('div');
        vLine.className = 'digital-line vertical';
        const vPosition = Math.random() * 100;
        vLine.style.left = `${vPosition}%`;
        
        const vDelay = Math.random() * 5;
        vLine.style.animationDelay = `${vDelay}s`;
        
        container.appendChild(vLine);
        
        createDataPackets(vLine, 'vertical');
        
        if (Math.random() > 0.5) {
            const node = document.createElement('div');
            node.className = 'digital-node';
            node.style.top = `${hPosition}%`;
            node.style.left = `${vPosition}%`;
            
            node.style.animationDelay = `${Math.max(hDelay, vDelay) + 0.5}s`;
            
            container.appendChild(node);
        }
        
        for (let j = 0; j < 3; j++) {
            if (Math.random() > 0.3) {
                const hNode = document.createElement('div');
                hNode.className = 'digital-node';
                hNode.style.top = `${hPosition}%`;
                hNode.style.left = `${Math.random() * 100}%`;
                hNode.style.animationDelay = `${Math.random() * 4 + hDelay}s`;
                container.appendChild(hNode);
            }
            
            if (Math.random() > 0.3) {
                const vNode = document.createElement('div');
                vNode.className = 'digital-node';
                vNode.style.top = `${Math.random() * 100}%`;
                vNode.style.left = `${vPosition}%`;
                vNode.style.animationDelay = `${Math.random() * 4 + vDelay}s`;
                container.appendChild(vNode);
            }
        }
    }
    
    window.addEventListener('resize', debounce(() => {
        createDigitalCircuit();
    }, 500));
}

function createDataPackets(line, direction) {
    const packetCount = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < packetCount; i++) {
        const packet = document.createElement('div');
        packet.className = 'data-packet';
        
        const delay = Math.random() * 5;
        packet.style.animationDelay = `${delay}s`;
        
        line.appendChild(packet);
        
        const duration = 3;
        setTimeout(() => {
            if (document.body.contains(packet)) {
                packet.remove();
                const newPacket = packet.cloneNode();
                newPacket.style.animationDelay = '0s';
                if (line.contains) {
                    line.appendChild(newPacket);
                    
                    setTimeout(() => {
                        if (document.body.contains(newPacket)) {
                            newPacket.remove();
                            createDataPacket(line, direction);
                        }
                    }, duration * 1000);
                }
            }
        }, (duration + delay) * 1000);
    }
}

function createDataPacket(line, direction) {
    if (!document.body.contains(line)) return;
    
    const packet = document.createElement('div');
    packet.className = 'data-packet';
    
    line.appendChild(packet);
    
    setTimeout(() => {
        if (document.body.contains(packet)) {
            packet.remove();
            createDataPacket(line, direction);
        }
    }, 3000);
}

function debounce(func, delay) {
    let timer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

function throttle(func, wait) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= wait) {
            lastCall = now;
            return func.apply(this, args);
        }
    };
}

function createScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', throttle(() => {
        requestAnimationFrame(() => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = `${scrolled}%`;
        });
    }, 15), { passive: true });
}

function initEnhancedScrollAnimations() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('reveal-section');
    });
    
    createScrollIndicator();
    setupRevealObserver();
}

function createScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    document.body.appendChild(indicator);
    
    window.addEventListener('scroll', throttle(() => {
        requestAnimationFrame(() => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > window.innerHeight / 2) {
                indicator.style.opacity = '0';
                indicator.style.transform = 'translateY(20px)';
            } else {
                indicator.style.opacity = '0.7';
                indicator.style.transform = 'translateY(0)';
            }
        });
    }, 100), { passive: true });
}

function setupRevealObserver() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                const elements = entry.target.querySelectorAll('.form-group, h2, p');
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('fade-in-up');
                    }, index * 150);
                });
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '-50px'
    });
    
    document.querySelectorAll('.reveal-section').forEach(section => {
        observer.observe(section);
    });
}

function setupContactForm() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const submitButton = form.querySelector('.submit-button');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<span>TRANSMITTING...</span>';
            submitButton.classList.add('transmitting');
            
            const flash = document.createElement('div');
            flash.className = 'form-submit-flash';
            flash.style.position = 'fixed';
            flash.style.top = '0';
            flash.style.left = '0';
            flash.style.width = '100%';
            flash.style.height = '100%';
            flash.style.backgroundColor = 'var(--primary)';
            flash.style.opacity = '0';
            flash.style.zIndex = '999';
            flash.style.pointerEvents = 'none';
            document.body.appendChild(flash);
            
            flash.animate([
                { opacity: 0 },
                { opacity: 0.2 },
                { opacity: 0 }
            ], {
                duration: 600,
                easing: 'cubic-bezier(0.17, 0.67, 0.83, 0.67)'
            });
            
            setTimeout(() => {
                flash.remove();
            }, 1000);
            
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success-message';
            successMessage.innerHTML = `
                <div class="success-icon">✓</div>
                <h3>Message Transmitted</h3>
                <p>Your transmission has been received. Standby for response.</p>
            `;
            successMessage.style.display = 'none';
            form.appendChild(successMessage);
            
            setTimeout(() => {
                Array.from(form.querySelectorAll('.form-group, .submit-button')).forEach(el => {
                    el.style.transition = 'opacity 0.5s, transform 0.5s';
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(-20px)';
                });
                
                setTimeout(() => {
                    successMessage.style.display = 'flex';
                    successMessage.style.opacity = '0';
                    successMessage.style.transform = 'scale(0.9)';
                    
                    setTimeout(() => {
                        successMessage.style.transition = 'opacity 0.5s, transform 0.5s';
                        successMessage.style.opacity = '1';
                        successMessage.style.transform = 'scale(1)';
                    }, 10);
                    
                    form.reset();
                    
                    setTimeout(() => {
                        successMessage.style.transition = 'opacity 0.5s, transform 0.5s';
                        successMessage.style.opacity = '0';
                        successMessage.style.transform = 'scale(1.1)';
                        
                        setTimeout(() => {
                            Array.from(form.querySelectorAll('.form-group, .submit-button')).forEach(el => {
                                el.style.opacity = '1';
                                el.style.transform = 'translateY(0)';
                            });
                            submitButton.innerHTML = originalText;
                            submitButton.classList.remove('transmitting');
                            
                            setTimeout(() => {
                                if (form.contains(successMessage)) {
                                    form.removeChild(successMessage);
                                }
                            }, 500);
                        }, 500);
                    }, 3000);
                }, 500);
            }, 1500);
        });
        
        const formInputs = form.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentNode.classList.add('input-focus');
            });
            
            input.addEventListener('blur', function() {
                this.parentNode.classList.remove('input-focus');
            });
            
            if (input.type === 'text' || input.type === 'email' || input.tagName.toLowerCase() === 'textarea') {
                input.addEventListener('keydown', function(e) {
                    if (e.ctrlKey || e.altKey || e.metaKey) return;
                    
                    const skipKeys = ['Shift', 'Tab', 'CapsLock', 'Control', 'Alt', 'Meta', 'Escape', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
                    if (skipKeys.includes(e.key)) return;
                    
                    const keyFlash = document.createElement('div');
                    keyFlash.className = 'key-flash';
                    keyFlash.style.position = 'absolute';
                    keyFlash.style.bottom = '0';
                    keyFlash.style.left = '0';
                    keyFlash.style.right = '0';
                    keyFlash.style.height = '0px';
                    keyFlash.style.backgroundColor = 'var(--primary)';
                    keyFlash.style.opacity = '0.7';
                    keyFlash.style.zIndex = '1';
                    this.parentNode.appendChild(keyFlash);
                    
                    setTimeout(() => {
                        keyFlash.style.transition = 'opacity 0.3s';
                        keyFlash.style.opacity = '0';
                        setTimeout(() => {
                            if (this.parentNode.contains(keyFlash)) {
                                this.parentNode.removeChild(keyFlash);
                            }
                        }, 300);
                    }, 200);
                });
            }
        });
        
        form.querySelectorAll('input[required], textarea[required]').forEach(field => {
            field.removeEventListener('input', validateField);
            
            field.addEventListener('blur', function() {
                const isValid = this.checkValidity();
                
                const existingIndicator = this.parentNode.querySelector('.validation-status');
                if (existingIndicator) {
                    existingIndicator.remove();
                }
                
                if (this.value) {
                    const statusIndicator = document.createElement('div');
                    statusIndicator.className = `validation-status ${isValid ? 'valid' : 'invalid'}`;
                    statusIndicator.innerHTML = isValid ? '✓' : '!';
                    this.parentNode.appendChild(statusIndicator);
                }
            });
            
            field.addEventListener('focus', function() {
                const existingIndicator = this.parentNode.querySelector('.validation-status');
                if (existingIndicator) {
                    existingIndicator.remove();
                }
            });
        });
    }
}

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    document.querySelectorAll('.particle').forEach(particle => {
        const speed = parseFloat(particle.getAttribute('data-speed') || Math.random() * 0.03);
        const offsetX = (mouseX - 0.5) * speed * 100;
        const offsetY = (mouseY - 0.5) * speed * 100;
        particle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
    
    document.querySelectorAll('.digital-line').forEach(line => {
        const parallaxAmount = mouseX * 10;
        if (line.classList.contains('horizontal')) {
            line.style.transform = `translateX(${mouseX * -15}px)`;
        } else {
            line.style.transform = `translateY(${mouseY * -15}px)`;
        }
    });
    
    const terminal = document.querySelector('.terminal-container');
    if (terminal) {
        terminal.style.transform = `translate3d(${mouseX * -20}px, ${mouseY * -20}px, 0)`;
    }
});

function fixScrollingIssues() {
    document.body.style.willChange = 'scroll-position';
    document.documentElement.style.willChange = 'scroll-position';
    
    document.body.style.scrollSnapType = 'none';
    document.documentElement.style.scrollBehavior = 'auto';
    
    requestAnimationFrame(() => {
        window.scrollTo(0, 0);
    });
    
    const heroSection = document.querySelector('.hero-section');
    const aboutSection = document.querySelector('.about-section');
    
    if (heroSection && aboutSection) {
        heroSection.style.scrollSnapAlign = 'none';
        aboutSection.style.scrollSnapAlign = 'none';
    }
    
    const scrollManager = {
        isProcessingScroll: false,
        scrollTimeout: null,
        
        preventBounce: function() {
            if (this.isProcessingScroll) return;
            
            if (window.scrollY < 50) {
                this.isProcessingScroll = true;
                
                requestAnimationFrame(() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'auto'
                    });
                    
                    clearTimeout(this.scrollTimeout);
                    this.scrollTimeout = setTimeout(() => {
                        this.isProcessingScroll = false;
                    }, 100);
                });
            }
        }
    };
    
    const throttledScrollHandler = throttle(function() {
        if (window.scrollY < 50 && window.scrollY > 0) {
            scrollManager.preventBounce();
        }
    }, 100);
    
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    const throttledTouchHandler = throttle(function() {
        if (window.scrollY <= 50) {
            requestAnimationFrame(() => {
                window.scrollTo(0, 0);
            });
        }
    }, 100);
    
    document.addEventListener('touchmove', throttledTouchHandler, { passive: true });
    
    const throttledWheelHandler = throttle(function(e) {
        if (window.scrollY < 50 && e.deltaY < 0) {
            requestAnimationFrame(() => {
                window.scrollTo(0, 0);
            });
        }
    }, 50);
    
    window.addEventListener('wheel', throttledWheelHandler, { passive: true });
}