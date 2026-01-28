
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
    title: "2024 Lunabotics Rover",
    description: "An interactive dashboard for personal finance tracking with data visualization and budgeting tools.",
    longDescription: "A comprehensive personal finance management application built with React and Python. The dashboard offers real-time visualization of spending patterns, budget tracking, and financial goal monitoring. Features include interactive charts, transaction categorization using machine learning, and secure bank account integration via Plaid API. The backend utilizes Django REST framework for data processing and SQLite for local storage.",
    tags: ["Web App", "Data Visualization", "API Integration"],
    languages: ["Python", "C"],
    image: "/luna24.png",
    link: "https://example.com/finance",
    github: "https://github.com/example/finance",
    featured: true,
    date: "2023-05-15"
  },
  {
    id: "2",
    title: "2025 Lunabotics Rover",
    description: "A computer vision project that classifies images using convolutional neural networks.",
    longDescription: "This image classification system uses deep learning techniques to identify objects in images. Built with Python and TensorFlow, it implements a custom CNN architecture trained on the ImageNet dataset. The model achieves 92% accuracy on validation data and includes features like transfer learning with pre-trained models (ResNet50, VGG16) and data augmentation to improve performance. The application includes a web interface for uploading and testing new images.",
    tags: ["Machine Learning", "Computer Vision", "Deep Learning"],
    languages: ["Python", "C", "C++"],
    image: "/placeholder.svg",
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
    description: "A cross-platform mobile application for tracking workouts, nutrition, and fitness progress.",
    longDescription: "A comprehensive fitness tracking application built with React Native for iOS and Android. The app tracks workouts, nutrition, and overall fitness metrics. Features include customizable workout plans, calorie counting, progress visualization, and integration with wearable devices. The backend uses Firebase for user authentication, real-time data synchronization, and cloud storage. The app also implements push notifications for workout reminders and achievement celebrations.",
    tags: ["Mobile App", "Health", "Cross-platform"],
    languages: ["Python", "C", "C++", "Javascript"],
    image: "/placeholder.svg",
    link: "https://example.com/fitness",
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
