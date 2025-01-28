const SolutionsSpyware = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-[#070114]">
      {/* Left side with topic and bullet points */}
      <div className="w-full md:w-2/3 p-6 text-justify">
        <h2 className="text-5xl font-bold mb-8 text-[#909090]">
          Solutions-Spyware
        </h2>
        <ul className="list-disc list-inside space-y-2  text-justify text-white">
          <p style={{ textDecoration: "underline" }}>
            Solution 1: Robust Antivirus Software
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: A comprehensive antivirus solution is essential for
              detecting and removing spyware.
            </li>
            <li className="text-[#909090]">
              Benefits: Real-time protection, malware scanning, and removal
              capabilities.
            </li>
            <li className="text-[#909090]">
              Example: Norton, McAfee, Bitdefender
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 2: Regular Software Updates
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Keeping operating systems and applications up-to-date
              patches vulnerabilities that spyware can exploit.
            </li>
            <li className="text-[#909090]">
              Benefits: Reduces the attack surface for spyware, improves overall
              system security.
            </li>
            <li className="text-[#909090]">
              Example: Windows Update, Apple Software Update.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>Solution 3: Firewalls</p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: A firewall helps protect your device from
              unauthorized access and potential spyware infiltration.
            </li>
            <li className="text-[#909090]">
              Benefits: Blocks malicious traffic, monitors network activity.
            </li>
            <li className="text-[#909090]">
              Example: Windows Firewall, macOS Firewall.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 4: User Education and Awareness
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Educating users about spyware threats and prevention
              is crucial.
            </li>
            <li className="text-[#909090]">
              Benefits: Increases user vigilance, reduces the risk of clicking
              on malicious links or downloading infected files.
            </li>
            <li className="text-[#909090]">
              Example: Cybersecurity awareness training programs, phishing
              simulations.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 5: Strong Password Management
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Using complex and unique passwords for all accounts
              helps prevent unauthorized access and spyware installation.
            </li>
            <li className="text-[#909090]">
              Benefits: Reduces the risk of password theft and subsequent
              spyware attacks.
            </li>
            <li className="text-[#909090]">
              Example: Password managers like LastPass, 1Password.
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

export default SolutionsSpyware;
