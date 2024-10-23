import { FaUser } from "react-icons/fa"; 

export const navItems = [
    { name: "Home", link: "/" },
    { name: "Data Inspection", link: "/datainspection" },
    { name: "Phishing Website ", link: "/phishingwebsite" },
    {name : "Data Leakage", link:
      "/dataleakage"
    },
    { name: "Malware Analysis", link: "/malwareanalysis" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title:"Data Inspection",
      des: "Analyze Sensitive data seamlessly and securely with our advances tool, ensuring anonymity and integrity",
      img: "./DI[1].png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "/DataHero",
    },
    {
      id: 2,
      title:"Data Leakage",
      des: "Data Exposure involves the unauthorised transfer of confidential data Our specialised system detects and blocks,Moreover advice to prevent any breaches, ensuring that your critical data is protected.  ",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "/ui.yoom.com",
    },
    {
      id: 3,
      title: "Phising Website Detection",
      des: " Fraudulent Site Identification Prevent scam website aiming to steal sensitive information. Our addon protects against spoofing attacks via live analysis ",
      img: "/abcdef.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "/ui.aiimg.com",
    },
    {
      id: 4,
      title: "Malware Analysis",
      des: "Uncovering and thwarting harmful software.Our chrome extension protects your browsing by detecting and informing malicious programmes",
      img: "/MalwareAnalyse.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/ui.apple.com",
    },
  ];
  
  export const datatestimonials = [
    {
      quote:
        "A data loss at MedSecure in September 2024 resulted in the exposure of 5 million patients' personal and clinical data. The hack compromised Social Security numbers, insurance information, and names through spoofing. This year, there has been a 40% increase in healthcare data thefts; the projected financial effect is $100 million.",
      name: "MedSecure Assets Exposure Incident",
      title: "Targeted healthcare sector for sensitive personal and medical data.",
    },
    {
      quote:
        "Information theft is still a significant risk to the financial industry in 2024, since attacks are becoming more frequent and severe. Financial institutions were the subject of 80% more interactive intrusions and a 71% increase in stolen credentials theft in 2023. Significant exposures impacting up to 60 million records can be expected to cost $332 million, negatively impacting business operations and reputation.",
      name: "Credential Theft & Interactive Intrusions",
      title: "Crucial rise in cyberattacks and stolen credentials impacting finances.",
    },
    {
      quote:
       " With 69 breaches last year, 90% of which were instigated by outside parties seeking financial advantage, the food business is increasingly vulnerable to information theft. Web application exploits, psychological manipulation, and system penetration are important attack techniques that frequently target personal and payment information. There is a clear need for improved cybersecurity in light of high-profile attacks on delivery services and restaurant chains.",
      name: "Multi-vector Data Stolen Attack",
      title: "Involves external financial motives using system penetration and social engineering",
    },
    {
      quote:
        "Early in 2024, 60 million SocialConnect users had their names, emails, phone numbers, and hashed passwords compromised due to a hacking incident. With an average detection time of 277 days, the attack, which is linked to APT34, underscores the rising threats of data theft. It is anticipated that the impacted companies will pay more than $5.3 billion in 2024.",
      name: "SocialConnect Records Exposure",
      title: "The APT34 hacking group exploited vulnerabilities for massive data theft.",
    },
    {
      quote:
        "The personal information of ten million teachers and students—including names, contact information, Social Security numbers, and academic records—was compromised in a hack at the EdTech business PowerSchool in July 2023. The event brought attention to flaws in educational technology and spurred demands for more robust cybersecurity and stringent data protection laws.",
      name: "PowerSchool Information Leak",
      title: "Exploitation of security vulnerabilities in educational technology systems.",
      img: "./"
    },
  ];
  
  export const datacompanies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];

import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";
import avatar7 from "../assets/avatar-7.png";
import avatar8 from "../assets/avatar-8.png";
import avatar9 from "../assets/avatar-9.png";
import InstaIcon from "../assets/social-insta.svg";
import LinkedinIcon from "../assets/social-linkedin.svg";
import PinIcon from "../assets/social-pin.svg";
import XIcon from "../assets/social-x.svg";
import YoutubeIcon from "../assets/social-youtube.svg";



import leaf from "../assets/leaf.svg";
import pointer from "../assets/pointer.svg";
import lock from "../assets/lock.svg";
import notification from "../assets/notification.svg";
import acme from "../assets/logo-acme.png";
import quantum from "../assets/logo-quantum.png";
import echo from "../assets/logo-echo.png";
import celestial from "../assets/logo-celestial.png";
import pulse from "../assets/logo-pulse.png";
import apex from "../assets/logo-apex.png";
import puzzle from "../assets/puzzle.png";
import square from "../assets/square.png";

export const logos = [
  {
    src: acme,
    alt: "acme",
  },
  {
    src: quantum,
    alt: "quantum",
  },
  {
    src: echo,
    alt: "echo",
  },
  {
    src: celestial,
    alt: "celestial",
  },
  {
    src: pulse,
    alt: "pulse",
  },
  {
    src: apex,
    alt: "apex",
  },
] as const;

export const features = [
  {
    src: puzzle,
    title: "Comprehensive Threat Detection and Contextual Awareness",
    desc: "",
  },
  {
    src: square,
    title: "Harnessing AI and Machine Learning for Confidentiality breach Prevention",
    desc: "",
  },
];
export const leakagetestimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
] as const;





