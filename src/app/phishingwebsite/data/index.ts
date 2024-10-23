
export const navItems = [
    { name: "Home", link: "/" },
    { name: "Data Inspection", link: "/datainspection" },
    { name: "Phishing Website ", link: "/phishingwebsite" },
    {name : "Data Leakage", link:
      "dataleakage"
    },
    { name: "Malware Analysis", link: "/malwareanalysis" },
  ];
  
  
  
  export const phishingtestimonials = [
    {
      quote:
        " In 2024, the healthcare sector saw a 45% increase in malware incidents compared to the previous year, according to a CISA report. A major attack in March 2024 compromised sensitive data from over 1.5 million patients, exploiting email campaigns to obtain login credentials. This incident underscores the urgent need for improved cybersecurity measures in healthcare.",

      name: "An Increase in Healthcare Phishing Attacks",
      title: "Significant increase in Fake Email Trap targeting healthcare organizations, with a sharp rise in frequency.",
    },
    {
      quote:
        "The Financial Cybersecurity Agency (FCA) reports that replay attack incidents in the banking industry increased by 50% in 2024 over the previous year. A significant botnet that occurred in June 2024 compromised private data belonging to almost 2 million customers of several large banks. Fraudulent campaigns, which pretended to be official bank correspondence, fooled people into disclosing financial information and login credentials, underscoring the pressing need for improved security protocols and user training.",
      name: "An Influence in Banking Sector Spoofing Incident",
      title: "Sharp surge in Email Fraud incidents targeting the banking industry, with a notable increase in severity",
    },
    {
      quote:
        "According to the Food Industry Cybersecurity Alliance (FICA), there was a 40% increase in online fraud events in the food industry in 2024 as compared to the previous year. The personal and financial information of over a million consumers was compromised in a significant assault that targeted a number of well-known food stores and suppliers in April 2024. fake emails, which frequently seemed to be order confirmations or promotional offers, fooled recipients into disclosing personal information, underscoring the need for enhanced cybersecurity safeguards and more user caution in the sector",
      name: "Social Engineering Frauds in the Food Industry",
      title: "Notable rise in forgery attacks targeting the food sector, with an increase in heavy impact",
    },
    {
      quote:
        "In 2024, the Technology Cybersecurity Council (TCC) relayed credential stuffing incidences in the IT industry increased by 60% over the previous year. Sensitive information belonging to almost 3 million individuals was constrained in a significant incident that occurred in July 2024. malicious scam efforts were used to pose as system upgrades or technical help. Attacks are becoming more frequent, which emphasizes the critical need for comprehensive cybersecurity defenses and raised awareness in the tech sector.",
      name: "A hike in Phishing Exploit in Tech Sector",
      title: "Marked increase in Credential theft targeting technology firms, with a significant rise in scale and severity.",
    },
    {
      quote:
        "Based on a comparison with the previous year, the Education Cybersecurity Bureau (ECB) reports that cybercrime incidences in the education sector increased by 55% in 2024. Over 2 million students' and faculty members' academic and personal information was compromised, causing a loss that struck multiple colleges and institutions in February 2024. The critical need for improved cybersecurity safeguards in education is highlighted by fraud email attempts, which pose as official communications from educational institutions and fool recipients into disclosing login passwords and other sensitive information.",
      name: "Fake Email Trap in Education Sector",
      title: "Significant increase in Fake Email Trap targeting educational institutions, with a notable rise in frequency and impact.",
    },
  ];
  
  export const phishingcompanies = [
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

  

export const feedback = [
    {
        id: "feedback-1",
        content:
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        title: "Founder & Leader",
        
    },
    {
        id: "feedback-2",
        content:
            "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        
    },
    {
        id: "feedback-3",
        content:
            "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        
    },
];

export interface FeatredCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
}

export interface ButtonProps {
  styles?: string;
}

export interface FeedBackProps {
  content: string;
  title: string;
  name: string;
  img: string | any;
}