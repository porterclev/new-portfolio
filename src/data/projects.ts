
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
    longDescription: `
    
    
    `,
    tags: ["Robotics", "Firmware", "Computer Vision", "GUI"],
    languages: ["Python", "C", "C++"],
    image: `${import.meta.env.BASE_URL}luna24/luna24.png`,
    media: [`${import.meta.env.BASE_URL}/luna24/demo.mov`, 
            `${import.meta.env.BASE_URL}/luna24/luna24-2.jpg`, 
            `${import.meta.env.BASE_URL}/luna24/luna24-3.jpg`, 
            `${import.meta.env.BASE_URL}/luna24/frame.jpg`],
    mediaDescriptions: ["First Prototype Demo", "Side View", "Wiring Phase", "Finish Frame"],
    github: "https://github.com/CSULB-RMC/ros2-ws-2024",
    featured: true,
    date: "8/28/2023 to 8/28/24"
  },
  {
    id: "2",
    title: "2025 Lunabotics Rover",
    description: "My second Lunabotics competition. Iterating on the previous year's firmware and software by adding LiDAR and Camera SLAM to allow for Full Autonomous Driving Functionality.",
    longDescription: `
    
    
    `,
    tags: ["Machine Learning", "Computer Vision", "Deep Learning", "Robotics", "Firmware", "Computer Vision", "GUI"],
    languages: ["Python", "C", "C++"],
    image: `${import.meta.env.BASE_URL}/luna25/luna25.jpg`,
    github: "https://github.com/CSULB-RMC/ros2-ws-2025",
    featured: true,
    date: "8/28/24 to 8/28/25"
  },
  {
    id: "3",
    title: "DegreeMate",
    description: "This was my senior project. It's an AI Degree Planner for Universities.",
    longDescription: "",
    tags: ["", "", ""],
    languages: ["JavaScript", "TypeScript"],
    image: `${import.meta.env.BASE_URL}/placeholder.svg`,
    github: "",
    featured: true,
    date: "8/28/24 to 5/12/25"
  },
  {
    id: "4",
    title: "BMO Robot",
    description: "Repurposed 2024 mini rover into a recreation of BMO from Adventure Time. Very fun passion project that was showcased at many conventions and events.",
    longDescription: `
    After the first year, I competed in the NASA rover building competition, and the team decided to move away from a dual-rover system. I worked day and night building both rovers, 
    doing constant testing on the CAN and PWM interfaces, rewiring, and reworking firmware and software for hours on end. The mini rover I'm going to be talking about in particular was 
    designed to push sediment excavated by the main rover. To do this, the rover was built using PETG treads and an aluminum frame. 4 brushless motors are geared together (2 per side) and 
    controlled by 2 vedder electronic speed controllers via CAN. Lastly, an actuator moved the digging shovel, controlled by PWM. A Raspberry Pi connected to an STM32 (also via CAN) gave 
    the board more PWM timers to work with.

    After the competition, the rover would no longer be used. Since we were part of a club, we had to attend outreach events to get funding, so I decided to turn the mini rover into a BMO robot 
    from Adventure Time. I dug up an old timecard clocking box and added some buttons to make it look more like the BMO rover. Then a screen was mounted to the box so animations could be played 
    using a remote control, which we normally used to just move the rover around. To play the animations without a graphical interface, empty, colored, highlighted characters were printed line by 
    line to cover the screen. To prevent screen tearing, one frame was printed on the first terminal session, and the next frame was printed on the second session. So when the terminal sessions were 
    cycled through, the frames could play without tearing. Overall, it was an amazing project and a great way to recycle an old competing rover.
    `,
    tags: ["Robotics", "Firmware"],
    languages: ["Python", "C", "C++", "Javascript"],
    image: `${import.meta.env.BASE_URL}bmo/bmo-2.jpg`,
    media: [`${import.meta.env.BASE_URL}/bmo/demo-1.mp4`,
            `${import.meta.env.BASE_URL}/bmo/demo-2.mp4`,
            `${import.meta.env.BASE_URL}/bmo/bmo-1.jpg`, 
            `${import.meta.env.BASE_URL}/bmo/bmo-2.jpg`],
    mediaDescriptions: ["First Time getting animation to work", "Halloween Event", "Wiring and Prototyping", "Club Fair"],
    github: "https://github.com/CSULB-RMC/ros2-ws-2025",
    featured: true,
    date: "8/28/2023 to 8/28/2025"
  },
  {
    id: "5",
    title: "BeachHacks7.0",
    description: "",
    longDescription: "",
    tags: ["", "", ""],
    languages: ["JavaScript", "TypeScript"],
    image: `${import.meta.env.BASE_URL}/placeholder.svg`,
    github: "https://github.com/BeachHacks/BeachHacks-Website-2023",
    featured: false,
    date: "2022-06-12"
  },
  {
    id: "6",
    title: "jQuery Contribution",
    description: "",
    longDescription: "",
    tags: ["Open Source", "", ""],
    languages: ["JavaScript"],
    image: `${import.meta.env.BASE_URL}/placeholder.svg`,
    link: "https://www.linkedin.com/pulse/mystery-eternal-date-picker-decoding-jquery-dilemma-porter-clevidence-ded3c/?trackingId=uV043gENTyidNk0PfUHwBg%3D%3D",
    github: "https://github.com/jquery/jquery-ui/pull/2268",
    featured: true,
    date: "2022-06-12"
  },
  {
    id: "7",
    title: "OED Test Implementation",
    description: "",
    longDescription: "",
    tags: ["Open Source", "", ""],
    languages: ["JavaScript"],
    image: `${import.meta.env.BASE_URL}/placeholder.svg`,
    github: "https://github.com/OpenEnergyDashboard/OED/pull/1126",
    featured: false,
    date: "2022-06-12"
  },
  {
    id: "8",
    title: "Game Engine",
    description: "",
    longDescription: "",
    tags: ["", "", ""],
    languages: ["C++"],
    image: `${import.meta.env.BASE_URL}/placeholder.svg`,
    github: "https://github.com/OpenEnergyDashboard/OED/pull/1126",
    featured: false,
    date: "11/12/2024 to 12/15/2024"
  },
  {
    id: "9",
    title: "Discord Bot",
    description: "",
    longDescription: "",
    tags: ["", "", ""],
    languages: ["JavaScript"],
    image: `${import.meta.env.BASE_URL}/placeholder.svg`,
    github: "https://github.com/OpenEnergyDashboard/OED/pull/1126",
    featured: false,
    date: "11/12/2024 to 12/15/2024"
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
