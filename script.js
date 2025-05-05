// Menu Hamburger
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
});

overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Gestion des sous-menus mobiles
mobileNavLinks.forEach(link => {
    if (link.nextElementSibling && link.nextElementSibling.classList.contains('mobile-submenu')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            link.classList.toggle('active');
            link.nextElementSibling.classList.toggle('active');
            
            // Fermer les autres sous-menus ouverts
            mobileNavLinks.forEach(otherLink => {
                if (otherLink !== link && otherLink.classList.contains('active')) {
                    otherLink.classList.remove('active');
                    otherLink.nextElementSibling.classList.remove('active');
                }
            });
        });
    } else {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
});
// FIN BARRE DE NAVIGATION

 // Script pour le diaporama
 const slider = document.querySelector('.slider');
 const slides = document.querySelectorAll('.slide');
 const prevBtn = document.querySelector('.prev-btn');
 const nextBtn = document.querySelector('.next-btn');
 const indicators = document.querySelectorAll('.indicator');
 
 let currentSlide = 0;
 let slideInterval;
 const slideDuration = 5000; // 5 secondes
 
 // Fonction pour aller à un slide spécifique
 function goToSlide(n) {
     slider.style.transform = `translateX(-${n * 33.333}%)`;
     currentSlide = n;
     
     // Mettre à jour les indicateurs
     indicators.forEach((indicator, index) => {
         indicator.classList.toggle('active', index === currentSlide);
     });
     
     // Redémarrer le timer
     restartInterval();
 }
 
 // Slide suivant
 function nextSlide() {
     currentSlide = (currentSlide + 1) % slides.length;
     goToSlide(currentSlide);
 }
 
 // Slide précédent
 function prevSlide() {
     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
     goToSlide(currentSlide);
 }
 
 // Démarrer l'intervalle automatique
 function startInterval() {
     slideInterval = setInterval(nextSlide, slideDuration);
 }
 
 // Redémarrer l'intervalle
 function restartInterval() {
     clearInterval(slideInterval);
     startInterval();
 }
 
 // Événements
 nextBtn.addEventListener('click', nextSlide);
 prevBtn.addEventListener('click', prevSlide);
 
 // Navigation par indicateurs
 indicators.forEach(indicator => {
     indicator.addEventListener('click', function() {
         goToSlide(parseInt(this.getAttribute('data-slide')));
     });
 });
 
 // Démarrer le diaporama
 startInterval();
 
 // Pause au survol
 const sliderContainer = document.querySelector('.slider-container');
 sliderContainer.addEventListener('mouseenter', () => {
     clearInterval(slideInterval);
 });
 
 sliderContainer.addEventListener('mouseleave', () => {
     restartInterval();
 });

 // FIN FONCTION DIAPORAMA

 AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-quart'
});

// WHATSAPP
document.querySelector('.whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Nettoyer le numéro de téléphone
    const cleanedPhone = phone.replace(/\D/g, '');
    
    // Créer le lien WhatsApp
    const whatsappUrl = `https://wa.me/${cleanedPhone}?text=${encodeURIComponent(
        `Bonjour, je m'appelle ${name}. ${message}`
    )}`;
    
    // Ouvrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Réinitialiser le formulaire
    this.reset();
    
    // Optionnel : Message de confirmation
    alert('Vous allez être redirigé vers WhatsApp pour envoyer votre message.');
});