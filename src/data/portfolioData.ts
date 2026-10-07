export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web' | 'Mobile' | 'Java/Systèmes' | 'Architecture/UML' | 'Algorithmique';
  badgeType: 'Featured' | 'Académique' | 'Production';
  year: string;
  description: string;
  detailedPoints: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  degree: string;
  description?: string;
  current?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: 'Associatif' | 'Stage';
  bullets: string[];
  current?: boolean;
  score?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeText: string;
  description: string;
  image?: string;
  verifyUrl?: string;
  featured?: boolean;
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
}

export interface TechLogo {
  name: string;
  category: string;
}

export const personalData = {
  name: "Mouhib Fahem",
  title: "Élève Ingénieur en Génie Informatique",
  grade: "Dernière année (Cycle d'Ingénieur)",
  subtitle: "Dernière année du Cycle d'Ingénieur • Promo 2027",
  institution: "ENICarthage (École Nationale d'Ingénieurs de Carthage)",
  domain: "mouhibfahem.vercel.app",
  email: "mouhib.fahem@enicar.ucar.tn",
  phone: "+216 24 640 474",
  location: "Tunis, Tunisie",
  linkedin: "https://www.linkedin.com/in/mouhib-fahem-17a1b4342/",
  linkedinDisplay: "linkedin.com/in/mouhib-fahem",
  github: "https://github.com/mouhibfahem",
  credly: "https://www.credly.com/users/mouhib-fahem",
  availability: "Recherche un stage PFE — à partir de février 2027, 4 mois minimum, en présentiel",
  cvPath: "/CV_Mouhib_Fahem.pdf",
  status: "Option Génie Informatique — ENICarthage",
  currentFocus: "Développement Full-Stack (Next.js · React · Node.js · Prisma · PostgreSQL · Spring Boot), Cloud AWS & Réseaux CCNA",
  specializationPills: [
    "Délégué Général ENICarthage",
    "Next.js & Node.js Full-Stack",
    "Java & Spring Boot 3",
    "Prisma ORM & PostgreSQL",
    "Migration SaaS & Sage 100",
    "Réseaux CCNA Cisco",
    "AWS Cloud Foundations",
    "Docker & DevOps Workflows"
  ],
  bio: "Mouhib Fahem est élève ingénieur en dernière année de Génie Informatique à l'ENICarthage (ENICar) et Délégué Général des Étudiants de l'école. Issu d'un cycle préparatoire scientifique (MP) à la Faculté des Sciences de Monastir (FSM), il s'est spécialisé en génie logiciel moderne (Next.js, React, Node.js, Spring Boot 3, PostgreSQL, Docker, Réseaux CCNA). Fort de réalisations concrètes en entreprise — comme la migration du logiciel Sage 100 vers une plateforme SaaS en ligne lors de son stage chez Clickovate (évalué 19/20) —, il maîtrise l'ensemble de la chaîne de valeur du développement logiciel. Il est certifié CCNA (Switching, Routing & Wireless Essentials) et AWS Academy Cloud Foundations, et recherche un stage de fin d'études (PFE) à partir de février 2027.",
  highlights: [
    { label: "Formation Ingénieur", value: "Dernière année", description: "ENICarthage (Promo 2027)" },
    { label: "Dernier Stage", value: "Note 19/20", description: "Clickovate — SaaS Sage 100" },
    { label: "Certifications", value: "8 badges", description: "CCNA, AWS, Python — vérifiés Credly" },
    { label: "En production", value: "enigov.tn", description: "Plateforme EniGov déployée" },
  ]
};

export const techLogosData: TechLogo[] = [
  { name: "Next.js", category: "Full-Stack" },
  { name: "Node.js & Express", category: "Backend" },
  { name: "Prisma ORM", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Java (POO / Spring)", category: "Backend" },
  { name: "Spring Boot 3", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Oracle Database", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS Cloud", category: "Cloud" },
  { name: "CCNA Cisco", category: "Networking" },
  { name: "Git & GitHub", category: "DevOps" },
  { name: "Android (Java)", category: "Mobile" },
  { name: "Python", category: "AI / Data" },
  { name: "C / C++", category: "Systems" },
];

export const educationData: EducationItem[] = [
  {
    id: "enicarthage",
    period: "2024 – Présent",
    institution: "École Nationale d'Ingénieurs de Carthage (ENICarthage)",
    degree: "Élève Ingénieur en Génie Informatique – Dernière année",
    description: "Cursus d'excellence en ingénierie informatique : Architectures logicielles distribuées, Microservices, Cloud & DevOps, Réseaux d'entreprise (CCNA), Sécurité des SI, Bases de données avancées, Big Data, Intelligence Artificielle et Génie Logiciel.",
    current: true,
  },
  {
    id: "fsmonastir",
    period: "2022 – 2024",
    institution: "Faculté des Sciences de Monastir",
    degree: "Cycle Préparatoire aux Études d'Ingénieurs",
    description: "Formation intensive en mathématiques avancées, physique fondamentale, informatique théorique, algorithmique et sciences de l'ingénieur.",
  },
  {
    id: "bac",
    period: "Juin 2022",
    institution: "Lycée Ben Guerdane",
    degree: "Baccalauréat Mathématiques",
    description: "Obtenu avec mention. Solide socle en raisonnement logique, analyse mathématique et modélisation scientifique.",
  }
];

export const projectsData: Project[] = [
  {
    id: "sage100-web",
    title: "Plateforme SaaS Sage 100 Web",
    subtitle: "Migration & Digitalisation de Logiciel Comptable",
    category: "Web",
    badgeType: "Featured",
    year: "2026",
    description: "Conception et développement full-stack d'une plateforme web SaaS remplaçant le logiciel desktop Sage 100 Comptabilité pour les cabinets. Réalisé lors du stage chez Clickovate et évalué 19/20.",
    detailedPoints: [
      "Backend REST sous Node.js & Express.js avec Prisma ORM sur base PostgreSQL.",
      "Frontend réactif sous Next.js, React et Tailwind CSS avec prototype Figma (responsive & multi-rôles).",
      "Reproduction fidèle de la logique métier Sage 100 : Plan comptable tunisien, journaux, écritures et gestion multi-dossiers clients.",
      "Génération automatique des états financiers en temps réel : Grand-Livre, Balance générale et Report à nouveau des soldes.",
      "Sécurité renforcée : Authentification JWT, hachage BCrypt, Helmet, rate-limiting et vérification par email."
    ],
    tags: ["Next.js", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "Sage 100"],
  },

  {
    id: "enigov",
    title: "EniGov",
    subtitle: "Plateforme Web de Gouvernance Étudiante",
    category: "Web",
    badgeType: "Featured",
    year: "2026",
    description: "Plateforme web officielle de gouvernance pour la communauté de l'ENICarthage. Développée en équipe et déployée en production sur enigov.tn, permettant la gestion centralisée des réclamations étudiantes, la communication et le suivi des demandes.",
    detailedPoints: [
      "Conception et développement full-stack réactif et sécurisé.",
      "Gestion des réclamations étudiantes, communication avec l'administration et suivi des demandes.",
      "Déploiement en production avec nom de domaine dédié (enigov.tn)."
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Production"],
    liveUrl: "https://enigov.tn",
  },
    {
    id: "scoutini",
    title: "Scoutini Platform",
    subtitle: "Plateforme de Détection & Recrutement de Talents Footballistiques",
    category: "Web",
    badgeType: "Featured",
    year: "2026",
    description: "Plateforme SaaS full-stack innovante connectant les jeunes talents du football en Tunisie avec les recruteurs, clubs et académies via des cartes de compétences FIFA-like et des vidéos d'essais.",
    detailedPoints: [
      "Architecture Full-Stack découplée : Frontend réactif sous React / Vite & Backend API REST sous Node.js / Express.",
      "Modélisation relationnelle robuste avec Prisma ORM & base PostgreSQL (gestion des utilisateurs multi-rôles : Joueurs, Scouts, Clubs, Académies).",
      "Profils joueurs numériques enrichis : métriques de performance radar (vitesse, technique, physique, passe, tirs) et statistiques de matchs.",
      "Intégration de séquences vidéo d'essais (Highlight Clips) et filtres de recherche multicritères par région, âge et poste.",
      "Système de recrutement direct : profils certifiés Scouts, demandes d'essais directes (Trial Requests) et gestion des favoris."
    ],
    tags: ["React", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "Vite", "JWT"],
    liveUrl: "https://scoutini.vercel.app/",
  },
  {
    id: "bengodelivery",
    title: "BengoDelivery",
    subtitle: "Système Mobile & Backend de Supervision des Livraisons",
    category: "Mobile",
    badgeType: "Featured",
    year: "2026",
    description: "Solution d'ingénierie logicielle basée sur une architecture client-serveur 3-Tiers : application Android (Java/XML, Retrofit), API REST Spring Boot 3.2 sécurisée par JWT/BCrypt, base Oracle et notifications Push temps réel FCM.",
    detailedPoints: [
      "Architecture 3-Tiers découplée : Client Android (Retrofit) + Microservices API REST + Base Oracle.",
      "Sécurité industrielle : Authentification JWT, hachage BCrypt et gestion des sessions.",
      "Dualité d'expérience utilisateur selon les rôles (contrôleur et livreur).",
      "Notifications push en temps réel via Firebase Cloud Messaging (FCM)."
    ],
    tags: ["Android (Java)", "Spring Boot 3", "Oracle DB", "JWT", "BCrypt", "Firebase FCM", "Retrofit"],
  },
  {
    id: "minierp",
    title: "Mini ERP en Java",
    subtitle: "Système de Gestion d'Entreprise Modularisé",
    category: "Java/Systèmes",
    badgeType: "Académique",
    year: "2025",
    description: "Application d'entreprise complète pour la gestion des clients, stocks et commandes. Conception Orientée Objet avancée garantissant modularité et réutilisabilité.",
    detailedPoints: [
      "Application stricte des principes POO et des Design Patterns d'architecture.",
      "Module de facturation, gestion de stock temps réel et historique des commandes.",
      "Structures de données sur-mesure et persistance des transactions."
    ],
    tags: ["Java", "POO", "Design Patterns", "Data Structures", "Architecture Modulaire"],
  },
  {
    id: "gl-uml",
    title: "Spécification & Modélisation Système (GL & UML)",
    subtitle: "Ingénierie des Besoins & Diagrammes UML",
    category: "Architecture/UML",
    badgeType: "Académique",
    year: "2025",
    description: "Analyse des besoins complexes d'un système d'information industriel, rédaction du cahier des charges rigoureux et modélisation complète sous norme UML.",
    detailedPoints: [
      "Élaboration des diagrammes UML : Cas d'utilisation, Classes, Séquences, États-Transitions.",
      "Spécifications fonctionnelles et non-fonctionnelles selon les normes du Génie Logiciel.",
      "Définition des scénarios nominaux et d'exception."
    ],
    tags: ["UML", "Génie Logiciel", "Diagrammes de Séquence", "Spécifications Systèmes"],
  },
  {
    id: "cpp-algos",
    title: "Programmation Avancée C / C++",
    subtitle: "Algorithmique & Optimisation Bas Niveau",
    category: "Algorithmique",
    badgeType: "Académique",
    year: "2024 - 2025",
    description: "Implémentation d'algorithmes complexes et de structures de données optimisées pour la résolution de problèmes informatiques à haute performance.",
    detailedPoints: [
      "Gestion manuelle et sécurisée de la mémoire (pointeurs, allocations dynamiques).",
      "Implémentation d'arbres, graphes, tables de hachage et algorithmes de tri/recherche.",
      "Analyse asymptotique de complexité spatiale et temporelle (Big-O)."
    ],
    tags: ["C", "C++", "Pointeurs & Mémoire", "Graphes & Arbres", "Algorithmique Avancée"],
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "clickovate",
    period: "Juin 2026 – Août 2026",
    role: "Stagiaire Développeur Full-Stack",
    organization: "Clickovate (Agence de Développement Web & Mobile)",
    type: "Stage",
    current: false,
    score: "19 / 20",
    bullets: [
      "Conception et développement full-stack d'une plateforme web SaaS de comptabilité en ligne remplaçant le logiciel desktop Sage 100.",
      "Architecture backend sous Node.js / Express.js avec Prisma ORM et base de données PostgreSQL.",
      "Frontend sous Next.js, React et Tailwind CSS avec interface responsive multi-rôles (Admin, Comptable, Client, Agent).",
      "Implémentation de la logique métier comptable tunisienne : Plan comptable, journaux, écritures, Grand-Livre, Balance générale et Report à nouveau automatique des soldes.",
      "Sécurité renforcée (JWT, BCrypt, Helmet, verifications d'email) — Évalué 19/20 par l'entreprise avec félicitations."
    ]
  },
  {
    id: "delegue-general",
    period: "2024 – Présent",
    role: "Délégué Général des Étudiants",
    organization: "ENICarthage",
    type: "Associatif",
    current: true,
    bullets: [
      "Représentant officiel et porte-parole des élèves ingénieurs auprès de la Direction de l'ENICarthage.",
      "Coordination académique, médiation pédagogique et résolution des problématiques de promotion.",
      "Membre du Conseil Scientifique de l'école.",
      "Organisation des assemblées et gestion de la stratégie de communication interne."
    ]
  },
  {
    id: "microsoft-tech-club",
    period: "2024 – Présent",
    role: "Secrétaire Général",
    organization: "Microsoft Tech Club ENICarthage",
    type: "Associatif",
    current: true,
    bullets: [
      "Pilotage stratégique et organisation de hackathons, conférences et workshops technologiques.",
      "Gestion de l'équipe bureau, planification des formations techniques et gestion des partenariats."
    ]
  },
  {
    id: "tunisie-telecom",
    period: "Juillet 2025",
    role: "Stagiaire Ingénieur Réseau",
    organization: "Tunisie Telecom",
    type: "Stage",
    bullets: [
      "Diagnostic et résolution des dérangements du réseau de télécommunication d'entreprise.",
      "Suivi et cartographie des réclamations clients à travers le système d'information géographique (GIS).",
      "Intervention terrain aux côtés des équipes d'infrastructure télécom (RG, SR, PC, Fibre Optique)."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Langages de Programmation",
    iconName: "Code2",
    skills: [
      { name: "TypeScript / JavaScript", level: "Avancé" },
      { name: "Java (POO, Spring Boot, JDBC)", level: "Avancé" },
      { name: "SQL", level: "Avancé" },
      { name: "Python", level: "Certifié PE1 & PE2" },
      { name: "C / C++", level: "Maîtrisé" },
      { name: "HTML5 / CSS3", level: "Avancé" }
    ]
  },
  {
    category: "Frameworks & Outils DevOps",
    iconName: "Layers",
    skills: [
      { name: "Next.js & React", level: "Avancé" },
      { name: "Node.js & Express", level: "Avancé" },
      { name: "Spring Boot 3", level: "Avancé" },
      { name: "Prisma ORM", level: "Avancé" },
      { name: "Angular", level: "Intermédiaire" },
      { name: "Android (Java/XML)", level: "Maîtrisé" },
      { name: "Docker", level: "Intermédiaire" },
      { name: "AWS Cloud (Foundations)", level: "Certifié" },
      { name: "Git & GitHub Workflows", level: "Avancé" },
      { name: "Maven / VS Code / Figma", level: "Maîtrisé" }
    ]
  },
  {
    category: "Bases de Données & Data",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", level: "Avancé" },
      { name: "Oracle Database", level: "Avancé" },
      { name: "MySQL", level: "Avancé" },
      { name: "MongoDB (NoSQL)", level: "Intermédiaire" },
      { name: "SQLite", level: "Maîtrisé" }
    ]
  },
  {
    category: "Réseaux & Infrastructures (CCNA)",
    iconName: "Network",
    skills: [
      { name: "TCP/IP, IPv4 & IPv6", level: "Solide" },
      { name: "Switching & Routing Dynamique", level: "Solide" },
      { name: "VLAN & Inter-VLAN Routing", level: "Solide" },
      { name: "Protocols STP & OSPF", level: "Maîtrisé" },
      { name: "Wireless Networks & DHCP", level: "Maîtrisé" },
      { name: "Sécurité NAT & ACLs", level: "Maîtrisé" },
      { name: "Fondamentaux Cybersécurité & IoT", level: "Certifié" }
    ]
  },
  {
    category: "Génie Logiciel & Soft Skills",
    iconName: "Cpu",
    skills: [
      { name: "Architectures SaaS & Full-Stack", level: "Expert" },
      { name: "Programmation Orientée Objet (POO)", level: "Expert" },
      { name: "API REST & Sécurité JWT", level: "Avancé" },
      { name: "Modélisation UML & Design Patterns", level: "Avancé" },
      { name: "Leadership & Gestion d'Équipe", level: "Expert" },
      { name: "Communication, Rigueur & Autonomie", level: "Expert" }
    ]
  }
];

const credlyBadge = (id: string) => `https://www.credly.com/badges/${id}/public_url`;

export const certificationsData: Certification[] = [
  {
    id: "ccna",
    title: "CCNA : Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "Juin 2026",
    badgeText: "Réseaux",
    description: "Architectures réseau d'entreprise : commutation, VLAN & Inter-VLAN, STP, routage OSPF, DHCP, NAT, ACL et réseaux sans fil.",
    image: "/badges/ccna-srwe.png",
    verifyUrl: credlyBadge("d3c2c599-a13b-4135-9858-9597f3bcd8bc"),
    featured: true,
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Academy Graduate — Cloud Foundations",
    issuer: "Amazon Web Services (AWS Academy)",
    date: "Octobre 2026",
    badgeText: "Cloud",
    description: "Fondamentaux du cloud AWS : services cœur (EC2, S3, VPC, RDS), sécurité, architecture, tarification et support.",
    image: "/badges/aws-cloud-foundations.png",
    verifyUrl: credlyBadge("0f3b35a5-7f1d-41c4-a795-bfcca85dbe39"),
    featured: true,
  },
  {
    id: "python-essentials-2",
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy × OpenEDG Python Institute",
    date: "Octobre 2026",
    badgeText: "Programmation",
    description: "Python intermédiaire : modules et packages, exceptions, chaînes, programmation orientée objet et gestion de fichiers.",
    image: "/badges/python-essentials-2.png",
    verifyUrl: credlyBadge("5f92e95e-7c76-4b1d-89ad-d50f73e0b4a7"),
  },
  {
    id: "python-essentials-1",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy × OpenEDG Python Institute",
    date: "Octobre 2026",
    badgeText: "Programmation",
    description: "Bases de la programmation Python : types, opérateurs, contrôle de flux, fonctions, listes, tuples et dictionnaires.",
    image: "/badges/python-essentials-1.png",
    verifyUrl: credlyBadge("24d3526c-105d-42b2-8c10-83ed6dab4816"),
  },
  {
    id: "intro-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Octobre 2026",
    badgeText: "Cybersécurité",
    description: "Menaces, vulnérabilités et attaques courantes, protection des données et des systèmes, bonnes pratiques de sécurité.",
    image: "/badges/intro-cybersecurity.png",
    verifyUrl: credlyBadge("dbec3510-adc7-4829-a308-94db07e99b3a"),
  },
  {
    id: "intro-data-science",
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "Octobre 2026",
    badgeText: "Data",
    description: "Cycle de vie de la donnée, analyse et visualisation, et rôle de la data science dans la prise de décision.",
    image: "/badges/intro-data-science.png",
    verifyUrl: credlyBadge("4624f1cb-aaf3-4c20-b5b1-2efd723d215f"),
  },
  {
    id: "intro-iot",
    title: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "Octobre 2026",
    badgeText: "IoT",
    description: "Objets connectés, capteurs, transformation numérique et enjeux de sécurité de l'Internet des Objets.",
    image: "/badges/intro-iot.png",
    verifyUrl: credlyBadge("fa35c7b4-7d86-4db5-92d9-3b058c6ce2b6"),
  },
  {
    id: "github",
    title: "GitHub Certification",
    issuer: "GitHub",
    date: "Octobre 2024",
    badgeText: "DevOps",
    description: "Gestion de version avec Git, workflows GitHub et pratiques de développement collaboratif.",
  }
];

export const languagesData: Language[] = [
  { name: "Arabe", level: "Langue maternelle", percentage: 100 },
  { name: "Français", level: "Niveau B2 (Courant / Académique)", percentage: 85 },
  { name: "Anglais", level: "Niveau B2 (Technique & Professionnel)", percentage: 85 }
];
