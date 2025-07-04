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
      description: "Simulated autonomous robots tasked with radioactive waste cleanup in a constrained multi-zone environment. Explored the impact of inter-agent communication on task efficiency, movement, and deadlock resolution.",
      icon: "Bot",
      gradient: "from-[hsl(var(--brand-olive))] to-transparent",
      tags: ["Python", "Multi-Agent Systems", "Simulation", "Communication Protocols"],
      detailedDescription: `This project models a hazardous waste cleanup scenario using autonomous robots in a zone-based environment with restricted access due to varying levels of radioactivity. Each robot type is limited to specific zones, requiring careful coordination for efficient task execution. The project explores the impact of agent communication on movement efficiency, conflict resolution, and overall task performance.

      Two main approaches were compared: one with non-communicating agents using randomized search and simple logic, and another with communicating agents capable of sharing state and delegating tasks. The latter incorporated leader-agent structures to centralize decisions and optimize path planning.`,
            
      keyFeatures: [
        "Zone-based simulation with restricted access based on robot type",
        "Multi-agent coordination strategies with and without communication",
        "Deadlock handling and task conflict resolution",
        "Leader-based role assignment for improved efficiency",
        "Quantitative comparison of agent strategies using simulation metrics",
        "Visualization of agent behavior and task progress"
      ],

      technicalDetails: [
        "Implemented in Python with object-oriented architecture",
        "Simulation of multi-agent task allocation and navigation",
        "Message-passing communication protocols between agents",
        "Performance metrics: steps to completion, conflict frequency, termination success",
        "Statistical comparison of non-communicating vs. communicating models",
        "Scalable architecture for extending to more agents and zones"
      ],
      pdfReport: "/reports/robot_waste_mission_report.pdf",
      codeRepo: "https://github.com/Ouma487/Robot_Mission",
      images: ["/images/robot_mission/image1.jpg"]
    },
    {
      id: "rl_for_urban_driving",
      title: "Reinforcement Learning for Urban Driving",
      subtitle: "Autonomous Navigation in Highway, Parking, and Roundabout Scenarios",
      description: "Explores how deep reinforcement learning agents navigate complex traffic environments using DQN, DDPG, and HER. Covers simulation, tuning, and behavior analysis.",
      icon: "Car",
      gradient: "from-[hsl(var(--brand-lavender))] to-transparent",
      tags: ["Python", "Reinforcement Learning", "DQN", "DDPG", "HER", "Autonomous Driving"],
      detailedDescription: `This project applies deep reinforcement learning to autonomous vehicle navigation in simulated urban driving environments. It focuses on three core scenarios: highways, parking lots, and roundabouts.
    
    The project implements Deep Q-Networks (DQN), Deep Deterministic Policy Gradient (DDPG), and Hindsight Experience Replay (HER) to train agents capable of making safe and effective decisions in complex traffic situations. Performance is evaluated through metrics such as reward progression and task completion, with fine-tuned hyperparameters for optimal learning outcomes.`,
      
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
      pdfReport: "/reports/rl_for_urban_driving_report.pdf",
      codeRepo: "https://github.com/Ouma487/HighwayRLExplorer",
      images: ["/images/rl/DQN.jpg"]
    },
      {
        id: "emotion_recognition",
        title: "Emotion Recognition",
        subtitle: "Multimodal Emotion Classification with Deep Learning",
        description: "Built a multimodal emotion recognition system combining facial expressions and voice analysis. Used CNNs for image-based detection and LSTMs for audio-based classification.",
        icon: "Brain",
        gradient: "from-[hsl(var(--brand-beige-light))] to-transparent",
        tags: ["Deep Learning", "CNN", "LSTM", "Computer Vision", "Audio Processing"],
        detailedDescription: `This project focuses on developing a deep learning system capable of identifying human emotions from both facial expressions and speech signals. It combines convolutional neural networks (CNNs) for image-based emotion detection with long short-term memory networks (LSTMs) for temporal analysis of audio signals.
      
      The system leverages facial features to classify emotions like happiness, sadness, anger, and surprise, while audio input is processed through spectral features and fed to recurrent models for emotion inference. Ensemble learning techniques were used to combine the outputs of both modalities for improved accuracy.`,
        
        keyFeatures: [
          "Multimodal emotion recognition from images and audio",
          "CNN-based facial emotion classification using FER2013",
          "LSTM-based speech emotion recognition using MFCCs",
          "Ensemble fusion of audio and visual predictions",
          "Preprocessing pipelines for face detection and feature extraction",
          "Robust performance evaluation with confusion matrices"
        ],
        
        technicalDetails: [
          "Python-based implementation using TensorFlow and PyTorch",
          "OpenCV and Dlib for real-time face detection",
          "MFCC and spectrograms for audio signal representation",
          "Sequential modeling with LSTM for audio inputs",
          "Majority voting and weighted averaging for fusion",
          "Evaluation using accuracy, precision, and recall on test sets"
        ],

      
      pdfReport: "/reports/deep-hedging-options-report.pdf",
      codeRepo: "https://github.com/bhsyns/deep-hedging-options",
      liveDemo: "https://deep-hedging-demo.herokuapp.com",
      images: ["/images/hedging-performance.png", "/images/neural-network-architecture.png"]
    }
  ];