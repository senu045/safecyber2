import React from "react";

const phishing = () => {
  return (
    <div className="spyware-container bg-[#070114] text-gray-400 p-3 border border-gray-500">
      <h2 className="text-center text-[#cec1d7]  text-7xl mb-4">PHISHING</h2>
      <div className="spyware-content flex">
        <div className="left-container w-1/2 p-4">
          <img
            src="/src/assets/phishing.jpg"
            alt="Spyware"
            className="w-full h-3/4"
          />
        </div>
        <div className="right-container  text-1xl w-1/2 p-4">
          <p>
            Phishing is a type of cyberattack where attackers attempt to deceive
            individuals into divulging sensitive information, such as usernames,
            passwords, credit card numbers, or other personal details. This is
            typically done by masquerading as a trustworthy entity in electronic
            communications, such as emails, messages, or websites. Phishing
            attacks often involve creating fake websites that closely resemble
            legitimate ones or sending emails that appear to come from reputable
            organizations, such as banks, online retailers, or government
            agencies. The goal is to trick recipients into clicking malicious
            links, downloading malware, or providing confidential information.
            Phishing is a prevalent and effective attack method because it preys
            on human psychology and the trust users place in familiar brands or
            organizations.
          </p>
          <br></br>
          <p>
            The consequences of falling victim to phishing attacks can be
            severe. For individuals, the risks include identity theft, financial
            loss, and unauthorized access to personal accounts. For businesses,
            phishing can lead to data breaches, compromised employee
            credentials, and significant financial and reputational damage.
            Attackers can use the information obtained through phishing to
            perpetrate further crimes, such as fraud, blackmail, or the
            dissemination of malware. To combat phishing, individuals and
            organizations must be vigilant and cautious about unsolicited
            communications, especially those requesting sensitive information.
            Employing security measures such as multi-factor authentication,
            email filtering, and employee training on recognizing phishing
            attempts are essential steps in reducing the risk of these attacks.
          </p>
          <br></br>
          <p>Explore more about phishing:</p>
          <ul>
            <li>
              <a
                href="https://www.cisa.gov/topics/cyber-threats-and-advisories/malware-phishing-and-ransomware"
                className="text-gray-400 hover:text-white"
              >
                cisa.gov
              </a>
            </li>
            <li>
              <a
                href="https://us.norton.com/blog/online-scams/types-of-phishing"
                className="text-gray-400 hover:text-white"
              >
                us.norton.com
              </a>
            </li>
            <li>
              <a
                href="https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams"
                className="text-gray-400 hover:text-white"
              >
                consumer.ftc.gov
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default phishing;
