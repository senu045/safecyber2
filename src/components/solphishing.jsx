const SolutionsPhishing = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-[#070114]">
      {/* Left side with topic and bullet points */}
      <div className="w-full md:w-2/3 p-6 text-justify">
        <h2 className="text-5xl font-bold mb-8 text-[#909090]">
          Solutions-Phishing
        </h2>
        <ul className="list-disc list-inside space-y-2  text-justify text-white">
          <p style={{ textDecoration: "underline" }}>
            Solution 1: User Education and Awareness
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Empowering users to recognize phishing attempts is
              crucial.
            </li>
            <li className="text-[#909090]">
              Benefits: Reduces the likelihood of clicking on malicious links or
              downloading attachments.
            </li>
            <li className="text-[#909090]">
              Example: Phishing simulations, training programs, awareness
              campaigns.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 2: Email Security Solutions
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Implementing email security solutions helps filter
              out phishing emails.
            </li>
            <li className="text-[#909090]">
              Benefits: Protects against phishing attacks, reduces spam.
            </li>
            <li className="text-[#909090]">
              Example: Email filtering, spam blockers, anti-phishing software.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 3: Strong Password Management
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Using complex and unique passwords for all accounts
              helps prevent unauthorized access through phishing attacks.
            </li>
            <li className="text-[#909090]">
              Benefits: Reduces the risk of password theft, protects online
              accounts.
            </li>
            <li className="text-[#909090]">
              Example: Password managers like LastPass, 1Password.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 4: Employee Training
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Regular cybersecurity training for employees can help
              them identify phishing attempts.
            </li>
            <li className="text-[#909090]">
              Benefits: Enhances employee awareness, reduces susceptibility to
              attacks.
            </li>
            <li className="text-[#909090]">
              Example: Phishing simulations, social engineering training.
            </li>
          </ul>

          <p style={{ textDecoration: "underline" }}>
            Solution 5: Verification Processes
          </p>
          <ul className="text-2xl">
            <li className="text-[#909090]">
              Description: Implementing additional verification steps for
              sensitive actions can deter phishing attempts.
            </li>
            <li className="text-[#909090]">
              Benefits: Protects accounts from unauthorized access, reduces the
              success of phishing attacks.
            </li>
            <li className="text-[#909090]">
              Example: Two-factor authentication (2FA), multi-factor
              authentication (MFA).
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
          <source src="/src/assets/solvphish.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SolutionsPhishing;
