/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nirmalya Mukherjee",
  title: "Hi all, I'm Nirmalya",
  subTitle: emoji(
    "A passionate Data Engineer 🚀 having an experience of building pipeline and -------------------------------------------."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NAiztXm8KC806ZDzZRcEAzOxqiEqhBQR/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nirmalya-mukherjee",
  linkedin: "https://www.linkedin.com/in/nirmalya-mukherjee/",
  gmail: "nirmalya0101@gmail.com",
  instagram: 'https://instagram.com/nirmalya_art',
  youtube: 'https://www.youtube.com/@NirmalyaArt',
  //gitlab: "https://gitlab.com/",
  //facebook: "https://www.facebook.com/",
  //medium: "https://medium.com/",
  //stackoverflow: "https://stackoverflow.com/users/",
  //Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BIG DATA DEVELOPER WHO WANTS TO -----------------",
  skills: [
    emoji(
      "⚡ ------------------------------------"
    ),
    emoji("⚡ -------------------------------------"),
    emoji(
      "⚡ -----------------------------------------"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PySpark",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Cosmos DB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PL/SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
//    {
//      skillName: "JavaScript",
//      fontAwesomeClassname: "fab fa-js"
//    },
//    {
//      skillName: "reactjs",
//      fontAwesomeClassname: "fab fa-react"
//    },
//    {
//      skillName: "nodejs",
//      fontAwesomeClassname: "fab fa-node"
//    },
//    {
//      skillName: "swift",
//      fontAwesomeClassname: "fab fa-swift"
//    },
//    {
//      skillName: "npm",
//      fontAwesomeClassname: "fab fa-npm"
//    },
//    {
//      skillName: "firebase",
//      fontAwesomeClassname: "fas fa-fire"
//    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Institute of Technology Agartala",
      logo: require("./assets/images/nita.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2016 - 2020",
      desc: "Participated in the research of predicting students’ performance and published 1 paper.",
      descBullets: [
        "CGPA: 8.04",
        "President of Fine Arts Club, NIT Agartala, 2019 - 2020"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Big Data", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Consultant",
      company: "Capgemini",
      companylogo: require("./assets/images/capgemini.png"),
      date: "October 2020 – March 2022",
      desc: "Python/PySpark developer, worked with top accounts to design and create powerful data pipelines",
      descBullets: [
        "----------------------------------",
        "----------------------------------"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "IIT Kharagpur",
      companylogo: require("./assets/images/iitkgp.png"),
      date: "May 2018 – June 2018",
      desc: "Developed Variant Visualizer : A tool to visualize the variants in Next Generation Sequencing"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications and Projects "),
  subtitle:
    "Achievements, Certifications, Projects and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Python for Everybody",
      subtitle:
        "A specialization course by University of Michigan",
      image: require("./assets/images/coursera.jpg"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/7943d1ee260799111abf71ebc5261562"
        }
//        {
//          name: "Award Letter",
//          url: ""
//        },
//        {
//          name: "Google Code-in Blog",
//          url: ""
//        }
      ]
    },
    {
      title: "Agile Software Development",
      subtitle:
        "Agile Software Development course by University of Minnesota",
      image: require("./assets/images/coursera.jpg"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/74afad3746bd33ed577a8014d40ee36b"
        }
      ]
    },
    {
      title: "Data Science",
      subtitle:
        "Data Science by IBM",
      image: require("./assets/images/coursera.jpg"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/56ab02db492b02454e853817a0a30a57"
        }
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
//
//// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
  "Discuss a project/comission work or just want to say hi? My Inbox is open for all.",
  number: "+91-7005147315",
  email_address: "nirmalya0101@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
