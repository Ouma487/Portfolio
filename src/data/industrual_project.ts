// src/data/projects.ts
export interface IndProjectData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    gradient: string;
    tags: string[];
    detailedDescription: string;
    keyFeatures: string[];
    technicalDetails: string[];
    pdfReport?: string;
    codeRepo?: string;
    liveDemo?: string;
    images?: string[];
  }
  
  export const indprojects: IndProjectData[] = [
    {
        id: "ai_predictive_manufacturing",
        title: "AI Predictive Manufacturing",
        subtitle: "Traceability and Predictive Maintenance for Hydrogen Electrolyzers",
        description: "Developed AI-driven solutions to automate manufacturing operations and predict failures in hydrogen electrolyzers using hybrid machine learning strategies.",
        icon: "BatteryCharging",
        gradient: "from-[hsl(var(--brand-coral))] to transparent",
        tags: ["Python", "Time Series", "VAE", "GADF", "Green Energy","Domain Adaptation"],
        detailedDescription: `
Genvia, a leading energy company, aimed to enhance traceability and maintenance of hydrogen electrolyzers through AI-driven solutions. On the traceability side, the project automated the generation of Manufacturing Order (MO) messages using Python and JSON templates, linked them with Excel-based legacy data, and restructured production data into a knowledge graph to enable more effective traceability analysis. For durability and predictive maintenance, the approach involved preprocessing voltage signals using filtering and normalization techniques, converting these signals into time-series images using GADF and MTF methods, and building a Variational Autoencoder (VAE) to detect anomalies. The system was trained using a hybrid strategy that combined supervised and self-supervised learning.`,

        keyFeatures: [
          "Automated generation of MO messages using JSON templates",
          "Excel data integration for traceability workflows",
          "Knowledge graph modeling of production data",
          "Voltage signal processing and filtering techniques",
          "Time-series imaging with GADF and MTF for predictive modeling",
          "VAE-based anomaly detection and hybrid model training"
        ],
        technicalDetails: [
          "Python scripting for JSON/Excel integration",
          "Signal pre-processing and noise filtering methods",
          "GADF/MTF time-series transformation for model input",
          "Variational Autoencoder for unsupervised pattern recognition",
          "Hybrid model training: supervised + auto-supervised learning",
          "Knowledge graph construction from production data"
        ],
        pdfReport: "", // Fill in if available
        codeRepo: "",  // Fill in if available
        images: ["https://prod-files-secure.s3.us-west-2.amazonaws.com/d1a0bb9d-faa3-4e09-afc1-57d3e4b21c7e/ab08f9d2-c879-49e0-b0bd-ddd7232d2a65/_n.jpg"]
      }
      
  ];