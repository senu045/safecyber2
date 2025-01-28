import Card from "./Card.jsx";

const Cards = () => {
  return (
    <div className="flex flex-col items-center space-y-10 mt-10 mb-10">
      <div className="flex justify-center space-x-8">
        <Card
          topic="Ransomware"
          imageSrc="/src/assets/ransomware.jpeg"
          description="Ransomware is a type of malicious software that encrypts files on a victim's computer, demanding payment for their release."
          link="/ransomware"
        />
        <Card
          topic="Social Engineering"
          imageSrc="/src/assets/se.jpg"
          description="Social engineering manipulates individuals into revealing confidential information or compromising security."
          link="/Socialeng"
        />
        <Card
          topic="Malware"
          imageSrc="/src/assets/Malware-Attacks.jpg"
          description="Malware, short for malicious software, is designed to disrupt, damage, or gain unauthorized access to computer systems and data."
          link="/ransomware"
        />
        <Card
          topic="DDoS"
          imageSrc="/src/assets/ddos.jpg"
          description="A Distributed Denial of Service (DDoS) attack floods a network or website with an overwhelming amount of traffic, rendering it inaccessible to users."
          link="/websimulation"
        />
      </div>
      <div className="flex justify-center space-x-8">
        <Card
          topic="Phishing"
          imageSrc="/src/assets/phishing1.jpg"
          description="Phishing attacks trick users into revealing personal information or installing malicious software by pretending to be a legitimate entity."
          link="/phishing"
        />
        <Card
          topic="Spyware"
          imageSrc="/src/assets/spyware.webp"
          description="Spyware is a type of malware that secretly monitors and collects user information without their knowledge or consent."
          link="/spyware"
        />
        <Card
          topic="Botnets"
          imageSrc="/src/assets/botnets.jpeg"
          description="A botnet is a network of infected computers controlled remotely to perform malicious activities, such as sending spam or launching DDoS attacks."
          link="/botnets"
        />
        <Card
          topic="Zero-Day Exploits"
          imageSrc="/src/assets/Zero-Day-Attack.jpg"
          description="Zero-day exploits target unknown software vulnerabilities, giving developers no time to fix them before attacks."
          link="/zeroexploits"
        />
      </div>
    </div>
  );
};

export default Cards;
