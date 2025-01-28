import { useState } from "react";

// Color Palette
const primaryColor = "#002B5B"; // Deep Blue
const secondaryColor = "#66FF66"; // Cyber Green
const accentColor = "#FF9900"; // Orange
const darkGray = "#1C1C1C"; // Dark Gray
const lightGray = "#F1F1F1"; // Light Gray
const tealColor = "#009688"; // Teal

// Array of Tasks
const tasks = [
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    taskDescription: "Read the Introduction to Cybersecurity and take notes.",
  },
  {
    id: 2,
    title: "Ransomware Awareness",
    question: "What is the most common impact of a ransomware attack?",
    options: ["Data encryption", "Identity theft", "Password leakage"],
    correctAnswer: "Data encryption",
  },
  {
    id: 3,
    title: "Ransomware Simulation",
    taskDescription:
      "Complete the ransomware simulation and follow the steps to understand encryption.",
  },
  {
    id: 4,
    title: "Password Health Checker",
    taskDescription:
      "Use the password health checker to assess the strength of a sample password.",
  },
  {
    id: 5,
    title: "Social Engineering - Introduction",
    taskDescription: "Read the overview of social engineering tactics.",
  },
  {
    id: 6,
    title: "Baiting Tactics",
    question: "What is baiting?",
    options: ["Physical attack", "Digital scam", "Password phishing"],
    correctAnswer: "Digital scam",
  },
  {
    id: 7,
    title: "Phishing Email Simulation",
    taskDescription:
      "Complete the phishing email simulation and identify potential red flags.",
  },
  {
    id: 8,
    title: "Social Engineering Quizzes",
    taskDescription:
      "Complete the quiz on the 8 types of social engineering attacks.",
  },
  {
    id: 9,
    title: "DDoS Attack Awareness",
    question: "What is the main goal of a DDoS attack?",
    options: ["System shutdown", "Overwhelm the server", "Steal data"],
    correctAnswer: "Overwhelm the server",
  },
  {
    id: 10,
    title: "Preventing Malware Attacks",
    taskDescription:
      "Read the steps to prevent malware attacks and create a summary.",
  },
  {
    id: 11,
    title: "Phishing Techniques",
    taskDescription:
      "Learn the various phishing techniques by reviewing the resources.",
  },
  {
    id: 12,
    title: "Spyware Detection",
    question: "What is the first sign of a spyware infection?",
    options: ["Slow computer", "Deleted files", "New wallpaper"],
    correctAnswer: "Slow computer",
  },
  {
    id: 13,
    title: "Zero-Day Exploits Overview",
    taskDescription:
      "Read about zero-day exploits and take notes on real-world cases.",
  },
  {
    id: 14,
    title: "Botnet Simulation",
    taskDescription:
      "Participate in the botnet attack simulation and document your findings.",
  },
  {
    id: 15,
    title: "Recognizing Vishing Attacks",
    question: "What is vishing?",
    options: ["Voice phishing", "Visual scam", "Email phishing"],
    correctAnswer: "Voice phishing",
  },
  {
    id: 16,
    title: "Whaling Attack Simulation",
    taskDescription:
      "Complete the whaling attack simulation and identify vulnerabilities.",
  },
  {
    id: 17,
    title: "Analyzing Watering Hole Attacks",
    taskDescription:
      "Read about watering hole attacks and list 3 signs of such an attack.",
  },
  {
    id: 18,
    title: "Response to a Cyber Attack",
    taskDescription:
      "Prepare a response plan for a simulated ransomware attack.",
  },
  {
    id: 19,
    title: "Interactive Quiz: Ransomware Signs",
    taskDescription:
      "Take the interactive quiz on identifying signs of ransomware.",
  },
  {
    id: 20,
    title: "Course Completion Task",
    taskDescription:
      "Complete a comprehensive quiz to wrap up your learning journey.",
  },

  // Adding 30 more quizzes/tasks
  {
    id: 21,
    title: "Types of Phishing",
    question: "Which of the following is not a type of phishing?",
    options: ["Smishing", "Whaling", "Tailing"],
    correctAnswer: "Tailing",
  },
  {
    id: 22,
    title: "Strong Password Practices",
    taskDescription:
      "Review strong password creation practices and create a checklist.",
  },
  {
    id: 23,
    title: "Impact of Malware",
    question: "Which of the following is a typical impact of malware?",
    options: [
      "System slowdown",
      "Increased internet speed",
      "Enhanced security",
    ],
    correctAnswer: "System slowdown",
  },
  {
    id: 24,
    title: "Identifying Spyware",
    taskDescription:
      "Identify spyware and document the methods used to detect it.",
  },
  {
    id: 25,
    title: "Mitigating DDoS Attacks",
    taskDescription:
      "Read about mitigation techniques for DDoS attacks and summarize the best practices.",
  },
  {
    id: 26,
    title: "Man-in-the-Middle Attack",
    question: "What does a Man-in-the-Middle (MitM) attack involve?",
    options: [
      "Intercepting communications",
      "Stealing passwords",
      "Destroying files",
    ],
    correctAnswer: "Intercepting communications",
  },
  {
    id: 27,
    title: "Best Practices for Protecting Against Phishing",
    taskDescription: "List best practices to protect against phishing emails.",
  },
  {
    id: 28,
    title: "Botnet Identification",
    question: "What is a botnet typically used for?",
    options: [
      "Mining cryptocurrency",
      "Conducting DDoS attacks",
      "Blocking firewalls",
    ],
    correctAnswer: "Conducting DDoS attacks",
  },
  {
    id: 29,
    title: "Recognizing Angler Phishing",
    question: "What does Angler Phishing target?",
    options: ["Social media users", "Bank accounts", "Wi-Fi routers"],
    correctAnswer: "Social media users",
  },
  {
    id: 30,
    title: "Two-Factor Authentication",
    taskDescription:
      "Implement two-factor authentication on an account and explain its importance.",
  },
  {
    id: 31,
    title: "Vishing Attacks",
    taskDescription: "Complete a quiz on the dangers of vishing attacks.",
  },
  {
    id: 32,
    title: "Impact of Baiting",
    question: "What is the main target of a baiting attack?",
    options: ["Curiosity", "Fear", "Excitement"],
    correctAnswer: "Curiosity",
  },
  {
    id: 33,
    title: "Securing Wi-Fi",
    taskDescription:
      "Secure a Wi-Fi connection using recommended protocols and settings.",
  },
  {
    id: 34,
    title: "Recognizing Search Engine Phishing",
    taskDescription:
      "Read about search engine phishing and identify 3 signs of such attacks.",
  },
  {
    id: 35,
    title: "Incident Reporting",
    taskDescription:
      "Simulate reporting a cybersecurity incident using your platform's portal.",
  },
  {
    id: 36,
    title: "Email Spoofing Awareness",
    question: "What does email spoofing involve?",
    options: [
      "Sending emails from a fake address",
      "Creating fake websites",
      "Stealing social media accounts",
    ],
    correctAnswer: "Sending emails from a fake address",
  },
  {
    id: 37,
    title: "Password Policies",
    taskDescription:
      "Review password policies in organizations and suggest improvements.",
  },
  {
    id: 38,
    title: "IoT Security Challenges",
    question: "What is a common security issue with IoT devices?",
    options: [
      "Lack of processing power",
      "Weak default passwords",
      "Limited storage",
    ],
    correctAnswer: "Weak default passwords",
  },
  {
    id: 39,
    title: "Understanding Watering Hole Attacks",
    taskDescription:
      "Learn how watering hole attacks work and list prevention measures.",
  },
  {
    id: 40,
    title: "Whaling Attack Awareness",
    question: "Who is typically targeted in a whaling attack?",
    options: ["Executives", "General employees", "IT staff"],
    correctAnswer: "Executives",
  },
  {
    id: 41,
    title: "Identifying Zero-Day Exploits",
    question: "What makes zero-day exploits so dangerous?",
    options: [
      "They are unpatched vulnerabilities",
      "They delete all files",
      "They slow down the internet",
    ],
    correctAnswer: "They are unpatched vulnerabilities",
  },
  {
    id: 42,
    title: "Security Best Practices for Remote Work",
    taskDescription:
      "List 5 best practices for securing remote work environments.",
  },
  {
    id: 43,
    title: "Analyzing Brute Force Attacks",
    taskDescription:
      "Read about brute force attacks and explain how to defend against them.",
  },
  {
    id: 44,
    title: "Ransomware Prevention",
    taskDescription:
      "Complete the task of listing 5 ransomware prevention strategies.",
  },
  {
    id: 45,
    title: "Understanding Social Engineering",
    question: "Which of the following is a type of social engineering?",
    options: ["Smishing", "Shoulder surfing", "Both"],
    correctAnswer: "Both",
  },
  {
    id: 46,
    title: "Importance of Encryption",
    taskDescription:
      "Read about the importance of encryption in data protection.",
  },
  {
    id: 47,
    title: "Spyware vs. Adware",
    question: "What is the difference between spyware and adware?",
    options: [
      "Spyware steals information, adware shows ads",
      "Adware steals passwords, spyware shows ads",
      "Both do the same thing",
    ],
    correctAnswer: "Spyware steals information, adware shows ads",
  },
  {
    id: 48,
    title: "Phishing Attack Simulation",
    taskDescription:
      "Participate in the phishing attack simulation and analyze your results.",
  },
  {
    id: 49,
    title: "Preventing Insider Threats",
    taskDescription:
      "Identify 3 steps to reduce insider threats in an organization.",
  },
  {
    id: 50,
    title: "Course Final Quiz",
    taskDescription:
      "Complete the final comprehensive quiz covering all cybersecurity topics.",
  },
];

// Progress Bar Component
const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div
        className="bg-[#66FF66] h-2.5 rounded-full" // Cyber Green for progress
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

// Course Module Component
const CourseModuleComponent = () => {
  const [currentTask, setCurrentTask] = useState(0);
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState("");

  const handleAnswerSubmit = (taskId, selectedAnswer) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task.correctAnswer === selectedAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect. Keep learning!");
    }

    setAnswers({ ...answers, [taskId]: selectedAnswer });
    const completedTasks = Object.keys(answers).length + 1;
    setProgress((completedTasks / tasks.length) * 100);

    setTimeout(() => {
      setCurrentTask(currentTask + 1);
      setFeedback("");
    }, 2000);
  };

  const handleTaskCompletion = (taskId) => {
    setAnswers({ ...answers, [taskId]: "Completed" });
    const completedTasks = Object.keys(answers).length + 1;
    setProgress((completedTasks / tasks.length) * 100);

    setCurrentTask(currentTask + 1);
  };

  const current = tasks[currentTask];

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2
        className="text-3xl font-bold text-center mb-6"
        style={{ color: primaryColor }}
      >
        Cybersecurity Course Module
      </h2>

      <ProgressBar progress={progress} />
      <p className="text-center mb-4" style={{ color: "green" }}>
        Progress: {Math.round(progress)}%
      </p>

      {current ? (
        <div
          className="bg-white p-6 rounded-lg shadow-md"
          style={{ borderColor: primaryColor }}
        >
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: accentColor }}
          >
            {current.title}
          </h3>
          {current.question ? (
            <div>
              <p className="mb-4" style={{ color: darkGray }}>
                {current.question}
              </p>
              {current.options.map((option, index) => (
                <button
                  key={index}
                  className="block w-full mb-2 py-2 px-4 rounded-lg"
                  style={{
                    backgroundColor: lightGray,
                    border: `1px solid ${primaryColor}`,
                    color: "black", // Set the multiple-choice answer text to black
                  }}
                  onClick={() => handleAnswerSubmit(current.id, option)}
                >
                  {option}
                </button>
              ))}
              <p className="mt-4 font-semibold" style={{ color: tealColor }}>
                {feedback}
              </p>
            </div>
          ) : (
            <div>
              <p style={{ color: darkGray }}>{current.taskDescription}</p>
              <button
                className="mt-4 py-2 px-4 rounded-lg"
                style={{ backgroundColor: secondaryColor, color: darkGray }}
                onClick={() => handleTaskCompletion(current.id)}
              >
                Mark Task as Completed
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center p-8 bg-green-100 rounded-lg">
          <h3
            className="text-2xl font-semibold"
            style={{ color: primaryColor }}
          >
            Well done!
          </h3>
          <p className="text-lg" style={{ color: tealColor }}>
            You have completed all tasks in the course.
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseModuleComponent;
