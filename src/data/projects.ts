
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  languages: string[];
  image: string;
  link: string;
  github: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Personal Finance Dashboard",
    description: "An interactive dashboard for personal finance tracking with data visualization and budgeting tools.",
    longDescription: "A comprehensive personal finance management application built with React and Python. The dashboard offers real-time visualization of spending patterns, budget tracking, and financial goal monitoring. Features include interactive charts, transaction categorization using machine learning, and secure bank account integration via Plaid API. The backend utilizes Django REST framework for data processing and SQLite for local storage.",
    tags: ["Web App", "Data Visualization", "API Integration"],
    languages: ["JavaScript", "Python", "SQL"],
    image: "/placeholder.svg",
    link: "https://example.com/finance",
    github: "https://github.com/example/finance",
    featured: true,
    date: "2023-05-15"
  },
  {
    id: "2",
    title: "Machine Learning Image Classifier",
    description: "A computer vision project that classifies images using convolutional neural networks.",
    longDescription: "This image classification system uses deep learning techniques to identify objects in images. Built with Python and TensorFlow, it implements a custom CNN architecture trained on the ImageNet dataset. The model achieves 92% accuracy on validation data and includes features like transfer learning with pre-trained models (ResNet50, VGG16) and data augmentation to improve performance. The application includes a web interface for uploading and testing new images.",
    tags: ["Machine Learning", "Computer Vision", "Deep Learning"],
    languages: ["Python", "JavaScript"],
    image: "/placeholder.svg",
    link: "https://example.com/classifier",
    github: "https://github.com/example/classifier",
    featured: true,
    date: "2023-02-10"
  },
  {
    id: "3",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with product management, cart functionality, and payment processing.",
    longDescription: "A complete e-commerce platform built with React, Node.js, and MongoDB. The application features product catalog management, user authentication, shopping cart functionality, and secure payment processing via Stripe. The frontend uses Redux for state management and styled-components for a responsive design. The backend implements a RESTful API with Express.js and includes features like order tracking, inventory management, and admin dashboard.",
    tags: ["Full Stack", "E-commerce", "Payment Integration"],
    languages: ["JavaScript", "TypeScript", "HTML/CSS"],
    image: "/placeholder.svg",
    link: "https://example.com/ecommerce",
    github: "https://github.com/example/ecommerce",
    featured: false,
    date: "2022-11-20"
  },
  {
    id: "4",
    title: "Automated Trading Bot",
    description: "An algorithmic trading system that executes trades based on technical analysis and market signals.",
    longDescription: "This automated trading bot uses Python to analyze market data and execute trades on cryptocurrency exchanges. The system implements various technical analysis strategies including moving averages, RSI, and MACD indicators. Features include backtesting capabilities on historical data, risk management algorithms, and a dashboard for monitoring performance. The application integrates with multiple exchanges via their APIs and includes a notification system for trade alerts.",
    tags: ["Algorithm", "Finance", "Automation"],
    languages: ["Python", "SQL"],
    image: "/placeholder.svg",
    link: "https://example.com/tradingbot",
    github: "https://github.com/example/tradingbot",
    featured: false,
    date: "2022-08-05"
  },
  {
    id: "5",
    title: "Mobile Fitness Tracker",
    description: "A cross-platform mobile application for tracking workouts, nutrition, and fitness progress.",
    longDescription: "A comprehensive fitness tracking application built with React Native for iOS and Android. The app tracks workouts, nutrition, and overall fitness metrics. Features include customizable workout plans, calorie counting, progress visualization, and integration with wearable devices. The backend uses Firebase for user authentication, real-time data synchronization, and cloud storage. The app also implements push notifications for workout reminders and achievement celebrations.",
    tags: ["Mobile App", "Health", "Cross-platform"],
    languages: ["JavaScript", "TypeScript"],
    image: "/placeholder.svg",
    link: "https://example.com/fitness",
    github: "https://github.com/example/fitness",
    featured: true,
    date: "2022-06-12"
  },
  {
    id: "6",
    title: "Smart Home Control System",
    description: "An IoT system for controlling and automating home devices through a web interface and mobile app.",
    longDescription: "This smart home system connects and controls various IoT devices through a central hub. Built with Python for the backend processing and React for the user interfaces, it allows users to manage lights, thermostats, security cameras, and other smart devices. The system implements MQTT protocol for device communication, includes automation rules based on time and sensor triggers, and provides historical data analysis. The hardware components use Raspberry Pi and ESP32 microcontrollers.",
    tags: ["IoT", "Home Automation", "Embedded Systems"],
    languages: ["Python", "JavaScript", "C++"],
    image: "/placeholder.svg",
    link: "https://example.com/smarthome",
    github: "https://github.com/example/smarthome",
    featured: false,
    date: "2022-03-30"
  }
];

export const getAllLanguages = (): string[] => {
  const languagesSet = new Set<string>();
  
  projects.forEach(project => {
    project.languages.forEach(language => {
      languagesSet.add(language);
    });
  });
  
  return Array.from(languagesSet).sort();
};

export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();
  
  projects.forEach(project => {
    project.tags.forEach(tag => {
      tagsSet.add(tag);
    });
  });
  
  return Array.from(tagsSet).sort();
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const filterProjects = (
  languageFilter?: string,
  tagFilter?: string,
  searchQuery?: string
): Project[] => {
  return projects.filter(project => {
    // Language filter
    if (languageFilter && !project.languages.includes(languageFilter)) {
      return false;
    }
    
    // Tag filter
    if (tagFilter && !project.tags.includes(tagFilter)) {
      return false;
    }
    
    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.longDescription.toLowerCase().includes(query) ||
        project.languages.some(lang => lang.toLowerCase().includes(query)) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return true;
  });
};
