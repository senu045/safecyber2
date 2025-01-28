const SolutionsSocialeng = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-[#070114]">
      {/* Left side with topic and bullet points */}
      <div className="w-full md:w-2/3 p-6 text-justify">
        <h2 className="text-5xl font-bold mb-8 text-[#909090]">
          Solutions-Social Engineering
        </h2>
        <ul className="list-disc list-inside space-y-2  text-justify text-white">
          <p style={{ textDecoration: "underline" }}>
            Solution 1: Employee Education and Awareness
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Regular cybersecurity training is crucial to equip
              employees with the knowledge to recognize and resist social
              engineering tactics.
            </li>
            <li className="text-[#909090]">
              Benefits: Enhances employee awareness, reduces susceptibility to
              attacks.
            </li>
            <li className="text-[#909090]">
              Example: Phishing simulations, interactive training modules.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 2: Strong Password Management
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Using complex and unique passwords for all accounts
              helps prevent unauthorized access.
            </li>
            <li className="text-[#909090]">
              Benefits: Reduces the risk of password theft and subsequent social
              engineering attacks.
            </li>
            <li className="text-[#909090]">
              Example: Password managers like LastPass, 1Password.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 3: Social Media Security
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Protecting personal and professional information on
              social media platforms is essential.
            </li>
            <li className="text-[#909090]">
              Benefits: Reduces the risk of social engineering attacks that
              leverage publicly available information.
            </li>
            <li className="text-[#909090]">
              Example: Reviewing privacy settings, limiting information sharing.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 4: Access Controls
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Implementing strong access controls restricts
              unauthorized access to sensitive information and systems.
            </li>
            <li className="text-[#909090]">
              Benefits: Limits the potential damage from social engineering
              attacks.
            </li>
            <li className="text-[#909090]">
              Example: Role-based access control (RBAC), multi-factor
              authentication (MFA).
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 5: Vigilance and Skepticism
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Encouraging a culture of skepticism and vigilance
              among employees is crucial.
            </li>
            <li className="text-[#909090]">
              Benefits: Reduces the likelihood of falling victim to social
              engineering tactics.
            </li>
            <li className="text-[#909090]">
              Example: Employee training on suspicious emails, phone calls, and
              requests for information.
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

export default SolutionsSocialeng;
