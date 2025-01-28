const SolutionsRansomeware = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-[#070114]">
      {/* Left side with topic and bullet points */}
      <div className="w-full md:w-2/3 p-6 text-justify">
        <h2 className="text-5xl font-bold mb-8 text-[#909090]">
          Solutions-Ransomware
        </h2>
        <ul className="list-disc list-inside space-y-2  text-justify text-white">
          <p style={{ textDecoration: "underline" }}>
            Solution 1: Robust Backups
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Regular backups of your data are crucial for recovery
              in case of a ransomware attack.
            </li>
            <li className="text-[#909090]">
              Benefits: Protects critical data from encryption, enables system
              restoration.
            </li>
            <li className="text-[#909090]">
              Example: Cloud backup services, external hard drives.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 2: Strong Password Management
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Using complex and unique passwords for each account
              helps prevent unauthorized access.
            </li>
            <li className="text-[#909090]">
              Benefits: Reduces the risk of password theft and subsequent
              ransomware attacks.
            </li>
            <li className="text-[#909090]">
              Example: Password managers like LastPass, 1Password.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 3: Network Security
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Implementing network security measures helps protect
              against ransomware attacks.
            </li>
            <li className="text-[#909090]">
              Benefits: Prevents unauthorized access, detects suspicious
              activity, and contains the spread of malware.
            </li>
            <li className="text-[#909090]">
              Example: Firewalls, intrusion detection systems (IDS), intrusion
              prevention systems (IPS).
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 4: Endpoint Protection
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Antivirus and anti-malware software are essential for
              protecting endpoints from ransomware.
            </li>
            <li className="text-[#909090]">
              Benefits: Detects and blocks ransomware attacks, prevents malware
              execution.
            </li>
            <li className="text-[#909090]">
              Example: McAfee, Norton, Bitdefender.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 5: Incident Response Plan
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Having a well-defined incident response plan helps
              organizations respond effectively to ransomware attacks.
            </li>
            <li className="text-[#909090]">
              Benefits: Minimizes downtime, reduces data loss, and speeds up
              recovery.
            </li>
            <li className="text-[#909090]">
              Example: Crisis communication plan, data recovery procedures.
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
          <source src="/src/assets/solv2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SolutionsRansomeware;
