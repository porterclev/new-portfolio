
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  languages: string[];
  image: string;
  media?: string[];
  mediaDescriptions?: string[];
  link?: string;
  github: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "2024 Lunabotics Rover",
    description: "The first Lunabotics competition I entered with the CSULB team. This was my first time working hands-on with electrical systems and critical testing firmware and software to work in a hazardous enviornment.",
    longDescription: "A comprehensive personal finance management application built with React and Python. The dashboard offers real-time visualization of spending patterns, budget tracking, and financial goal monitoring. Features include interactive charts, transaction categorization using machine learning, and secure bank account integration via Plaid API. The backend utilizes Django REST framework for data processing and SQLite for local storage.",
    tags: ["Robotics", "Firmware", "CV", "GUI"],
    languages: ["Python", "C", "C++"],
    image: "/luna24/luna24.png",
    media: ["/luna24/demo.mov", "/luna24/luna24-2.jpg", "/luna24/luna24-3.jpg", "/luna24/frame.jpg"],
    mediaDescriptions: ["First Prototype Demo", "Side View", "Wiring Phase", "Finish Frame"],
    github: "https://github.com/example/finance",
    featured: true,
    date: "8/28/2024 to 8/28/25"
  },
  {
    id: "2",
    title: "2025 Lunabotics Rover",
    description: "My second Lunabotics competition. Iterating on the previous year's firmware and software by adding LiDAR and Camera SLAM to allow for Full Autonomous Driving Functionality.",
    longDescription: "This image classification system uses deep learning techniques to identify objects in images. Built with Python and TensorFlow, it implements a custom CNN architecture trained on the ImageNet dataset. The model achieves 92% accuracy on validation data and includes features like transfer learning with pre-trained models (ResNet50, VGG16) and data augmentation to improve performance. The application includes a web interface for uploading and testing new images.",
    tags: ["Machine Learning", "Computer Vision", "Deep Learning"],
    languages: ["Python", "C", "C++"],
    image: "/luna25/luna25.jpg",
    link: "https://example.com/classifier",
    github: "https://github.com/example/classifier",
    featured: true,
    date: "2023-02-10"
  },
  {
    id: "3",
    title: "DegreeMate",
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
    id: "4",
    title: "BMO Robot",
    description: "Repurposed 2024 mini rover into a recreation of BMO from Adventure Time. Very fun passion project that was showcased at many conventions and events.",
    longDescription: "A comprehensive fitness tracking application built with React Native for iOS and Android. The app tracks workouts, nutrition, and overall fitness metrics. Features include customizable workout plans, calorie counting, progress visualization, and integration with wearable devices. The backend uses Firebase for user authentication, real-time data synchronization, and cloud storage. The app also implements push notifications for workout reminders and achievement celebrations.",
    tags: ["Mobile App", "Health", "Cross-platform"],
    languages: ["Python", "C", "C++", "Javascript"],
    image: "/bmo/bmo-2.jpg",
    media: ["/bmo/bmo-1.jpg", "/bmo/bmo-2.jpg"],
    mediaDescriptions: ["Wiring and Prototyping", "Club Fair"],
    github: "https://github.com/example/fitness",
    featured: false,
    date: "2022-06-12"
  },
  {
    id: "5",
    title: "BeachHacks7.0",
    description: "A cross-platform mobile application for tracking workouts, nutrition, and fitness progress.",
    longDescription: "A comprehensive fitness tracking application built with React Native for iOS and Android. The app tracks workouts, nutrition, and overall fitness metrics. Features include customizable workout plans, calorie counting, progress visualization, and integration with wearable devices. The backend uses Firebase for user authentication, real-time data synchronization, and cloud storage. The app also implements push notifications for workout reminders and achievement celebrations.",
    tags: ["Mobile App", "Health", "Cross-platform"],
    languages: ["JavaScript", "TypeScript"],
    image: "/placeholder.svg",
    link: "https://example.com/fitness",
    github: "https://github.com/example/fitness",
    featured: false,
    date: "2022-06-12"
  },
  {
    id: "6",
    title: "jQuery Contribution",
    description: "A cross-platform mobile application for tracking workouts, nutrition, and fitness progress.",
    longDescription: "A comprehensive fitness tracking application built with React Native for iOS and Android. The app tracks workouts, nutrition, and overall fitness metrics. Features include customizable workout plans, calorie counting, progress visualization, and integration with wearable devices. The backend uses Firebase for user authentication, real-time data synchronization, and cloud storage. The app also implements push notifications for workout reminders and achievement celebrations.",
    tags: ["Mobile App", "Health", "Cross-platform"],
    languages: ["JavaScript"],
    image: "/placeholder.svg",
    link: "https://www.linkedin.com/pulse/mystery-eternal-date-picker-decoding-jquery-dilemma-porter-clevidence-ded3c/?trackingId=uV043gENTyidNk0PfUHwBg%3D%3D",
    github: "https://github.com/jquery/jquery-ui/pull/2268",
    featured: true,
    date: "2022-06-12"
  },
  {
    id: "7",
    title: "OED Test Implementation",
    description: "A cross-platform mobile application for tracking workouts, nutrition, and fitness progress.",
    longDescription: "A comprehensive fitness tracking application built with React Native for iOS and Android. The app tracks workouts, nutrition, and overall fitness metrics. Features include customizable workout plans, calorie counting, progress visualization, and integration with wearable devices. The backend uses Firebase for user authentication, real-time data synchronization, and cloud storage. The app also implements push notifications for workout reminders and achievement celebrations.",
    tags: ["Mobile App", "Health", "Cross-platform"],
    languages: ["JavaScript"],
    image: "/placeholder.svg",
    link: "",
    github: "https://github.com/OpenEnergyDashboard/OED/pull/1126",
    featured: false,
    date: "2022-06-12"
  },
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
