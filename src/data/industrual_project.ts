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
      id: "ai_predictive_manufacturing_genvia",
      title: "AI Predictive Manufacturing for Genvia",
      subtitle: "Traceability & Predictive Maintenance in Hydrogen Electrolyzers",
      description: "Automated manufacturing traceability with JSON pipelines and built machine learning systems to predict failures in hydrogen electrolyzers, cutting costs and manual labor.",
      icon: "BatteryCharging",
      gradient: "from-[hsl(var(--brand-coral))] to-transparent",
      tags: ["Python", "JSON", "Knowledge Graph", "Time Series", "GADF", "MTF", "VAE", "Domain Adaptation", "Green Tech"],
      detailedDescription: `This project was carried out at Genvia, a joint venture of CEA, SLB, Vinci, Vicat, and the Occitanie Region, to revolutionize the manufacturing and maintenance of hydrogen electrolyzers.
    
    On the traceability side, I automated the creation of Manufacturing Orders (MOs) by transforming legacy Excel files into structured JSON records using Python scripts. This digitalized the entire stack and substack manufacturing process, setting up a knowledge graph-friendly system that enables granular tracking down to individual layers. The work dramatically reduced manual data entry efforts, saving hundreds of hours and paving the way for advanced analytics.
    
    On the durability side, I developed a predictive maintenance pipeline to forecast failures in electrolyzer layers, aiming to replace costly 3000-hour endurance tests. This involved preprocessing noisy voltage signals, generating 2D representations using Gramian Angular Fields (GADF) and Markov Transition Fields (MTF), then training a modified Variational Autoencoder (VAE) with CNN encoders. The approach combined supervised learning on historical failures with unsupervised reconstruction loss and domain adaptation to handle lab shifts, achieving 91% anomaly detection accuracy and influencing Genvia’s predictive maintenance strategy.`,
      keyFeatures: [
        "Python automation of Manufacturing Orders from legacy Excel files",
        "Digital traceability down to individual electrolyzer substack layers",
        "Architecture aligned with knowledge graph design for future data mining",
        "Signal preprocessing with detrending and noise evolution tracking",
        "Time-series imaging via GADF & MTF for deep learning compatibility",
        "Modified VAE with CNN encoders for anomaly detection",
        "Domain adaptation to generalize across lab-generated datasets"
      ],
      technicalDetails: [
        "Python pipelines integrating Excel data into structured JSON MOs",
        "Preparation for knowledge graph deployment capturing full production lineage",
        "Gramian Angular & Markov Transition Field transformations of voltage signals",
        "Hybrid training combining supervised classification with unsupervised VAE reconstruction",
        "PCA-based latent perturbations for domain adaptation across Bristol & Grenoble data",
        "Achieved 91% accuracy, replacing multi-thousand hour tests with early predictions"
      ],
      pdfReport: "/reports/Rapport_final_Chater_Lemaachi.pdf",
      codeRepo: "",  // fill in if needed
      liveDemo: "",  // fill in if needed
      images: ["/images/complete_pipeline.PNG"]
    }
    
    
      
  ];