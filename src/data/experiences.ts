// src/data/experiences.ts

export interface experiencesData {
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
  images?: string[];
  logo?: string;
  companyDescription?: string;
  companyWebsite?: string;
}


export const experiences: experiencesData[] = [
  {
    id: "libertify_ai_engineer",
    title: "AI Engineer @ Libertify",
    subtitle: "Dec 2024 – Present · Paris, France",
    description:
      "Designed and deployed scalable AI pipelines and LLM agents that transform diverse content  into structured, multimodal video scripts, powering personalized, automated storytelling across industries.",
      icon: "Video",
    gradient: "from-[hsl(var(--brand-yellow-pastel))] to-transparent",
    tags: [
      "Python",
      "Artificial Intelligence",
      "Pydantic",
      "LLMs",
      "AI Agents",
      "RAG",
      "Image Processing",
      "Prompt Engineering",
      "Unit Testing",
      "GCP",
      
      
      "AWS Lambda",
      "FastAPI",
      "Langchain"
    ],
    detailedDescription: 'As an AI Engineer at Libertify, I independently led the design and deployment of advanced AI systems that convert diverse content  into structured, video-ready narratives. I architected production-grade pipelines involving LLM agents, multimodal retrieval with text/image embeddings, and dynamic prompt generation. My focus was on retrieval accuracy, factual integrity, and scalable content automation, delivering intelligent storytelling tools used by both financial and non-financial clients.',
    keyFeatures: [
      "Enhanced a Retrieval-Augmented Generation (RAG) pipeline with text and image embeddings to improve relevance and video context alignment.",
      "Developed AI agents that classify financial news by theme, generate video scripts, and select background visuals aligned with each topic.",
      "Created a visual prompt generation module using LLMs to turn script sections into detailed image prompts for use in dynamic backgrounds.",
      "Improved financial newsletter generation prompts to detect fake news, filter irrelevant content, and ensure compliance with finance-specific constraints.",
      "Built a document parsing pipeline to extract and clean visuals from PDFs (including background removal) to enrich multimedia output.",
      "Tested and reported critical bugs across the platform (frontend and backend), contributing to faster release cycles and improved user experience.",
      "Established rigorous testing pipelines for AI components, including input validation, prompt integrity checks, and agent output consistency."
    ],
    technicalDetails: [
      "Multimodal embedding with OpenAI & Vertex AI for similarity search and ranking",
      "Structured LLM pipelines using dynamic Pydantic models (Pydantic AI)",
      "Custom agent orchestration logic with context-aware routing of LLM calls",
      "Google Imagen API integration for image generation with auto-generated prompts",
      "PDF image processing using PyMuPDF + Unstructured, background cleanup with custom masks",
      "Unit and integration testing across pipelines using custom mock services and schema guards"
    ],
    logo: "/images/logos/logo_l.jpg",
    companyDescription:
      "Libertify is a Paris-based AI startup specializing in automated video generation from financial and business documents. Recognized by programs such as Google for Startups AI First, NVIDIA Inception, Cyberport Green Fintech, and Allianz Accelerator.",
    companyWebsite: "https://www.libertify.com/"
  },
  {
    id: "renault_ai_intern",
    title: "AI & Data Mining Intern @ Renault",
    subtitle: "May 2024 – Oct 2024 · Guyancourt, France",
    description:
      "Built and deployed predictive AI systems for quality control and compliance automation at scale, tackling complex manufacturing and procurement challenges in the automotive sector.",
    icon: "Car",
    gradient: "from-[hsl(var(--brand-coral-pastel))] to-transparent",
    tags: [
      "Python",
      "Machine Learning",
      "Data Mining",
      "NLP",
      "Computer Vision",
      "Predictive Maintenance",
      "Quality Control",
      "LLM",
      "RAG",
      "Data Annotation"
    ],
    detailedDescription:
      "As an end-of-studies AI intern at Renault, I worked on predictive modeling, document intelligence, and data annotation pipelines. I contributed to defect detection using DTCs, automated requirement extraction from tenders using LLMs and vision models, and supported predictive maintenance through fault history analysis. I collaborated with engineers and procurement teams to ensure solutions were robust, compliant, and production-ready.",
    keyFeatures: [
      "Developed predictive models from diagnostic trouble codes (DTCs) to identify early-stage vehicle defects and support quality control.",
      "Automated tender document analysis using an NLP and computer vision pipeline to extract compliance and technical criteria.",
      "Analyzed vehicle sensor data and fault logs to support predictive maintenance efforts.",
      "Annotated and validated datasets for document parsing and defect prediction, ensuring robust AI training data.",
      "Collaborated with cross-functional teams to integrate AI solutions into existing manufacturing and procurement workflows."
    ],
    technicalDetails: [
      "Trained classification and anomaly detection models on highly imbalanced defect datasets.",
      "Used NLP models for keyword extraction, section segmentation, and semantic matching in tender analysis.",
      "Applied OpenCV and layout-aware parsing to extract tabular and visual content from PDF documents.",
      "Used Python-based data pipelines for preprocessing, model evaluation, and experimentation.",
      "Leveraged data mining techniques to detect defect patterns and equipment failure correlations."
    ],
    logo: "/images/logos/logo_r.jpg",
    companyDescription:
      "Renault is a global automotive leader headquartered in France, producing millions of vehicles annually across multiple brands. Known for its engineering excellence and innovative quality systems, Renault plays a major role in the European and global automotive markets.",
    companyWebsite: "https://www.renaultgroup.com/"
  }
  
  
];
