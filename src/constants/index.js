import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  AI,
  cloudcomputing,
  MITM,
  phishing,
  ransomware,
  social,
  supplychainattack,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  phishing1,
  MW,
  SV,
  RDP,
  FA,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Threats",
    url: "threats",
  },
  {
    id: "1",
    title: "Solutions",
    url: "solutions",
  },
  {
    id: "2",
    title: "Resources",
    url: "resources",
  },
  {
    id: "3",
    title: "About us",
    url: "about-us",
  },
  {
    id: "4",
    title: "New account",
    url: "signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const indicators = [
  {
    title: "Unusual file extensions",
    description: "File extensions such as .encrypted or .locked.",
    link: "https://www.beforecrypt.com/en/list-of-known-ransomware-file-extensions/#understanding-file-extensions", // Add your specific link here
  },
  {
    title: "Significant decrease in system performance",
    description: "Your system may slow down noticeably.",
    link: "https://bcs365.com/insights/how-to-know-if-youve-been-infected-by-ransomware-8-signs/", // Add your specific link here
  },
  {
    title: "Ransom notes appearing in file directories",
    description: "Ransom notes may appear in file directories.",
    link: "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/ransom-notes-know-what-ransomware-hit-you", // Add your specific link here
  },
  {
    title: "Inability to access files or applications",
    description: "You may be unable to open certain files or applications.",
    link: "https://malwaretips.com/blogs/remove-ransomware-virus/", // Add your specific link here
  },
  {
    title: "Unexpected system restarts or crashes",
    description: "Your system may restart or crash unexpectedly.",
    link: "https://www.lifewire.com/fix-computer-randomly-restarts-5220171", // Add your specific link here
  },
];

// src/constants/index.jsx
// src/constants/index.js
export const details = [
  {
    id: "0",
    text: "In today's digital world, cybersecurity is a shared responsibility. Together, we can learn, share knowledge, and create a safer online environment for everyone. We believe that everyone deserves to feel secure online.",
  },
  {
    id: "1",
    text1: "CS Students - University of Kelaniya Passionate Cybersecurity Team",
    text2:
      "Building Awareness, Building Security Expands on the awareness aspect.",
  },
  {
    id: "2",
    text1: "Learn, Share, Stay Secure - Simple call to action.",
    text2: "online",
  },
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Experience seamless integration of cutting-edge technology and robust security measures, tailored for teams seeking heightened efficiency and fortified protection against digital threats.";

export const collabContent = [
  {
    id: "0",
    title: "Empower Your Cyber Defense",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "AI",
    icon: AI,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Cloud-computing",
    icon: cloudcomputing,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "MITM",
    icon: MITM,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "phishing",
    icon: phishing,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "ransomware",
    icon: ransomware,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "social",
    icon: social,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "supplychainattack",
    icon: supplychainattack,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "supplychainattack",
    icon: supplychainattack,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Enhance cybersecurity for individuals & small businesses.",
    price: "0",
    features: [
      "Access to basic cybersecurity courses and resources.",
      "Limited access to the ransomware attack simulation.",
      "Email support.",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description:
      "Designed for professionals and organizations seeking comprehensive ",
    price: "9.99",
    features: [
      "Full access to all cybersecurity courses and resources.",
      "Unlimited access to the ransomware attack simulation with advanced scenarios.",
      "Priority email and chat support.",
      "Monthly cybersecurity newsletters and updates.",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Customized cybersecurity for enterprises with complex needs.",
    price: null,
    features: [
      "Customizable training modules and content.",
      "Dedicated account manager and priority support.",
      "Access for multiple users with role-based permissions.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Our bright bot offers fast, intelligent answers to any cybersecurity question you might have.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "Our updates keep you informed about current threats, allowing you to take proactive measures to protect yourself.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Our bot provides comprehensive threat information and personalized security tips to enhance your security.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Improve your ability to identify and respond to threats with a cybersecurity test.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Improve Security",
    text: "Discover cyber threats and ways to improve online security by understanding different types of threats and understanding hacking tactics.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Build strong",
    text: " Detect strategies to create a robust online security plan, safeguarding devices and information from cybercrime risks.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const mission = [
  {
    id: "0",
    title: "Our Mission",
    text: "Empowering individuals and organizations to stay vigilant and secure in the ever-evolving digital landscape. We achieve this by providing engaging, informative, and accessible cybersecurity awareness training that equips users with the knowledge and skills to identify, prevent, and respond to cyber threats.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Our Vision",
    text: "We envision a world where everyone possesses the necessary cybersecurity awareness to navigate the online environment with confidence and minimize the risk of cyberattacks. We strive to be the leading provider of innovative and effective cybersecurity awareness training solutions, fostering a global culture of security consciousness.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const RansomwareMethods = [
  {
    id: "0",
    title: "Encrypt files",
    text: "Makes files unreadable",
    ways: "Software Vulnerabilities",
    description:
      "Software vulnerabilities are weaknesses in software that attackers exploit to gain unauthorized access. To avoid them, regularly update your software, use strong passwords, and stay informed about security threats.",
    iconUrl: benefitIcon1,
  },
  {
    id: "1",
    title: "Targets organizations",
    text: "Goes after businesses",
    iconUrl: benefitIcon2,
    ways: "Phishing Attacks",
    description:
      "Phishing attacks, by deceiving users into interacting with malicious content, serve as the gateway for ransomware intrusion. These attacks exploit vulnerabilities in system security, encrypting files and demanding ransom for decryption. Hence, combating phishing is vital to thwart ransomware incidents.",
    light: true,
  },
  {
    id: "2",
    title: "Attacks servers",
    text: "Hits network systems",
    ways: "Weak Passwords",
    iconUrl: benefitIcon3,
  },
  {
    id: "3",
    title: "Infects personal devices",
    text: "Affects phones and tablets",
    ways: "Drive-by Downloads",
    iconUrl: benefitIcon4,
  },
  {
    id: "4",
    title: "Ransoms vary",
    text: "Ransom amounts differ",
    ways: "Malvertising",
    iconUrl: benefitIcon2,
  },
];

export const SpreadMethods = [
  {
    id: "0",
    title: "Phishing",
    text: "Tricks users into downloading malware",
    iconUrl: phishing1,
  },
  {
    id: "1",
    title: "Malicious websites",
    text: "Infects visitors with drive-by downloads",
    iconUrl: MW,
  },
  {
    id: "2",
    title: "Software vulnerabilities",
    text: "Exploits unpatched application and OS",
    iconUrl: SV,
  },
  {
    id: "3",
    title: "Remote desktop protocol",
    text: "Allows attackers to brute force login",
    iconUrl: RDP,
  },
  {
    id: "4",
    title: "Fileless attacks",
    text: "Runs malwawre in memory without a file",
    iconUrl: FA,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
