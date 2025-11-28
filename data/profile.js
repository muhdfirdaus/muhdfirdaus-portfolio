export const about = `
I'm a backend and systems engineer with experience building real-world solutions across gaming, manufacturing, and enterprise automation. My work revolves around designing backend features, automating complex processes, building internal tools, and improving system reliability for teams that depend on stable and scalable technology.

I love working on systems that sit between multiple teams or technologies—pipelines, content flows, integrations, automations, DevOps layers, and backend logic. Whether I'm developing tools for a mobile game, automating manufacturing processes, or integrating ERP/MES systems, I focus on creating solutions that remove friction and make operations smoother.

In the gaming industry, I’ve built pipelines, tools, backend workflows, and data systems for a live mobile game (iOS/Android). This includes content pipelines, NFT backend logic, cloud database migrations, CI/CD improvements, and automations that support both development and live-ops.

In manufacturing, I’ve built production systems, barcode/packaging software, automated workflows, ERP/MES integrations, and RPA bots used across departments. These environments trained me to handle high-volume, high-accuracy, and real-time operational requirements.

I value clarity, automation, maintainability, and systems that “just work” quietly behind the scenes. I enjoy turning messy processes into clean workflows, building internal tools that make teams more efficient, and designing backend systems that reliably support real users.
`;

export const skills = [
  "C#",
  ".NET",
  "Node.js",
  "PHP",
  "PowerShell",
  "Python",
  "Azure Cosmos DB (Mongo vCore)",
  "MongoDB",
  "MySQL",
  "PlayFab",
  "Unity CCD",
  "Jenkins",
  "GitHub Actions",
  "Docker",
  "Terraform",
  "UiPath",
  "Power Automate",
  "MES Integration",
  "ERP Support",
  "Data Pipelines",
  "Game Masterdata Pipelines",
  "NFT Backend Systems",
  "REST APIs",
  "Backend Tools & Automation"
];

export const projects = [
  {
    name: "Changokushi Heroes! (Mobile Game Backend)",
    role: "Backend & Systems Engineer",
    period: "2024 – Present",
    tech: ["C#", ".NET", "Node.js", "PowerShell", "Cosmos DB", "PlayFab", "Unity CCD", "Docker", "Jenkins"],
    description: `
    Backend systems, automation pipelines, and developer tooling for the live mobile game Changokushi Heroes! (iOS/Android).
    Built the end-to-end masterdata pipeline, NFT reward backend, claim cycle logic, hero sync, Cosmos DB migration workflow,
    and multi-repo automation for developer productivity.
    `
  },
  {
    name: "PCBA Packaging System",
    role: "Software Engineer",
    period: "2018 – 2021",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    description: `
    A manufacturing system for scanning serial numbers, validating test logs, generating box/carton IDs, and printing labels.
    Ensures production accuracy by enforcing test requirements and automating barcode workflows.
    `
  },
  {
    name: "CCMS – Calibration Control System",
    role: "Software Engineer",
    period: "2018 – 2021",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    description: `
    Built a central tracking system for calibration items, expiration logic, stock status, and reporting dashboards.
    Provides visibility and traceability for production-critical calibration records.
    `
  },
  {
    name: "RPA Automation Suite (20+ Bots)",
    role: "RPA Developer (UiPath)",
    period: "2021 – 2023",
    tech: ["UiPath", "Power Automate", "Excel Automation", "SAP", "Email Automation"],
    description: `
    Delivered more than 20 automation bots across Finance, HR, Logistics, Purchasing, and QA.
    Automated repetitive business workflows, improved accuracy, and exceeded departmental KPIs.
    `
  }
];

export const experience = [
  {
    company: "Dreamteam / Changokushi Heroes!",
    period: "2024 – Present",
    title: "Backend & Automation Engineer",
    summary: "Building backend systems, pipelines, cloud workflows, and automation for the mobile game Changokushi Heroes! (iOS/Android).",
    details: [
      "Developed end-to-end masterdata pipeline (generation → validation → CCD upload → repo sync → PR creation).",
      "Built NFT backend system including weekly cycles, duplicate-prevention logic, serial/hero sync, and reward flow.",
      "Engineered Cosmos DB migration tooling: backup, restore, schema preparation, indexing, and data verification.",
      "Enhanced Jenkins pipelines, CI/CD automation, and multi-repo developer workflows.",
      "Integrated Unity CCD, PlayFab, Dockerized tools, and custom scripting solutions.",
      "Improved developer experience with automation, refactoring, and tooling enhancements."
    ]
  },
  {
    company: "Beyonics Precision Malaysia",
    period: "May 2023 – Apr 2024",
    title: "MES Engineer",
    summary: "Supported MES operations, automation workflows, and production systems in a high-volume manufacturing environment.",
    details: [
      "Automated production tasks using Power Automate and internal tools.",
      "Provided MES support for ongoing production operations.",
      "Participated in audit committees (C-TPAT, ISO9001, ISO14001).",
      "Handled network, PC, and device troubleshooting across production lines.",
      "Coordinated with vendors for MES improvements and system troubleshooting."
    ]
  },
  {
    company: "YKK Malaysia Bhd",
    period: "Nov 2021 – May 2023",
    title: "RPA Developer",
    summary: "Sole UiPath developer for Malaysia site, automating cross-department workflows and leading RPA improvements.",
    details: [
      "Delivered 20+ UiPath bots across Finance, HR, Logistics, Purchasing, and QA.",
      "Collaborated internationally with regional automation teams.",
      "Designed, deployed, and maintained RPA orchestrations and exception-handling workflows.",
      "Served as President of Sports & Recreational Club (leadership role)."
    ]
  },
  {
    company: "Beyonics Precision Malaysia",
    period: "Apr 2018 – Nov 2021",
    title: "Software Engineer",
    summary: "Developed internal manufacturing systems, ERP/MES integration tools, and production software.",
    details: [
      "Migrated legacy VB applications to modern PHP/MySQL systems.",
      "Built ERP/MES reporting dashboards and integration features.",
      "Developed CCMS (Calibration Control System) for tracking and reporting.",
      "Created PCBA Packaging System for serial scanning, test validation, and label printing.",
      "Liaised with MES vendors to support and improve PCBA production systems."
    ]
  },
  {
    company: "Zanko Sdn Bhd",
    period: "Sep 2016 – Nov 2017",
    title: "Junior Programmer",
    summary: "Full-stack PHP developer working on APIs, data migration, and secure application development.",
    details: [
      "Developed features using PHP MVC, MySQL, HTML/CSS/JavaScript.",
      "Performed large-scale data migration using Pentaho.",
      "Applied secure coding, TDD, and accessibility practices."
    ]
  },
  {
    company: "MISA Travel Sdn Bhd",
    period: "Aug 2015 – Aug 2016",
    title: "Junior Web Developer",
    summary: "Backend developer for travel APIs, integrations, and mobile app services.",
    details: [
      "Developed API integrations (NTUC, Tourico, internal systems).",
      "Contributed backend components to Kiasu Perks (iOS/Android).",
      "Worked with MongoDB, Redis, Slim framework, Composer, and Git."
    ]
  }
];
