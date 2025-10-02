// COMATRA FISH MARINE - JavaScript Interactions

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVIGATION MOBILE =====
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Fermer le menu mobile quand on clique sur un lien
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Fermer le menu mobile quand on clique en dehors
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // ===== SCROLL SMOOTH ET NAVIGATION ACTIVE =====
    const navbarHeight = 80;
    
    // Fonction pour scroller vers une section
    window.scrollToSection = function(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const targetPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };
    
    // Gérer les clics sur les liens de navigation
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const sectionId = href.substring(1);
            scrollToSection(sectionId);
        });
    });
    
    // Mettre en surbrillance le lien actif selon la section visible
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + navbarHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Retirer la classe active de tous les liens
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                // Ajouter la classe active au lien correspondant
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    // Écouter le scroll pour mettre à jour la navigation active
    window.addEventListener('scroll', updateActiveNav);
    
    // ===== ANIMATIONS HOVER AVANCÉES =====
    // Animation des cartes
    const cards = document.querySelectorAll('.card, .product-card, .agency-card, .testimonial, .achievement');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
    
    // Animation des boutons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ===== SLIDER GALERIE =====
    // La galerie utilise une animation CSS infinie pour un défilement continu
    // L'animation se met en pause automatiquement au survol via CSS
    
    // ===== FORMULAIRE DE CONTACT =====
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Validation en temps réel
        const formFields = {
            name: {
                element: document.getElementById('name'),
                validator: (value) => value.trim().length >= 2,
                message: 'Le nom doit contenir au moins 2 caractères'
            },
            email: {
                element: document.getElementById('email'),
                validator: (value) => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(value);
                },
                message: 'Veuillez entrer une adresse email valide'
            },
            phone: {
                element: document.getElementById('phone'),
                validator: (value) => !value || value.trim().length >= 8,
                message: 'Le numéro de téléphone doit contenir au moins 8 caractères'
            },
            productType: {
                element: document.getElementById('productType'),
                validator: (value) => value.trim() !== '',
                message: 'Veuillez sélectionner un type de produit'
            },
            message: {
                element: document.getElementById('message'),
                validator: (value) => value.trim().length >= 10,
                message: 'Le message doit contenir au moins 10 caractères'
            }
        };
        
        // Fonction pour afficher/masquer les erreurs
        function showError(fieldName, message) {
            const errorElement = document.getElementById(`${fieldName}-error`);
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.classList.add('show');
            }
            formFields[fieldName].element.style.borderColor = '#dc3545';
        }
        
        function hideError(fieldName) {
            const errorElement = document.getElementById(`${fieldName}-error`);
            if (errorElement) {
                errorElement.classList.remove('show');
            }
            formFields[fieldName].element.style.borderColor = '';
        }
        
        // Validation en temps réel
        Object.keys(formFields).forEach(fieldName => {
            const field = formFields[fieldName];
            if (field.element) {
                field.element.addEventListener('blur', function() {
                    const value = this.value;
                    if (!field.validator(value)) {
                        showError(fieldName, field.message);
                    } else {
                        hideError(fieldName);
                    }
                });
                
                field.element.addEventListener('input', function() {
                    const value = this.value;
                    if (field.validator(value)) {
                        hideError(fieldName);
                    }
                });
            }
        });
        
        // Soumission du formulaire
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const formData = {};
            
            // Valider tous les champs
            Object.keys(formFields).forEach(fieldName => {
                const field = formFields[fieldName];
                const value = field.element.value;
                formData[fieldName] = value;
                
                if (!field.validator(value)) {
                    showError(fieldName, field.message);
                    isValid = false;
                } else {
                    hideError(fieldName);
                }
            });
            
            if (isValid) {
                submitForm(formData);
            }
        });
        
        // Fonction pour soumettre le formulaire
        async function submitForm(formData) {
            const submitButton = document.querySelector('[data-testid="button-submit-contact"]');
            const buttonText = submitButton.querySelector('.button-text');
            const buttonLoading = submitButton.querySelector('.button-loading');
            
            // Afficher l'état de chargement
            submitButton.classList.add('loading');
            submitButton.disabled = true;
            
            try {
                // Simuler l'envoi (dans un vrai projet, on ferait un appel API)
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Afficher le message de succès
                showSuccessMessage();
                
                // Réinitialiser le formulaire
                contactForm.reset();
                
                console.log('Formulaire soumis avec succès:', formData);
                
            } catch (error) {
                console.error('Erreur lors de la soumission:', error);
                alert('Une erreur s\'est produite lors de l\'envoi du formulaire. Veuillez réessayer.');
            } finally {
                // Retirer l'état de chargement
                submitButton.classList.remove('loading');
                submitButton.disabled = false;
            }
        }
        
        // Afficher le message de succès
        function showSuccessMessage() {
            // Créer le message de succès s'il n'existe pas
            let successMessage = document.querySelector('.success-message');
            if (!successMessage) {
                successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <strong>Demande envoyée avec succès!</strong><br>
                    Nous vous contacterons dans les plus brefs délais.
                `;
                contactForm.parentNode.insertBefore(successMessage, contactForm);
            }
            
            successMessage.classList.add('show');
            
            // Masquer le message après 5 secondes
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
            
            // Scroll vers le message
            successMessage.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    }
    
    // ===== ANIMATIONS AU SCROLL =====
    // Intersection Observer pour les animations d'apparition
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    const animatedElements = document.querySelectorAll(
        '.section-header, .card, .product-card, .agency-card, .testimonial, .achievement, .stat'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ===== COMPTEURS ANIMÉS =====
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number, .achievement-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/\D/g, ''));
            const suffix = counter.textContent.replace(/\d/g, '');
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + suffix;
                }
            }, 20);
        });
    }
    
    // Observer pour déclencher l'animation des compteurs
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats');
    const achievementsSection = document.querySelector('.achievements');
    
    if (statsSection) counterObserver.observe(statsSection);
    if (achievementsSection) counterObserver.observe(achievementsSection);
    
    // ===== EFFET PARALLAX LÉGER =====
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // ===== GESTION DE LA NAVBAR AU SCROLL =====
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Gérer la transparence du navbar
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Gérer l'apparition/disparition du navbar
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll vers le bas
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scroll vers le haut
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ===== GESTION DES TOOLTIPS SIMPLES =====
    const elements = document.querySelectorAll('[title]');
    elements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.setAttribute('data-tooltip', this.title);
            this.removeAttribute('title');
        });
        
        el.addEventListener('mouseleave', function() {
            this.title = this.getAttribute('data-tooltip');
            this.removeAttribute('data-tooltip');
        });
    });
    
    // ===== AMÉLIORATION DE L'ACCESSIBILITÉ =====
    // Gestion du focus clavier
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });
    
    // Escape pour fermer le menu mobile
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
    
    // ===== OPTIMISATION DES PERFORMANCES =====
    // Debounce function pour optimiser les événements scroll/resize
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Appliquer le debounce aux événements coûteux
    window.addEventListener('resize', debounce(function() {
        // Recalculer les positions si nécessaire
        updateActiveNav();
    }, 250));
    
    // ===== DETECTION DE LA CONNEXION =====
    // Afficher un message si pas de connexion (optionnel)
    if (!navigator.onLine) {
        console.log('Mode hors ligne détecté');
    }
    
    window.addEventListener('online', function() {
        console.log('Connexion rétablie');
    });
    
    window.addEventListener('offline', function() {
        console.log('Connexion perdue');
    });
    
    // ===== FAQ ACCORDÉON =====
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Fermer tous les autres accordéons
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Ouvrir celui-ci s'il n'était pas actif
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
    
    // ===== INITIALISATION FINALE =====
    console.log('COMATRA FISH MARINE - Site initialisé avec succès');
    
    // Mettre à jour la navigation active au chargement
    updateActiveNav();
    
    // Ajouter une classe pour indiquer que JS est chargé
    document.body.classList.add('js-loaded');
});

// ===== FONCTIONS UTILITAIRES GLOBALES =====

// Fonction pour formater les numéros de téléphone
function formatPhoneNumber(input) {
    const value = input.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5');
    input.value = formattedValue;
}

// Fonction pour valider les emails
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fonction pour détecter le type d'appareil
function getDeviceType() {
    const width = window.innerWidth;
    if (width <= 480) return 'mobile';
    if (width <= 768) return 'tablet';
    return 'desktop';
}

// Fonction pour smooth scroll avec offset personnalisé
function smoothScrollTo(target, offset = 80) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
        const targetPosition = element.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Export des fonctions pour les tests
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToSection: window.scrollToSection,
        isValidEmail,
        formatPhoneNumber,
        getDeviceType,
        smoothScrollTo
    };
}