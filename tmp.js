// ——— Dark Mode ———
        let dark = false;
        function toggleDark() {
            dark = !dark;
            document.documentElement.classList.toggle('dark', dark);
            document.getElementById('moon-icon').classList.toggle('hidden', dark);
            document.getElementById('sun-icon').classList.toggle('hidden', !dark);
        }

        // ——— Mobile menu ———
        let mobileOpen = false;
        function toggleMobile() {
            mobileOpen = !mobileOpen;
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('open', mobileOpen);
        }

        // ——— Language toggle ———
        const translations = {
            fr: {
                title: 'FAGARUU — Votre santé reproductive, à portée de main',
                metaDescription: 'FAGARUU accompagne les jeunes et les adultes en Afrique avec des informations fiables, des conseils personnalisés et un accès simplifié aux services de santé reproductive.',
                nav: { home: 'Accueil', features: 'Fonctionnalités', how: 'Comment ça marche', resources: 'Ressources', faq: 'FAQ', contact: 'Contact', darkModeTitle: 'Mode sombre', switch: 'EN' },
                hero: { badge: 'Disponible très prochainement en Afrique', titleLine1: 'Votre santé', titleLine2: 'reproductive,', titleLine3: 'à portée de', titleLine4: 'main.', subtitle: 'FAGARUU vous accompagne avec des informations fiables, des conseils personnalisés, un suivi intelligent et un accès simplifié aux services de santé reproductive.', ctaPrimary: 'Nous contacter', ctaSecondary: 'Voir les fonctionnalités', socialProof: 'futurs utilisateurs inscrits', phoneGreeting: 'Bonjour, Amina 👋', dashboard: 'Votre tableau de bord', nextAppointment: 'Prochain RDV', cycleDay: 'Cycle J.', reminders: 'Rappels', calendarTitle: 'CALENDRIER DE CYCLE', tipTitle: 'CONSEIL DU JOUR', tipText: 'Rester hydratée améliore votre bien-être general lors de cette phase de votre cycle.', chatTitle: 'Assistant FAGARUU', chatPrompt: 'Comment puis-je vous aider aujourd\'hui ?', navHome: 'Accueil', navTracking: 'Suivi', navAssistant: 'Assistant', navAppointment: 'RDV' },
                features: { badge: 'Plateforme complète', titleLine1: 'Tout ce dont vous avez besoin', titleLine2: 'pour votre santé reproductive', subtitle: 'Six outils essentiels, pensés pour l\'Afrique, conçus pour vous.', learnMore: 'En savoir plus' },
                how: { badge: 'Simple et rapide', titleLine1: 'Commencer avec FAGARUU', titleLine2: 'en 3 étapes', steps: [{ title: 'Créer un compte', desc: 'Inscrivez-vous gratuitement en moins de 2 minutes. Aucune carte bancaire requise.' }, { title: 'Compléter votre profil santé', desc: 'Renseignez vos informations de santé pour un accompagnement vraiment personnalisé.' }, { title: 'Recevoir votre accompagnement', desc: 'Profitez de conseils, rappels et ressources adaptés à votre profil et vos besoins.' }], cta: 'Nous contacter' },
                why: { badge: 'Notre différence', titleLine1: 'Pourquoi choisir', titleLine2: 'FAGARUU ?', title: 'La confiance avant tout', desc: 'FAGARUU est développé en collaboration avec des experts médicaux pour garantir des informations vérifiées, objectives et bienveillantes. Votre santé mérite ce qu\'il y a de plus sûr.', items: [{ title: 'Éducation fiable', desc: 'Des informations basées sur des sources médicales reconnues et vérifiées par des professionnels de santé.' }, { title: 'Confidentialité garantie', desc: 'Vos données de santé sont protégées par un chiffrement de bout en bout. Personne d\'autre ne peut y accéder.' }, { title: 'Accessibilité', desc: 'Disponible partout, à tout moment, même avec une connexion limitée. Conçu pour l\'Afrique.' }, { title: 'Accompagnement personnalisé', desc: 'Des recommandations adaptées à chaque utilisateur selon son profil, son âge et ses besoins spécifiques.' }] },
                faq: { badge: 'Questions fréquentes', title: 'Tout ce que vous voulez savoir', items: [{ question: 'Qu\'est-ce que FAGARUU ?', answer: 'FAGARUU est une plateforme numérique de santé reproductive destinée à informer, accompagner et orienter les jeunes et les adultes en Afrique. Elle offre un suivi personnalisé, des conseils médicaux validés et un accès simplifié aux professionnels de santé.' }, { question: 'Mes données sont-elles sécurisées ?', answer: 'Oui, absolument. Toutes les données personnelles et médicales sont chiffrées de bout en bout et traitées dans le strict respect de la confidentialité. Personne, y compris nos équipes, ne peut accéder à vos informations de santé sans votre consentement explicite.' }, { question: 'L\'application est-elle gratuite ?', answer: 'La première version de FAGARUU sera entièrement gratuite avec toutes les fonctionnalités essentielles incluses : suivi de cycle, conseils santé, assistant intelligent et alertes. Des options premium pourront être proposées ultérieurement.' }, { question: 'Comment contacter un professionnel de santé ?', answer: 'Depuis l\'application, accédez au module de prise de rendez-vous pour trouver et contacter des professionnels de santé référencés près de chez vous. Vous pouvez filtrer par spécialité, disponibilité et localisation.' }, { question: 'Dans quels pays FAGARUU sera-t-il disponible ?', answer: 'FAGARUU lancera d\'abord en Afrique de l\'Ouest francophone (Sénégal, Côte d\'Ivoire, Mali, Burkina Faso) avant de s\'étendre progressivement à l\'ensemble du continent africain. Restez à l\'écoute !' }] },
                contact: { badge: 'Nous contacter', titleLine1: 'Contactez l\'équipe', titleLine2: 'FAGARUU', subtitle: 'Une question ? Une suggestion ? Écrivez-nous, nous répondrons rapidement.', lastName: 'Nom *', firstName: 'Prénom *', phone: 'Téléphone *', message: 'Message *', lastNamePlaceholder: 'Diallo', firstNamePlaceholder: 'Amina', phonePlaceholder: '+221 XX XXX XX XX', messagePlaceholder: 'Votre message...', error: 'Veuillez remplir tous les champs requis.', send: 'Envoyer le message', success: '✓ Message envoyé avec succès !' },
                footer: { description: 'FAGARUU est une plateforme innovante dédiée à la santé reproductive, à l\'éducation et à l\'accompagnement des jeunes et des adultes en Afrique.', product: 'Produit', company: 'Entreprise', legal: 'Légal', about: 'À propos', partners: 'Partenaires', terms: 'Conditions d\'utilisation', privacy: 'Politique de confidentialité', copyright: '© 2026 FAGARUU. Tous droits réservés.', madeWith: 'Fait avec ❤️ pour l\'Afrique' }
            },
            en: {
                title: 'FAGARUU — Your reproductive health, at your fingertips',
                metaDescription: 'FAGARUU supports young people and adults in Africa with reliable information, personalized advice, and simplified access to reproductive health services.',
                nav: { home: 'Home', features: 'Features', how: 'How it works', resources: 'Resources', faq: 'FAQ', contact: 'Contact', darkModeTitle: 'Dark mode', switch: 'FR' },
                hero: { badge: 'Coming soon in Africa', titleLine1: 'Your health', titleLine2: 'reproductive,', titleLine3: 'within reach', titleLine4: 'of you.', subtitle: 'FAGARUU supports you with reliable information, personalized advice, smart follow-up, and simplified access to reproductive health services.', ctaPrimary: 'Contact us', ctaSecondary: 'See features', socialProof: 'future users registered', phoneGreeting: 'Hello, Amina 👋', dashboard: 'Your dashboard', nextAppointment: 'Next appointment', cycleDay: 'Cycle day', reminders: 'Reminders', calendarTitle: 'CYCLE CALENDAR', tipTitle: 'TIP OF THE DAY', tipText: 'Staying hydrated improves your well-being during this phase of your cycle.', chatTitle: 'FAGARUU Assistant', chatPrompt: 'How can I help you today?', navHome: 'Home', navTracking: 'Tracking', navAssistant: 'Assistant', navAppointment: 'Appt' },
                features: { badge: 'Complete platform', titleLine1: 'Everything you need', titleLine2: 'for your reproductive health', subtitle: 'Six essential tools, built for Africa, designed for you.', learnMore: 'Learn more' },
                how: { badge: 'Simple and fast', titleLine1: 'Get started with FAGARUU', titleLine2: 'in 3 steps', steps: [{ title: 'Create an account', desc: 'Sign up for free in under 2 minutes. No credit card required.' }, { title: 'Complete your health profile', desc: 'Fill in your health information for truly personalized support.' }, { title: 'Receive your support', desc: 'Enjoy advice, reminders, and resources tailored to your profile and needs.' }], cta: 'Contact us' },
                why: { badge: 'Our difference', titleLine1: 'Why choose', titleLine2: 'FAGARUU?', title: 'Trust first', desc: 'FAGARUU is developed in collaboration with medical experts to provide verified, objective, and compassionate information. Your health deserves the safest support.', items: [{ title: 'Reliable education', desc: 'Information based on recognized medical sources and verified by healthcare professionals.' }, { title: 'Privacy guaranteed', desc: 'Your health data is protected by end-to-end encryption. No one else can access it.' }, { title: 'Accessibility', desc: 'Available everywhere, at any time, even with a limited connection. Designed for Africa.' }, { title: 'Personalized support', desc: 'Recommendations tailored to each user according to their profile, age, and specific needs.' }] },
                faq: { badge: 'Frequently asked questions', title: 'Everything you want to know', items: [{ question: 'What is FAGARUU?', answer: 'FAGARUU is a digital reproductive health platform designed to inform, support, and guide young people and adults in Africa. It offers personalized follow-up, validated medical advice, and simplified access to healthcare professionals.' }, { question: 'Are my data secure?', answer: 'Yes, absolutely. All personal and medical data is end-to-end encrypted and handled with strict respect for confidentiality. No one, including our teams, can access your health information without your explicit consent.' }, { question: 'Is the app free?', answer: 'The first version of FAGARUU will be completely free, with all essential features included: cycle tracking, health advice, intelligent assistant, and alerts. Premium options may be offered later.' }, { question: 'How can I contact a healthcare professional?', answer: 'From the app, access the appointment module to find and contact referenced healthcare professionals near you. You can filter by specialty, availability, and location.' }, { question: 'In which countries will FAGARUU be available?', answer: 'FAGARUU will first launch in Francophone West Africa (Senegal, Ivory Coast, Mali, Burkina Faso) before gradually expanding across the African continent. Stay tuned!' }] },
                contact: { badge: 'Contact us', titleLine1: 'Meet the team', titleLine2: 'FAGARUU', subtitle: 'A question? A suggestion? Write to us and we will respond quickly.', lastName: 'Last name *', firstName: 'First name *', phone: 'Phone *', message: 'Message *', lastNamePlaceholder: 'Diallo', firstNamePlaceholder: 'Amina', phonePlaceholder: '+221 XX XXX XX XX', messagePlaceholder: 'Your message...', error: 'Please fill in all required fields.', send: 'Send message', success: '✓ Message sent successfully!' },
                footer: { description: 'FAGARUU is an innovative platform dedicated to reproductive health, education, and support for young people and adults in Africa.', product: 'Product', company: 'Company', legal: 'Legal', about: 'About', partners: 'Partners', terms: 'Terms of use', privacy: 'Privacy policy', copyright: '© 2026 FAGARUU. All rights reserved.', madeWith: 'Made with ❤️ for Africa' }
            }
        };

        function getTranslationValue(obj, key) {
            return key.split('.').reduce((acc, part) => acc?.[part], obj);
        }

        function applyTranslations(lang) {
            currentLanguage = lang;
            const t = translations[lang];
            document.documentElement.lang = lang;
            document.title = t.title;
            const meta = document.querySelector('meta[name="description"]');
            if (meta) meta.setAttribute('content', t.metaDescription);

            document.querySelectorAll('[data-i18n]').forEach((el) => {
                const value = getTranslationValue(t, el.getAttribute('data-i18n'));
                if (value !== undefined) el.textContent = value;
            });

            document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
                const value = getTranslationValue(t, el.getAttribute('data-i18n-placeholder'));
                if (value !== undefined) el.placeholder = value;
            });

            const switchBtn = document.getElementById('language-switch');
            if (switchBtn) switchBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
            if (switchBtn) switchBtn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
            const darkButton = document.querySelector('[title="Mode sombre"], [title="Dark mode"]');
            if (darkButton) darkButton.setAttribute('title', lang === 'fr' ? 'Mode sombre' : 'Dark mode');

            if (!document.getElementById('feature-modal').classList.contains('hidden')) {
                openFeatureModal(currentFeatureIndex);
            }
        }

        function toggleLanguage() {
            applyTranslations(currentLanguage === 'fr' ? 'en' : 'fr');
        }

        let currentLanguage = 'fr';

        // ——— Contact form ———
        function submitContact() {
            const nom = document.getElementById('c-nom').value.trim();
            const prenom = document.getElementById('c-prenom').value.trim();
            const tel = document.getElementById('c-tel').value.trim();
            const message = document.getElementById('c-message').value.trim();
            const err = document.getElementById('c-error');
            if (!nom || !prenom || !tel || !message) {
                err.classList.remove('hidden');
                return;
            }
            err.classList.add('hidden');
            document.querySelector('#contact .space-y-4').classList.add('hidden');
            document.getElementById('c-success').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('c-success').classList.add('hidden');
                document.querySelector('#contact .space-y-4').classList.remove('hidden');
                document.getElementById('c-nom').value = '';
                document.getElementById('c-prenom').value = '';
                document.getElementById('c-tel').value = '';
                document.getElementById('c-message').value = '';
            }, 3000);
        }

        // --- Feature Modal ---
        const featureContent = {
            fr: [
                { title: 'Suivi personnalisé', desc: 'Suivez votre cycle, vos rendez-vous médicaux et vos objectifs santé depuis une seule interface claire.', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="3" stroke="#00A86B" stroke-width="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="#00A86B" stroke-width="2" stroke-linecap="round"/><circle cx="8" cy="15" r="1.5" fill="#00A86B"/><circle cx="12" cy="15" r="1.5" fill="#00A86B" opacity="0.5"/><circle cx="16" cy="15" r="1.5" fill="#00A86B" opacity="0.3"/></svg>`, img: 'assets/feat_suivi.png', details: ['Calendrier menstruel prédictif', 'Suivi des symptômes quotidiens', 'Historique de santé détaillé'] },
                { title: 'Conseils fiables', desc: 'Accédez à des contenus validés par des professionnels de santé, adaptés au contexte africain.', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 12h6M9 16h4M17 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" stroke="#00A86B" stroke-width="2" stroke-linecap="round"/><path d="M9 8h6" stroke="#00A86B" stroke-width="2" stroke-linecap="round"/></svg>`, img: 'assets/feat_conseil.png', details: ['Articles rédigés par des médecins', 'Vidéos éducatives courtes', 'Conseils nutritionnels et bien-être'] },
                { title: 'Assistant intelligent', desc: 'Posez vos questions et obtenez des réponses rapides, précises et confidentielles 24h/24.', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#00A86B"/></svg>`, img: 'assets/feat_assistant.png', details: ['Réponses instantanées 24/7', 'Analyse des symptômes', 'Orientation vers un spécialiste si nécessaire'] },
                { title: 'Prise de rendez-vous', desc: 'Trouvez et contactez facilement des professionnels de santé près de chez vous en quelques clics.', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9A16 16 0 0 0 15.1 16.1l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02v-.47z" stroke="#00A86B" stroke-width="2" stroke-linecap="round"/></svg>`, img: 'assets/feat_rdv.png', details: ['Géolocalisation des centres de santé', 'Téléconsultation vidéo', 'Gestion des disponibilités'] },
                { title: 'Alertes et rappels', desc: 'Ne manquez plus aucun rendez-vous ni traitement grâce à des notifications intelligentes et personnalisables.', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#00A86B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#00A86B" stroke-width="2" stroke-linecap="round"/></svg>`, img: 'assets/feat_alertes.png', details: ['Rappels de prise de pilule', 'Notifications de rendez-vous', 'Alertes de renouvellement d\'ordonnance'] },
                { title: 'Confidentialité totale', desc: 'Vos données de santé restent privées, protégées par un chiffrement de bout en bout.', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="#00A86B" stroke-width="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#00A86B" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16" r="1.5" fill="#00A86B"/></svg>`, img: 'assets/feat_confidentialite.png', details: ['Chiffrement de bout en bout', 'Accès par Face ID / Empreinte', 'Aucune donnée partagée sans consentement'] }
            ],
            en: [
                { title: 'Personalized tracking', desc: 'Track your cycle, medical appointments, and health goals from one clear interface.', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="3" stroke="#00A86B" stroke-width="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="#00A86B" stroke-width="2" stroke-linecap="round"/><circle cx="8" cy="15" r="1.5" fill="#00A86B"/><circle cx="12" cy="15" r="1.5" fill="#00A86B" opacity="0.5"/><circle cx="16" cy="15" r="1.5" fill="#00A86B" opacity="0.3"/></svg>`, img: 'assets/feat_suivi.png', details: ['Predictive menstrual calendar', 'Daily symptom tracking', 'Detailed health history'] },
                { title: 'Reliable advice', desc: 'Access content validated by healthcare professionals, adapted to the African context.', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 12h6M9 16h4M17 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" stroke="#00A86B" stroke-width="2" stroke-linecap="round"/><path d="M9 8h6" stroke="#00A86B" stroke-width="2" stroke-linecap="round"/></svg>`, img: 'assets/feat_conseil.png', details: ['Articles written by doctors', 'Short educational videos', 'Nutrition and wellness advice'] },
                { title: 'Smart assistant', desc: 'Ask your questions and get quick, precise, and confidential answers 24/7.', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#00A86B"/></svg>`, img: 'assets/feat_assistant.png', details: ['Instant answers 24/7', 'Symptom analysis', 'Referral to a specialist if needed'] },
                { title: 'Appointment booking', desc: 'Easily find and contact healthcare professionals near you in just a few clicks.', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9A16 16 0 0 0 15.1 16.1l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02v-.47z" stroke="#00A86B" stroke-width="2" stroke-linecap="round"/></svg>`, img: 'assets/feat_rdv.png', details: ['Location of health centers', 'Video consultation', 'Availability management'] },
                { title: 'Alerts and reminders', desc: 'Never miss an appointment or treatment again thanks to smart and customizable notifications.', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#00A86B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#00A86B" stroke-width="2" stroke-linecap="round"/></svg>`, img: 'assets/feat_alertes.png', details: ['Pill reminder alerts', 'Appointment notifications', 'Prescription renewal alerts'] },
                { title: 'Total privacy', desc: 'Your health data stays private, protected by end-to-end encryption.', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="#00A86B" stroke-width="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#00A86B" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16" r="1.5" fill="#00A86B"/></svg>`, img: 'assets/feat_confidentialite.png', details: ['End-to-end encryption', 'Face ID / fingerprint access', 'No data shared without consent'] }
            ]
        };

        let currentFeatureIndex = 0;

        function openFeatureModal(index) {
            currentFeatureIndex = index;
            const feat = featureContent[currentLanguage][index];
            document.getElementById('feature-modal-icon').innerHTML = feat.icon;
            document.getElementById('feature-modal-title').textContent = feat.title;
            document.getElementById('feature-modal-desc').textContent = feat.desc;
            document.getElementById('feature-modal-img').src = feat.img;
            let detailsHtml = '';
            feat.details.forEach(detail => {
                detailsHtml += `<div class="flex items-center gap-3"><div class="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A86B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div><p class="text-ink/80 text-sm font-medium">${detail}</p></div>`;
            });
            document.getElementById('feature-modal-details').innerHTML = detailsHtml;

            const modal = document.getElementById('feature-modal');
            const card = document.getElementById('feature-modal-card');
            modal.classList.remove('hidden');
            setTimeout(() => {
                card.style.transform = 'scale(1)';
                card.style.opacity = '1';
            }, 10);
        }

        function closeFeatureModal() {
            const modal = document.getElementById('feature-modal');
            const card = document.getElementById('feature-modal-card');
            card.style.transform = 'scale(0.95)';
            card.style.opacity = '0';
            setTimeout(() => modal.classList.add('hidden'), 200);
        }

        applyTranslations(currentLanguage);

        // ——— Scroll reveal ———
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    revealObserver.unobserve(e.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));

        // ——— Counter animation ———
        function animateCounter(el, target, suffix = '') {
            const duration = 1800;
            const start = performance.now();
            const update = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);
                const formatted = current >= 1000 ? (current / 1000).toFixed(current >= 10000 ? 0 : 1) + 'k' : current;
                el.textContent = formatted + suffix;
                if (progress < 1) requestAnimationFrame(update);
                else el.textContent = (target >= 1000 ? (target / 1000) + 'k' : target) + suffix;
            };
            requestAnimationFrame(update);
        }

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    const el = e.target;
                    const target = parseInt(el.dataset.target);
                    const suffix = el.dataset.suffix || '';
                    animateCounter(el, target, suffix);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

        // ——— FAQ ———
        function toggleFaq(btn) {
            const item = btn.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');
            const isOpen = answer.classList.contains('open');
            document.querySelectorAll('.faq-answer.open').forEach(a => a.classList.remove('open'));
            document.querySelectorAll('.faq-icon.open').forEach(i => i.classList.remove('open'));
            if (!isOpen) {
                answer.classList.add('open');
                icon.classList.add('open');
            }
        }

        // ——— Star Rating ———
        let currentRating = 0;
        function setRating(val) {
            currentRating = val;
            document.querySelectorAll('.star-btn').forEach((btn, i) => {
                btn.style.color = i < val ? '#F59E0B' : '';
                btn.classList.toggle('text-yellow-400', i < val);
                btn.classList.toggle('text-ink/20', i >= val);
            });
        }

        // ——— Testimonial submit ———
        function submitTestimonial() {
            const prenom = document.getElementById('t-prenom').value.trim();
            const ville = document.getElementById('t-ville').value.trim();
            const message = document.getElementById('t-message').value.trim();
            if (!prenom || !message) return;
            const stars = currentRating || 5;
            const grid = document.getElementById('testimonials-grid');
            const card = document.createElement('div');
            const initial = prenom.charAt(0).toUpperCase();
            const colors = ['bg-brand-200 text-brand-700', 'bg-brand-300 text-brand-800', 'bg-brand-400 text-white', 'bg-brand-500 text-white'];
            const colorClass = colors[Math.floor(Math.random() * colors.length)];
            const starsSvg = Array(stars).fill('<svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88L2 9.27l6.91-1.01L12 2z"/></svg>').join('');
            card.className = 'bg-mist border border-brand-100 rounded-3xl p-6 animate-pulse';
            card.innerHTML = `
      <div class="flex gap-0.5 mb-4">${starsSvg}</div>
      <p class="text-ink/70 text-sm leading-relaxed mb-5">"${message}"</p>
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-full ${colorClass} flex items-center justify-center font-bold text-sm">${initial}</div>
        <div><p class="font-semibold text-sm text-ink">${prenom}</p><p class="text-xs text-ink/50">${ville || 'Afrique'}</p></div>
      </div>`;
            setTimeout(() => card.classList.remove('animate-pulse'), 600);
            grid.appendChild(card);
            document.getElementById('t-prenom').value = '';
            document.getElementById('t-ville').value = '';
            document.getElementById('t-message').value = '';
            setRating(0);
            const success = document.getElementById('t-success');
            success.classList.remove('hidden');
            setTimeout(() => success.classList.add('hidden'), 3000);
        }
