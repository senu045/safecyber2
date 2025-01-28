const SolutionsBotnets = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-[#070114]">
      {/* Left side with topic and bullet points */}
      <div className="w-full md:w-2/3 p-6 text-justify">
        <h2 className="text-5xl font-bold mb-8 text-[#909090]">
          Solutions-Botnets
        </h2>
        <ul className="list-disc list-inside space-y-2  text-justify text-white">
          <p style={{ textDecoration: "underline" }}>
            Solution 1: Network Segmentation
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Dividing a network into smaller subnets isolates
              critical systems and limits the potential damage from a botnet
              attack.
            </li>
            <li className="text-[#909090]">
              Benefits: Reduces the attack surface, slows down lateral movement
              of malware.
            </li>
            <li className="text-[#909090]">
              Example: Virtual LANs (VLANs), network segmentation firewalls.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 2: Intrusion Detection and Prevention Systems (IDPS)
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Deploying IDPS solutions to detect and prevent botnet
              activity.
            </li>
            <li className="text-[#909090]">
              Benefits: Identifies suspicious traffic patterns, blocks malicious
              connections.
            </li>
            <li className="text-[#909090]">
              Example: Snort, Suricata, commercial IDPS solutions.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 3: Endpoint Security
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Strong endpoint protection is crucial for preventing
              botnet infection.
            </li>
            <li className="text-[#909090]">
              Benefits: Protects devices from malware, detects and removes
              botnet components.
            </li>
            <li className="text-[#909090]">
              Example: Antivirus software, endpoint detection and response (EDR)
              solutions.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 4: Vulnerability Management
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Regularly identifying and patching vulnerabilities
              reduces the risk of botnet infections.
            </li>
            <li className="text-[#909090]">
              Benefits: Prevents exploitation of weaknesses, strengthens overall
              system security.
            </li>
            <li className="text-[#909090]">
              Example: Vulnerability scanning tools, patch management processes.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 5: User Education and Awareness
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Training employees about botnet threats and
              prevention is essential.
            </li>
            <li className="text-[#909090]">
              Benefits: Reduces the likelihood of clicking on malicious links or
              downloading infected files.
            </li>
            <li className="text-[#909090]">
              Example: Cybersecurity awareness training programs, phishing
              simulations.
            </li>
          </ul>
        </ul>
      </div>

      {/* Right side with the video */}
      <div className="w-full md:w-1/3 p-6 flex justify-center items-center">
        <video
          className="w-full h-auto object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/src/assets/solv3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SolutionsBotnets;
