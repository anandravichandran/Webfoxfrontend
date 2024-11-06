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
  

  
  export const datatestimonials = [
    {
      quote:
        "A data loss at MedSecure in September 2024 resulted in the exposure of 5 million patients' personal and clinical data. The hack compromised Social Security numbers, insurance information, and names through spoofing. This year, there has been a 40% increase in healthcare data thefts; the projected financial effect is $100 million.",
      name: "MedSecure Assets Exposure Incident",
      title: "Targeted healthcare sector for sensitive personal and medical data.",
      img:"",
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
      
    },
  ];
  
 
  
  export const dataExperience = [
    {
      id: 1,
      title: "Hacking and Malware Attacks",
      desc: "Cybercriminals use deceptive emails, messages, or websites to trick users into revealing personal information, such as login credentials,Interconnected digital landscape, safeguarding personal and sensitive information has never been more critical. Our Chrome extension offers a cutting-edge solution to detect potential data leakage and provide detailed reports",
      className: "md:col-span-2",
      thumbnail: "/exp5.png",
    },
    {
      id: 2,
      title: "Insider Threats",
      desc: "Employees or insiders with access to sensitive data may intentionally or unintentionally disclose information, leading to breaches,Detection: If user credentials are found in breach records involving insider threats, the extension provides specific reports on which company or service was affected and the nature of the leak.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp6.png",
    },

  ];
  


  export const leakageExperience = [
        {
      id: 3,
      title: "Unsecured Data Storage",
      desc: "Organizations sometimes store data without proper encryption or protection, making it accessible to attackers who search for unprotected databases.Breaches originated from third-party services tied to the user’s information. It provides details on which vendors or platforms were involved and what data was affected.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp7.png",
    },
    {
      id: 4,
      title: "Third-Party Vulnerabilities",
      desc: "Companies that work with third-party vendors can face data breaches if those partners have weak security practices.If breaches originated from third-party services tied to the user’s information. It provides details on which vendors or platforms were involved and what data was affected.",
      className: "md:col-span-2",
      thumbnail: "/exp8.png",
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
import datalogs1 from "../assets/datalogs1.png";
import datalog2 from "../assets/datalog2.png";
import datalog3 from "../assets/datalog3.png";
import datalog4 from "../assets/datalog4.png";
import datalog6 from "../assets/datalog6.png";
import datalog5 from "../assets/datalog5.png";
import leakage3 from "../assets/leakage3.png";
import leakage2 from "../assets/leakage2.png";

export const logos = [
  {
    src: datalogs1,
    alt: "acme",
  },
  {
    src: datalog2,
    alt: "quantum",
  },
  {
    src: datalog3,
    alt: "echo",
  },
  {
    src: datalog4,
    alt: "celestial",
  },
  {
    src: datalog5,
    alt: "pulse",
  },
  {
    src: datalog6,
    alt: "apex",
  },
] as const;

export const features = [
  {
    src: leakage3,
    title: "Protect your online identity with real-time data breach detection and alerts stay informed and secure",
    desc: "",
  },
  {
    src: leakage2,
    title: "Stay one step ahead of cybercriminals—detect data breaches involving your credentials before they cause damage ",
    desc: "",
  },
];
export const leakagetestimonials = [
  {
    text: "Users receive comprehensive breach details, including the date of the incident, affected platforms, and types of compromised data (e.g., passwords, email addresses).",
    imageSrc: avatar1.src,
    name: "databreaches",
    username: "thinkinfo",
  },
  {
    text: "Breach reports include a brief description and severity categorization, enabling informed, immediate actions to secure accounts.",
    imageSrc: avatar2.src,
    name: "databreaches",
    username: "Thinkinfo",
  },
  {
    text: "Built with stringent security measures, the extension ensures all user data is encrypted and processed securely without storing any credentials.",
    imageSrc: avatar3.src,
    name: "data breaches",
    username: "thinkinfo",
  },
  {
    text: "Provides real-time alerts when user information appears in new breaches, helping users stay proactive against threats.",
    imageSrc: avatar4.src,
    name: "data breaches",
    username: "thinkinfo",
  },
  {
    text: "Empowers users with the knowledge to act quickly, turning data breach alerts into opportunities for enhanced digital hygiene.",
    imageSrc: avatar5.src,
    name: "data breaches",
    username: "thinkinfo",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "data breaches",
    username: "thinkinfo",
  },
  {
    text: "Supports users in avoiding identity theft and fraud through timely detection of data leaks and vulnerabilities.",
    imageSrc: avatar7.src,
    name: "data breaches",
    username: "thinkinfo",
  },
  {
    text: "Constantly updates its database integration to ensure users have access to the latest information regarding potential breaches.",
    imageSrc: avatar8.src,
    name: "data breaches",
    username: "thinkinfo",
  },
  {
    text: "Includes a detailed content analysis of breaches, identifying the nature of the breach and the type of data affected.",
    imageSrc: avatar9.src,
    name: "data breaches",
    username: "thinkinfo",
  },
] as const;





