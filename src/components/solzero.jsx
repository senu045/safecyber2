const SolutionsZero = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-[#070114]">
      {/* Left side with topic and bullet points */}
      <div className="w-full md:w-2/3 p-6 text-justify">
        <h2 className="text-5xl font-bold mb-8 text-[#909090]">
          Solutions-Zero-Day Exploits
        </h2>
        <ul className="list-disc list-inside space-y-2  text-justify text-white">
          <p style={{ textDecoration: "underline" }}>
            Solution 1: Proactive Patch Management
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Regularly applying software updates and patches is
              crucial to address known vulnerabilities.
            </li>
            <li className="text-[#909090]">
              Benefits: Reduces the attack surface, minimizes the window of
              opportunity for exploit.
            </li>
            <li className="text-[#909090]">
              Example: Windows Update, software vendor update notifications.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 2: Threat Intelligence
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Staying informed about the latest threats and
              vulnerabilities is essential for proactive defense.
            </li>
            <li className="text-[#909090]">
              Benefits: Early detection of potential attacks, enables timely
              response.
            </li>
            <li className="text-[#909090]">
              Example: Threat intelligence feeds, cybersecurity research
              reports.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 3: Network Segmentation
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Isolating critical systems and data reduces the
              potential impact of a successful zero-day exploit.
            </li>
            <li className="text-[#909090]">
              Benefits: Limits lateral movement of attackers, contains damage.
            </li>
            <li className="text-[#909090]">
              Example: Virtual LANs (VLANs), network segmentation firewalls.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 4: Intrusion Detection and Prevention Systems (IDPS)
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Deploying IDPS solutions can help identify and block
              zero-day attacks.
            </li>
            <li className="text-[#909090]">
              Benefits: Detects anomalous network traffic, prevents unauthorized
              access.
            </li>
            <li className="text-[#909090]">
              Example: Snort, Suricata, commercial IDPS solutions.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 5: Endpoint Detection and Response (EDR)
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: EDR solutions provide advanced protection against
              zero-day threats by monitoring endpoint activity.
            </li>
            <li className="text-[#909090]">
              Benefits: Detects and responds to malicious behavior, investigates
              incidents.
            </li>
            <li className="text-[#909090]">
              Example: CrowdStrike, Carbon Black, SentinelOne.
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
          <source src="/src/assets/solzero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SolutionsZero;
