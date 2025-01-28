const spyware = () => {
  return (
    <div className="spyware-container bg-[#070114] text-gray-400 p-3 border border-gray-500">
      <h2 className="text-center text-[#cec1d7]  text-7xl mb-4">SPYWARE</h2>
      <div className="spyware-content flex">
        <div className="left-container w-1/2 p-4">
          <img
            src="/src/assets/spywarelast.jpg"
            alt="Spyware"
            className="w-full h-3/4"
          />
        </div>
        <div className="right-container  text-1xl w-1/2 p-4">
          <p>
            Spyware is a type of malicious software designed to secretly monitor
            and collect information from a user's computer or device. It often
            infiltrates systems without the user's knowledge, typically by
            bundling itself with legitimate software downloads, phishing emails,
            or compromised websites. Once installed, spyware can track a wide
            range of activities, including browsing habits, keystrokes, and
            personal information such as passwords and credit card numbers. This
            data is then sent to third parties, often for malicious purposes
            like identity theft, financial fraud, or unauthorized data selling.
            Spyware poses a significant privacy and security risk, making it
            essential for users to protect their systems with up-to-date
            antivirus software and cautious online behavior.
          </p>
          <br></br>
          <p>
            The impact of spyware can be profound, affecting not only individual
            users but also businesses and organizations. In addition to personal
            data theft, spyware can lead to system slowdowns, unwanted
            advertisements, and unauthorized access to sensitive corporate
            information. Some advanced spyware variants can even take control of
            webcams and microphones, creating potential avenues for surveillance
            and blackmail. The stealthy nature of spyware makes it particularly
            challenging to detect and remove, often requiring specialized tools
            to thoroughly clean an infected system. As cyber threats continue to
            evolve, staying informed about spyware and implementing robust
            security measures are crucial steps in safeguarding digital privacy
            and integrity.
          </p>
          <br></br>
          <p>Explore more about spyware:</p>
          <ul>
            <li>
              <a
                href="https://us.norton.com/blog/malware/spyware"
                className="text-gray-400 hover:text-white"
              >
                us.norton.com
              </a>
            </li>
            <li>
              <a
                href="https://www.fortinet.com/resources/cyberglossary/spyware"
                className="text-gray-400 hover:text-white"
              >
                fortinet.com
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Spyware"
                className="text-gray-400 hover:text-white"
              >
                wikipedia.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default spyware;
