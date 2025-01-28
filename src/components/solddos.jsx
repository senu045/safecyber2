const SolutionsDdos = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-[#070114]">
      {/* Left side with topic and bullet points */}
      <div className="w-full md:w-2/3 p-6 text-justify">
        <h2 className="text-5xl font-bold mb-8 text-[#909090]">
          Solutions-DDoS Attack
        </h2>
        <ul className="list-disc list-inside space-y-2  text-justify text-white">
          <p style={{ textDecoration: "underline" }}>
            Solution 1: DDoS Protection Services
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Employing a DDoS protection service provides
              specialized defense against attacks.
            </li>
            <li className="text-[#909090]">
              Benefits: Real-time monitoring, attack mitigation, and traffic
              scrubbing.
            </li>
            <li className="text-[#909090]">
              Example: Cloudflare, Akamai, Imperva
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 2: Network Architecture and Design
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Implementing network design principles to mitigate
              DDoS attacks, such as load balancing and redundancy.
            </li>
            <li className="text-[#909090]">
              Benefits: Distributes traffic across multiple servers, preventing
              overload on a single system.
            </li>
            <li className="text-[#909090]">
              Example: Network load balancers, redundant servers.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 3: Rate Limiting
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Limiting the number of requests a system can handle
              within a specific timeframe.
            </li>
            <li className="text-[#909090]">
              Benefits: Prevents resource exhaustion, protects against
              low-volume but high-impact attacks.
            </li>
            <li className="text-[#909090]">
              Example: Implementing rate limiting at the application layer or
              network layer.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 4: Intrusion Detection and Prevention Systems (IDPS)
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Deploying IDPS solutions to detect and prevent DDoS
              attacks in real-time.
            </li>
            <li className="text-[#909090]">
              Benefits: Identifies anomalous traffic patterns, blocks malicious
              traffic, and provides alerts.
            </li>
            <li className="text-[#909090]">
              Example: Snort, Suricata, commercial IDPS solutions.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 5: Cloud-Based DDoS Mitigation
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Utilizing cloud-based services for DDoS protection.
            </li>
            <li className="text-[#909090]">
              Benefits: Scalable protection, automatic mitigation, and expert
              support.
            </li>
            <li className="text-[#909090]">
              Example: Cloud providers with DDoS protection services (AWS,
              Azure, GCP).
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

export default SolutionsDdos;
