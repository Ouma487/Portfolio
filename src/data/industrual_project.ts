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
      title: "ML-Driven Predictive Maintenance for Genvia",
      subtitle: "Time-Series Imaging & VAE Models for Hydrogen Electrolyzers",
      description: "Built an end-to-end machine learning system to predict failures in hydrogen electrolyzers, replacing costly endurance tests with early anomaly detection.",
      icon: "BatteryCharging",
      gradient: "from-[hsl(var(--brand-coral))] to-transparent",
      tags: ["Python", "Time Series Analysis","Machine learning", "GADF", "MTF", "VAE", "Domain Adaptation", "Failure Prediction", "Counterfactual Explanation"],
      detailedDescription: `This project, carried out in collaboration with Genvia (CEA, SLB, Vinci, Vicat, Occitanie), focused on leveraging advanced machine learning to transform maintenance and manufacturing of hydrogen electrolyzers.
    
    We developed a predictive maintenance pipeline to forecast failures in electrolyzer layers using early voltage signals, eliminating the need for extensive endurance tests. This involved detrending and normalizing multi-layer voltage time-series, tracking noise evolution, and encoding signals into 2D images with Gramian Angular Fields (GADF) and Markov Transition Fields (MTF). These images fed into a modified Variational Autoencoder (VAE) with CNN encoders, trained under a hybrid approach combining supervised anomaly labeling, unsupervised reconstruction, and domain adaptation. The system achieved 91% anomaly prediction accuracy, validated across Bristol and Grenoble lab datasets.
    
    In parallel, we automated the traceability system by converting Excel manufacturing records into structured JSON Manufacturing Orders (MOs), laying the groundwork for a knowledge graph to enable granular tracking from stacks down to individual layers, streamlining compliance and preparing for advanced analytics.
    
    This work was awarded the "Prix de l'innovation Dzung Tran" by the Fondation CentraleSupélec, recognizing it as the top computer science innovation project of the year.`,
      keyFeatures: [
        "Time-series preprocessing: detrending, normalization & noise evolution tracking",
        "Signal-to-image transformations with GADF & MTF for CNN training",
        "Modified VAE with convolutional encoders for anomaly detection",
        "Hybrid supervised-unsupervised training strategy with domain adaptation",
        "91% predictive accuracy on early failure detection, validated across labs",
        "Automated JSON-based traceability to replace manual Excel systems",
        "Foundation for a knowledge graph capturing manufacturing lineage",
        "Awarded the Prix de l'innovation Dzung Tran as best computer science innovation at CentraleSupélec"
      ],
      technicalDetails: [
        "Python pipelines for voltage preprocessing, GADF & MTF image generation",
        "CNN-based VAE architecture with reconstruction decoders for time-series",
        "Latent space perturbations via PCA for domain adaptation",
        "Supervised learning on historical Bristol failures combined with unsupervised reconstruction",
        "JSON Manufacturing Orders aligned with knowledge graph principles",
        "Project formally recognized by CentraleSupélec through the Dzung Tran innovation award"
      ],
      pdfReport: "/reports/Rapport_final_Chater_Lemaachi.pdf",
      codeRepo: "",
      liveDemo: "",
      images: ["/images/complete_pipeline.PNG"]
    }
    
    
    
    
    
      
  ];