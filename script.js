// Ajouter des interactions JavaScript si nécessaire
document.addEventListener('DOMContentLoaded', function () {
    // ==================== Navigation Mobile ====================
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(mobileMenuToggle);

    const nav = document.querySelector('nav ul');
    
    mobileMenuToggle.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        this.classList.toggle('active');
    });

    // ==================== Dropdown Menus (Desktop/Mobile) ====================
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) { // Mobile
                e.preventDefault();
                this.classList.toggle('active');
                const content = this.querySelector('.dropdown-content');
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            }
        });

        dropdown.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) { // Desktop
                this.querySelector('.dropdown-content').style.display = 'block';
            }
        });

        dropdown.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) { // Desktop
                this.querySelector('.dropdown-content').style.display = 'none';
            }
        });
    });

    // ==================== Formulaire WhatsApp ====================
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !message) {
                alert('Veuillez remplir tous les champs obligatoires');
                return;
            }

            const phone = '22961616161';
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(
                `Nom: ${name}\nMessage: ${message}`
            )}`;
            
            window.open(url, '_blank');
        });
    }

    // ==================== Barre de Recherche ====================
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                // Logique de recherche existante
                const query = this.value.toLowerCase();
                filterContent(query);
            }, 300);
        });
    }

    // ==================== Retour en Haut ====================
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==================== Galerie d'Images ====================
    const galleryImages = document.querySelectorAll('.message-photo img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <button class="close-btn"><i class="fas fa-times"></i></button>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            
            lightbox.querySelector('.close-btn').addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });

    // ==================== Copie d'Adresse ====================
    const contactInfos = document.querySelectorAll('.footer-section p');
    contactInfos.forEach(info => {
        info.addEventListener('click', function() {
            const text = this.innerText.replace(/^[^\d]+/, '');
            navigator.clipboard.writeText(text).then(() => {
                const alert = document.createElement('div');
                alert.className = 'copy-alert';
                alert.textContent = 'Copié dans le presse-papier !';
                document.body.appendChild(alert);
                
                setTimeout(() => alert.remove(), 2000);
            });
        });
    });

    // ==================== Animation au Défilement ====================
    const animateOnScroll = () => {
        document.querySelectorAll('.animate').forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight * 0.8) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});

// ==================== Fonctions Utilitaires ====================
function filterContent(query) {
    // Votre logique de filtrage existante
    console.log('Recherche:', query);
}
// Par exemple, pour un menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            this.querySelector('.dropdown-content').classList.toggle('active');
        });
    });
});


// JavaScript pour la section L'Administrateur
document.addEventListener('DOMContentLoaded', function () {
    const toggleBioButton = document.getElementById('toggleBio');
    const adminBio = document.getElementById('adminBio');
    const fullBio = "Jean Dupont est le fondateur de Pierre Ministries. Passionné par la spiritualité et l'enseignement, il consacre sa vie à partager des messages inspirants et à guider les autres vers une vie épanouissante. Avec plus de 10 ans d'expérience, il a touché des milliers de vies à travers ses enseignements et ses conférences.";
    const shortBio = "Jean Dupont est le fondateur de Pierre Ministries. Passionné par la spiritualité et l'enseignement, il consacre sa vie à partager des messages inspirants et à guider les autres vers une vie épanouissante.";

    // Initialiser la biographie courte
    adminBio.textContent = shortBio;

    // Gérer le clic sur le bouton
    toggleBioButton.addEventListener('click', function () {
        if (adminBio.textContent.length < fullBio.length) {
            adminBio.textContent = fullBio;
            toggleBioButton.textContent = "Afficher moins";
        } else {
            adminBio.textContent = shortBio;
            toggleBioButton.textContent = "Afficher plus";
        }
    });
});


// JavaScript pour la section Contact
document.addEventListener('DOMContentLoaded', function () {
    const whatsappForm = document.getElementById('whatsappForm');

    whatsappForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêcher la soumission du formulaire

        // Récupérer les valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Formater le message pour WhatsApp
        const whatsappMessage = `Nom : ${name}%0AEmail : ${email}%0AMessage : ${message}`;

        // Numéro de téléphone (remplacez par votre numéro de téléphone avec l'indicatif pays)
        const phoneNumber = "22961616161"; // Exemple : +229 pour le Bénin

        // Rediriger vers WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
    });
});


// Bouton Retour en haut
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');

    // Afficher ou masquer le bouton
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Retour en haut lors du clic
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});