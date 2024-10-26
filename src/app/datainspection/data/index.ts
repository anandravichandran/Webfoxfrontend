
export const navItems = [
    { name: "Home", link: "/" },
    { name: "Data Inspection", link: "/datainspection" },
    { name: "Phishing Website ", link: "/phishingwebsite" },
    {name : "Data Leakage", link:
      "/dataleakage"
    },
    { name: "Malware Analysis", link: "/malwareanalysis" },
  ];
  
  const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;

export const InspectionTestimonials = [
  {
    quote:
      "A substantial hospital network suffered a data breach in May 2024 that made the medical records of more than 1.8 million patients public. Due to inadequate examination procedures that were unable to identify illegal access, the breach happened. The aforementioned occurrence highlights the pressing requirement for more rigorous auditing methods and continuous monitoring to safeguard confidential patient data within the healthcare industry.",
      name: "Data Inspection Breach in Healthcare",
      title: "The breach happened as a result of inadequate  inspection that overlooked unwanted access.",
      img:"/datainspectioncasestduy2.jpeg",
  },
  {
    quote:
      "The Financial Cybersecurity Authority (FCA) reported in 2024 that data checking failures had increased by 35% from 2023 to 2024. Over 2.5 million clients' financial information was stolen in June due to a massive  breach at a well-known worldwide bank. The incident was ascribed to insufficient content inspection systems that were unable to promptly identify unauthorized access, underscoring the pressing necessity for improved log analysis procedures and monitoring systems within the banking sector.",
      name: "Rise in Information Inspection Failures in Banking Department",
      title: "Inadequate Content Evaluation measures that failed to quickly identify unauthorized access were blamed for the attack.",
      img:"/datainspectioncasestudy3.jpeg",
  },
  {
    quote:
      "A critical hack that affected a well-known international food retailer in March 2024 exposed over 1.2 million consumers' private and financial information. Insufficient forensic inspection procedures that did not identify illegal access in a timely manner led to the breach. Stronger Data Evaluation procedures and real-time monitoring are desperately needed to protect consumer information in the food industry, as this tragedy has shown.",
      name:"Content Evaluation Malfunctions in Food Industry",
      title: "The hack was brought about by insufficient Data Appraisal procedures that missed detecting unauthorized access promptly.",
      img:"/Datainspectioncasestudy.jpeg"
  },
  {
    quote:
      "Data Quality Check problems in the technology sector increased by 45% in 2024 over the previous year, per a report published by the Technology Cybersecurity Council (TCC). Over 4 million individuals' personal data was compromised in a particular importance due to resultant that occurred in July 2024 at a reputable cloud services firm. Stronger Information Review systems and real-time monitoring in the tech sector are important, as the hack was traced back to insufficient Information Inspection procedures that were unable to identify unauthorized access.",
      name: "Surge in Information Review Blunders in Tech Category",
      title: "Weak Data Verification systems that were unable to detect illegal access in time were linked to the hack.",
      img:"/datainsepction4.jpeg",
  },
  {
    quote:
      "As per the Education Cybersecurity Bureau (ECB), there was a fifty percent increase in data inspection failures in the education sector in 2024 when comparing the previous year. Over 1.7 million students' and faculty members' academic and personal information was compromised in a decisive hack that affected several institutions in April 2024. Because out-of-date Information Audit processes were the source of the breach, it is imperative that monitoring and inspection systems be upgraded in order to protect sensitive student data in educational institutions.",
    name: "Data Monitoring Setbacks in Educational field",
    title: "Outdated Information Review procedures that were unable to detect confidential data in a timely manner were the cause of the breach.",
    img:"/hospitalattack.png",
  },
];

export const Incompanies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/datainspectiongif.gif",
    // nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/Processor Malware.png",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/data-loss.png",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/Mail Malware.png",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/file_leakage.png",
    nameImg: "/dockerName.svg",
  },
];
