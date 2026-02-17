import { Monitor, Code, Database, Globe, Briefcase, GraduationCap, Layout, Cpu, Server, Terminal, Brain, Cloud } from 'lucide-react';

// Import assets locally
import creditScoringImg from './assets/Projet_credit_scoring.png';
import syndicManagerImg from './assets/Pojet_SyndicManager.png';
import optimizationImg from './assets/Pojet_optimisation.png';
import agreenImg from './assets/Projet_Agreen.png';
import portfolioImg from './assets/Projet_Portfolio.png';
import metaBotImg from './assets/Projet_MetaBot.png';

export const personalData = {
    name: "Aubin Hérault",
    title: "Ingénieur IA & Data",
    bio: "Étudiant en 4ème année d'école d'ingénieur à l'ESAIP (Angers), spécialisé en Intelligence Artificielle et Réseaux. Passionné par la Data Science, l'automatisation et le développement Full Stack. Actuellement à la recherche d'une alternance pour 2025-2026.",
    location: "Angers, France",
    email: "aubinherault64@gmail.com",
    phone: "+33 7 67 86 04 03",
    status: "Open to Work / Erasmus Chile (Mars-Juillet 2026)",
    github: "https://github.com/Aub04",
    linkedin: "https://www.linkedin.com/in/aubin-hérault-904055258/"
};

export const skills = [
    {
        icon: Brain,
        title: "Intelligence Artificielle & Data",
        items: ["Machine Learning (Scikit-Learn, XGBoost)", "Deep Learning (PyTorch, TensorFlow)", "NLP (Transformers, Hugging Face)", "Computer Vision", "Data Analysis (Pandas, NumPy, Matplotlib)", "Optimisation Multi-Critère"]
    },
    {
        icon: Code,
        title: "Développement Full Stack",
        items: ["React (Vite, Hooks, Tailwind)", "Java Spring Boot", "Python (FastAPI, Flask)", ".NET / C# (Orchard Core)", "HTML5 / CSS3 (Sass, modules)", "Architecture MVC & Microservices"]
    },
    {
        icon: Database,
        title: "Base de Données & Cloud",
        items: ["SQL (PostgreSQL, MySQL)", "Docker & Docker Compose", "CI/CD (GitHub Actions)", "Déploiement (VPS, Nginx)", "Cloud Basics (AWS)"]
    },
    {
        icon: Globe,
        title: "Soft Skills & Langues",
        items: ["Français (Natif)", "Anglais (B2 - TOEIC 850)", "Espagnol (B1 - Erasmus Chili)", "Gestion de Projet Agile/Scrum", "Travail en équipe & Autonomie", "Esprit critique & Analyse"]
    },
];

export const experiences = [
    {
        role: "Développeur Full Stack (Stage)",
        company: "Projet Entrepreneurial - Belgique",
        location: "Belgique (Télétravail/Présentiel)",
        period: "2 Mois (2024)",
        description: "Création autonome d'un ERP complet pour la gestion de syndics bénévoles (SyndicManager). Projet à visée commerciale.",
        details: [
            "Développement Full Stack : Backend Java Spring Boot, Frontend React (Vite).",
            "Conception et administration de la base de données PostgreSQL.",
            "Sécurisation de l'application (Spring Security, JWT) et mise en place des paiements/abonnements.",
            "Déploiement complet sur serveur VPS avec Docker et configuration Nginx."
        ],
        tags: ["Java Spring", "React", "PostgreSQL", "Docker", "Autonomie"]
    },
    {
        role: "Stage Data & Automatisation",
        company: "BoxLoader",
        location: "La Roche-sur-Yon",
        period: "Juin 2025 - Juillet 2025",
        description: "Optimisation de processus industriels et administratifs par l'analyse de données et l'automatisation.",
        details: [
            "Développement de scripts Python (ETL) pour l'automatisation de tâches récurrentes via CRON.",
            "Création de bots Telegram (n8n) pour le suivi de production en temps réel.",
            "Nettoyage et structuration de données pour dashboarding."
        ],
        tags: ["Python", "n8n", "SQL", "Automatisation"]
    },
    {
        role: "Ouvrier Agricole (Saisonnier)",
        company: "EARL Véché",
        location: "Argenton-l’Église",
        period: "Étés 2019-2024",
        description: "Expérience formatrice exigeant endurance, responsabilité et polyvalence.",
        details: [
            "Conduite de machines agricoles et maintenance de premier niveau.",
            "Travail en autonomie et gestion des priorités en périodes de forte activité."
        ],
        tags: ["Autonomie", "Rigueur", "Terrain"]
    },
    {
        role: "Stage Assistant",
        company: "Crédit Mutuel",
        location: "Nueil-les-Aubiers",
        period: "Mars 2023",
        description: "Découverte du monde bancaire et de la relation client.",
        details: [
            "Accueil client et assistance aux opérations courantes.",
            "Réalisation d'une enquête RSE."
        ],
        tags: ["Relation Client", "Banque", "RSE"]
    }
];

export const education = [
    {
        school: "ESAIP - École d'Ingénieurs",
        degree: "Ingénieur Informatique & Réseaux, Majeure IA",
        period: "2022 - 2027 (En cours)",
        description: "Formation généraliste avec spécialisation forte en Data Science, Big Data et Intelligence Artificielle. Projets concrets et hackathons."
    },
    {
        school: "Óbuda University (Budapest)",
        degree: "Semestre Erasmus - Computer Engineering",
        period: "Jan 2025 - Juin 2025",
        description: "Semestre international axé sur le Deep Learning, Computer Vision et le Management de projet."
    },
    {
        school: "Universidad de Santiago (Chili)",
        degree: "Semestre Erasmus (Futur)",
        period: "Mars 2026 - Juillet 2026",
        description: "Immersion linguistique et culturelle. Cours d'ingénierie en espagnol."
    }
];

export const projects = [
    {
        title: "Credit Scoring Pipeline",
        description: "Pipeline complet d'analyse de données pour la prédiction de défaut de crédit.",
        details: "Projet d'analyse approfondie (EDA) sur un dataset complexe (milliers de colonnes). Création de métriques métier sur mesure, nettoyage de données, feature engineering et modélisation pour détecter la fraude et le risque de non-remboursement.",
        tech: ["Python", "Pandas", "Scikit-Learn", "EDA", "Feature Engineering"],
        link: "https://credit-scoring-analysis-pipeline.streamlit.app/",
        github: "https://github.com/Aub04/credit-scoring-analysis-pipeline",
        type: "Data Science",
        image: creditScoringImg
    },
    {
        title: "SyndicManager (ERP)",
        description: "Application Full Stack de gestion pour syndics bénévoles (Projet Commercial).",
        details: "Développement d'un SaaS complet en autonomie totale. Backend robuste en Java Spring, Frontend réactif en React. Gestion des utilisateurs, comptabilité, gestion des lots. Déploiement sécurisé avec Docker et Nginx.",
        tech: ["Java Spring Boot", "React", "PostgreSQL", "Docker", "Nginx", "Sécurité"],
        link: "https://72.60.88.225/",
        github: "https://github.com/Aub04/SyndicManager", // Private repo note in display
        type: "Full Stack",
        private: true,
        image: syndicManagerImg
    },
    {
        title: "Portfolio Optimization",
        description: "Optimisation de portefeuille boursier multi-critères.",
        details: "Projet académique de recherche opérationnelle. Implémentation d'algorithmes d'optimisation pour maximiser le rendement tout en minimisant le risque selon plusieurs critères financiers.",
        tech: ["Python", "Optimisation", "Finance", "Mathématiques"],
        link: "https://portfolio-optimization-multi-criteria.streamlit.app/",
        github: "https://github.com/Gael926/portfolio-optimization-multi-criteria",
        type: "Data Finance",
        image: optimizationImg
    },
    {
        title: "Hackathon SIVAL Agreen",
        description: "Modèle de prédiction de rendement de tomates (Machine Learning).",
        details: "Outil de prédiction de rendement à S+2 et S+4 semaines combiné à un modèle physiologique. Développé en 48h lors d'un hackathon. Interface Streamlit pour la visualisation.",
        tech: ["Machine Learning", "Streamlit", "Python", "Agritech"],
        link: "https://hackaton-sival-agreen-ctilf.streamlit.app/",
        github: "https://github.com/Gael926/hackaton-sival-agreen-ctifl",
        type: "Machine Learning",
        image: agreenImg
    },
    {
        title: "Design4Green (Hackathon)",
        description: "Outil d'éco-conception pour le résumé de texte par IA (48h Non-stop).",
        details: "Projet réalisé en équipe de 3 lors du hackathon Design4Green. Fine-tuning d'un petit modèle de langage (SLM) pour effectuer des résumés de texte tout en minimisant l'empreinte carbone. Optimisation de l'inférence.",
        tech: ["Python", "NLP", "Green IT", "Fine-tuning", "Hugging Face"],
        link: "#",
        github: "https://github.com/LaGardeuh/Design4GreenG7",
        type: "IA & Green IT"
    },
    {
        title: "DL Course Predictor",
        description: "Modèle de Deep Learning prédictif multi-sorties.",
        details: "Création d'une architecture de réseau de neurones complexe capable de prédire simultanément la complétion d'un cours (classification) et d'estimer les notes et le temps passé (régression multi-sorties).",
        tech: ["Deep Learning", "PyTorch/TensorFlow", "Classification", "Régression"],
        link: "#",
        github: "https://github.com/Gael926/dl-course-completion-prediction",
        type: "Deep Learning"
    },
    {
        title: "Portfolio V2",
        description: "Mon portfolio personnel moderne et réactif.",
        details: "Développement de ce site vitrine pour mettre en avant mes compétences. Utilisation de React et Tailwind pour un design 'Glassmorphism' soigné et des animations fluides.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        link: "#",
        github: "https://github.com/Aub04/Portfolio",
        type: "Frontend",
        image: portfolioImg
    },
    {
        title: "SmartFarm Orchard",
        description: "Site vitrine et e-commerce pour exploitation agricole (Projet .NET).",
        details: "Projet Erasmus réalisé avec le CMS Orchard Core (.NET). Objectif : créer une présence en ligne pour la ferme familiale, avec présentation des produits et module de vente directe.",
        tech: [".NET", "C#", "Orchard Core", "CMS"],
        link: "#",
        github: "https://github.com/Aub04/SmartFarm.OrchardSite",
        type: "Web .NET"
    },
    {
        title: "Meta-Bot & n8n",
        description: "Automatisation de coaching via Telegram.",
        details: "V1 en Python pur, V2 migrée sur n8n pour plus de flexibilité. Envoi programmé et personnalisé de messages de coaching et de suivi pour un client professionnel.",
        tech: ["Python", "n8n", "Telegram API", "Automatisation", "Low-Code"],
        link: "#",
        github: "https://github.com/Aub04/meta-bot",
        type: "Automation",
        image: metaBotImg
    }
];
