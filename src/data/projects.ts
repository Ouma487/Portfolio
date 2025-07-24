// src/data/projects.ts
export interface ProjectData {
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
  
  export const projects: ProjectData[] = [
    {
      id: "robot_waste_mission",
      title: "Robot Waste Mission",
      subtitle: "Multi-Agent Coordination for Hazardous Waste Cleanup",
      description: "Simulated autonomous robots tasked with cleaning radioactive waste across multi-zone environments, comparing communication vs non-communication strategies.",
      icon: "Bot",
      gradient: "from-[hsl(var(--brand-olive))] to-transparent",
      tags: ["Python", "Multi-Agent Systems", "Simulation", "Communication Protocols"],
      detailedDescription: `This project simulates a hazardous waste cleanup mission using autonomous robots in a zone-based environment with varying radioactivity levels. Robots are restricted by zone, requiring careful multi-agent coordination for waste collection, transformation, and disposal.
    
    We implemented two strategies: one with non-communicating agents using random exploration, and another with communicating agents coordinated by leader structures via message-passing. The communication-enhanced model reduced average completion time by 3.5×, resolved deadlocks, and scaled robustly to more agents.
    
    Key features include custom agent schedulers, a hierarchical chief system for centralized decision-making, and extensive performance metrics to compare approaches. Visualizations track agent behavior and waste reduction over time, highlighting the efficiency gains from inter-agent communication.`,
      keyFeatures: [
        "Zone-restricted simulation with multiple waste transformation steps",
        "Leader-agent structures for centralized communication and coordination",
        "Quantitative metrics showing 3.5× faster completion vs. non-communicating agents",
        "Deadlock detection and resolution strategies",
        "Visualization of agent movements and task completion",
        "Scalable design supporting additional agents and zones"
      ],
      technicalDetails: [
        "Python implementation with modular OOP architecture",
        "Custom scheduler with randomized multi-tier agent activation",
        "Message-passing protocols for chief-to-agent and inter-chief coordination",
        "Statistical data collection on steps to completion and message volume",
        "Mesa framework for interactive grid visualization",
        "Tested across varying agent counts and waste densities"
      ],
      pdfReport: "/reports/robot_waste_mission_report.pdf",
      codeRepo: "https://github.com/Ouma487/Robot_Mission",
      images: ["/gifs/robot_mission.gif"]
    }
    ,
    {
      id: "rl_for_urban_driving",
      title: "Reinforcement Learning for Urban Driving",
      subtitle: "Autonomous Navigation in Highway, Parking, and Roundabout Scenarios",
      description: "Explores how deep reinforcement learning agents navigate complex traffic environments using DQN, DDPG, and HER. Covers simulation, tuning, and behavior analysis.",
      icon: "Milestone",
      gradient: "from-[hsl(var(--brand-lavender))] to-transparent",
      tags: ["Python", "Reinforcement Learning", "DQN", "DDPG", "HER", "Autonomous Driving"],
      detailedDescription: `This project applies deep reinforcement learning to autonomous vehicle navigation in simulated urban driving environments. It focuses on three core scenarios: highways, parking lots, and roundabouts.
    
    The project implements Deep Q-Networks (DQN), Deep Deterministic Policy Gradient (DDPG), and Hindsight Experience Replay (HER) to train agents capable of making safe and effective decisions in complex traffic situations. Performance is evaluated through metrics such as reward progression and task completion, with fine-tuned hyperparameters for optimal learning outcomes. This project allowed me to explore the practical challenges of tuning RL algorithms and observe firsthand how different methods adapt to varied driving tasks.
`,
      
      keyFeatures: [
        "Multi-environment RL training (highway, parking, roundabout)",
        "Deep Q-Networks (DQN) for discrete action environments",
        "Continuous control via DDPG and enhancement with HER",
        "Reward shaping and exploration strategy tuning",
        "Hyperparameter optimization for improved learning curves",
        "Visual simulations of agent behavior and performance"
      ],
      
      technicalDetails: [
        "Python implementation using Stable Baselines3 (sb3)",
        "Replay buffers and policy networks for off-policy learning",
        "HER for reinterpreting failed experiences",
        "Fine-tuning of discount factor, learning rate, and noise",
        "Simulation environments: highway-env, parking-env, roundabout-env",
        "Evaluation based on episode rewards and policy stability"
      ],
      pdfReport: "/reports/Reinforcement_Learning.pdf",
      codeRepo: "https://github.com/Ouma487/HighwayRLExplorer",
      images: ["/gifs/highway.gif",
        "/gifs/parking-env.gif",
        "/gifs/roundabout-env.gif"
      ]
    },
    {
      id: "emotion_recognition",
      title: "Emotion Recognition",
      subtitle: "Multimodal Emotion Classification with Deep Learning",
      description: "Developed a system that recognizes emotions from facial expressions and speech. Used CNNs on images and LSTMs on audio signals, combining them for improved accuracy.",
      icon: "Brain",
      gradient: "from-[hsl(var(--brand-coral-pastel))] to-transparent",
      tags: ["Deep Learning", "CNN", "LSTM", "Computer Vision", "Audio Processing"],
      detailedDescription: `This project built a deep learning pipeline for recognizing human emotions using two complementary data sources: facial images and speech audio.
      
    - For facial emotion recognition, it employed a CNN trained on FER2013 to classify expressions into categories such as happiness, sadness, anger, and surprise. Data augmentation was used to boost generalization.
    - For speech emotion recognition, it extracted MFCC features from audio clips and trained an LSTM network to classify emotional states over time.
    - Finally, ensemble learning combined both modalities for robust multimodal predictions.
      
    Evaluation included confusion matrices and accuracy progression to demonstrate improvements from augmentation and sequence modeling.`,
      
      keyFeatures: [
        "Multimodal emotion recognition using both images and audio",
        "CNN trained on FER2013 for facial expression classification",
        "LSTM with MFCC inputs for temporal speech analysis",
        "Data augmentation raised test accuracy from 64% to 86%",
        "Fusion of visual and audio predictions for stronger results",
        "Extensive evaluation via confusion matrices and metrics"
      ],
      
      technicalDetails: [
        "Implemented with TensorFlow and PyTorch",
        "OpenCV and Dlib for face detection & preprocessing",
        "Librosa for MFCC extraction from audio signals",
        "Sequential LSTM networks for time-series classification",
        "Majority voting ensemble to merge audio-visual outputs",
        "Tested on FER2013 and speech emotion datasets"
      ],
    
      pdfReport: "/reports/Emotion_recognition_report.pdf",  // Your actual report
      codeRepo: "https://github.com/Ouma487/Emotion-recognition", // Correct GitHub
      images: [
        "/images/face.png"
      ]
    }
    
  ];