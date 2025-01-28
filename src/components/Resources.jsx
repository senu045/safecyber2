import Heading from "./Heading";
export default function Resourses() {
  return (
    <div>
      <div className="relative w-full">
        {/* First Container */}
        <div className="relative w-full h-screen flex flex-col justify-center items-center">
        <video
  className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
  src="src/assets/resvideo.mp4"
  autoPlay
  loop
  muted
/>

          {/* Content that should overlay the video */}
          <div className="relative z-10 text-center px-4">
            <Heading
              className="md:max-w-md lg:max-w-2xl text-white"
              title="Our Mission is to shine a Light on Cybersecurity Awareness"
            />
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-white">
              Learn Together, Stay Secure: Access Resources to Build Your
              Defenses. This highlights the user's role in learning and building
              security awareness.
            </p>
          </div>
        </div>

        {/* Second Container */}
        <div className="flex flex-wrap justify-center gap-14 mt-0 p-4 bg-[#34204c]">
          {/* Second Container */}

          <div className="w-[400px] h-auto bg-[#d4c8df] shadow-md flex flex-col p-9 mb-4">
            <h2 className="text-black font-bold text-2xl mb-6">
              Social Engineering Resources
            </h2>

            <section className="mb-6">
              <h3 className="font-semibold text-lg text-black mb-3">
                Understanding Social Engineering
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    href="https://www.sans.org/white-papers/529/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    SANS Institute InfoSec Reading Room: Social Engineering
                    Attacks
                  </a>
                </li>
                <li>
                  <a
                    href="https://tresorit.com/blog/keeping-data-safe-in-social-engineering-attacks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    CSO Online: What is Social Engineering?
                  </a>
                </li>
                <li>
                  <a
                    href="https://insights.sei.cmu.edu/documents/2457/2017_015_001_452233.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Carnegie Mellon University CERT: Social Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=5G-TzHELOkk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    TED Talk: Kevin Mitnick - The Art of Deception (18 minutes)
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="font-semibold text-lg text-black mb-3">
                Types of Social Engineering Attacks
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    href="https://blog.knowbe4.com/social-engineering-number-one-cybersecurity-problem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    KnowBe4: Top 10 Social Engineering Attacks
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.checkpoint.com/cyber-hub/threat-prevention/social-engineering-attacks/social-engineering-vs-phishing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Infosec Institute: Phishing vs. Social Engineering
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="font-semibold text-lg text-black mb-3">
                Identifying and Avoiding Social Engineering
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    href="https://www.austintexas.gov/sites/default/files/files/HR/NEO/social-engineering.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    US-CERT: Social Engineering Red Flags
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nist.gov/privacy-framework/nist-sp-800-61"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    NIST—Digital Identity Guidelines (SP 800-61)
                  </a>
                </li>
                <li>
                  <a
                    href="https://staysafeonline.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    National Cyber Security Alliance: Stay Safe Online
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=lc7scxvKQOo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Cybrary: Social Engineering Explained (10 minutes)
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-black mb-3">
                Additional Resources
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  <a
                    href="https://www.infosecurity-magazine.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Infosecurity Magazine: Social Engineering
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <div className="w-[400px] h-auto bg-[#d4c8df] shadow-md flex flex-col p-9 mb-4">
            <h2 className="text-black font-bold text-2xl mb-6">
              Ransomware Resources
            </h2>

            <section className="mb-6">
              <h3 className="font-semibold text-lg text-black mb-3">
                Understanding Ransomware
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    href="https://www.cisa.gov/stopransomware/ransomware-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    CISA - Stop Ransomware Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://searchsecurity.techtarget.com/definition/ransomware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    TechTarget - Ransomware Definition
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="font-semibold text-lg text-black mb-3">
                Types of Ransomware
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    href="https://blog.paloaltonetworks.com/2022/09/understanding-different-types-ransomware/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Palo Alto Networks - Types of Ransomware
                  </a>
                </li>
                <li>
                  <a
                    href="https://heimdalsecurity.com/blog/ransomware-101/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Heimdal Security - Ransomware 101: Types, Delivery Methods,
                    and Prevention
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="font-semibold text-lg text-black mb-3">
                Protecting Yourself from Ransomware
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    href="https://www.nist.gov/cyberframework/ransomware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    NIST - Ransomware Protection and Response
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.forbes.com/sites/forbestechcouncil/2022/07/19/how-to-protect-yourself-from-ransomware-attacks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Forbes - How to Protect Yourself from Ransomware Attacks
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.sans.org/white-papers/40475/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    SANS Institute - Ransomware
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=Gc7F-4Op4n4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Cybrary - Ransomware Explained & How to Protect Yourself (15
                    minutes)
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-black mb-3">
                Additional Resources
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    href="https://www.scmagazine.com/ransomware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    SC Magazine - Ransomware
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nomoreransom.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Europol - No More Ransom Project
                  </a>
                  <span className="text-sm text-gray-600">
                    (Free decryption tools for some ransomware variants)
                  </span>
                </li>
              </ul>
            </section>
          </div>

          <div className="w-[400px] h-auto bg-[#d4c8df] shadow-md flex flex-col p-9 mb-4">
  <h2 className="text-black font-bold text-2xl mb-6">
    Phishing Resources
  </h2>

  <section className="mb-6">
    <h3 className="font-semibold text-lg text-black mb-3">
      Understanding Phishing
    </h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://docs.apwg.org/reports/apwg_report_august_2007.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Anti-Phishing Working Group (APWG) - Phishing Definition
        </a>
      </li>
      <li>
        <a
          href="https://www.knowbe4.com/what-is-phishing/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          KnowBe4 - What is Phishing?
        </a>
      </li>
      <li>
        <a
          href="https://www.ftc.gov/phishing-0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Federal Trade Commission (FTC) - Avoiding Phishing Scams
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=XBkzBrXlle0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          TED-Ed - How Phishing Works (3 minutes)
        </a>
      </li>
    </ul>
  </section>

  <section className="mb-6">
    <h3 className="font-semibold text-lg text-black mb-3">
      Types of Phishing Attacks
    </h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://phished.io/phishing-types/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Phished - Types of Phishing Attacks
        </a>
      </li>
      <li>
        <a
          href="https://cyberscoop.com/types-of-phishing-attacks/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Cyberscoop - The Different Types of Phishing Attacks You Need to Know About
        </a>
      </li>
    </ul>
  </section>

  <section className="mb-6">
    <h3 className="font-semibold text-lg text-black mb-3">
      Identifying and Avoiding Phishing
    </h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://owasp.org/www-community/attacks/Phishing_Attacks/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          OWASP - Phishing Attacks
        </a>
      </li>
      <li>
        <a
          href="https://www.nist.gov/privacy-framework/nist-sp-800-61"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          NIST - Special Publication 800-61 Revision 3
        </a>
      </li>
      <li>
        <a
          href="https://www.us-cert.gov/sites/default/files/publications/Phishing_Red_Flags.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          US-CERT - Phishing Red Flags
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=lc7scxvKQOo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          KnowBe4 - How to Spot a Phishing Email (7 minutes)
        </a>
      </li>
    </ul>
  </section>

  <section>
    <h3 className="font-semibold text-lg text-black mb-3">
      Additional Resources
    </h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://www.infosecurity-magazine.com/phishing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Security Magazine - Phishing
        </a>
      </li>
      <li>
        <a
          href="https://www.opendns.com/phishing-quiz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          OpenDNS Phishing Test - Test Your Phishing IQ
        </a>
      </li>
    </ul>
  </section>
</div>

<div className="w-[400px] h-auto bg-[#d4c8df] shadow-md flex flex-col p-9 mb-4">
  <h2 className="text-black font-bold text-2xl mb-6 text-center">
    DDoS Attacks Resources
  </h2>

  <section className="mb-6">
    <h3 className="font-semibold text-lg text-black mb-3">Understanding DDoS Attacks</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://developers.cloudflare.com/ddos-protection/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Cloudflare - What is a DDoS Attack?
        </a>
      </li>
      <li>
        <a
          href="https://www.cisco.com/c/en/us/products/security/what-is-a-ddos-attack.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Cisco - What is a DDoS Attack?
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=8ZxP-FA6kAs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Kaspersky - What is a DDoS Attack? (2 minutes)
        </a>
      </li>
    </ul>
  </section>

  <section className="mb-6">
    <h3 className="font-semibold text-lg text-black mb-3">Types of DDoS Attacks</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://www.incapsula.com/ddos/attack-glossary.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Incapsula - DDoS Attack Glossary
        </a>
      </li>
      <li>
        <a
          href="https://www.imperva.com/learn/ddos/types-of-ddos-attacks/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Imperva - Types of DDoS Attacks
        </a>
      </li>
      <li>
        <a
          href="https://www.us-cert.gov/ncas/tips/ST04-015"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          US-CERT - Understanding Denial-of-Service Attacks
        </a>
      </li>
    </ul>
  </section>

  <section className="mb-6">
    <h3 className="font-semibold text-lg text-black mb-3">Mitigating DDoS Attacks</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://www.paloaltonetworks.com/cyberpedia/what-is-a-ddos-attack"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Palo Alto Networks - What is a DDoS Attack? (Mitigation Strategies)
        </a>
      </li>
      <li>
        <a
          href="https://www.arbornetworks.com/blog/asert/best-practices-ddos-defense/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Arbor Networks - Best Practices for DDoS Defense
        </a>
      </li>
      <li>
        <a
          href="https://www.zdnet.com/article/ddos-attacks-how-to-protect-your-business-from-digital-destruction/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          ZDNet - DDoS Attacks: How to Protect Your Business
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=7KGSf5J8jVY"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Fortinet - DDoS Attack Mitigation (4 minutes)
        </a>
      </li>
    </ul>
  </section>

  <section>
    <h3 className="font-semibold text-lg text-black mb-3">Additional Resources</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://www.digitalattackmap.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Digital Attack Map - Live DDoS Attack Data Visualization
        </a>
      </li>
      <li>
        <a
          href="https://www.prolexic.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Prolexic - DDoS Mitigation Solutions
        </a>
      </li>
    </ul>
  </section>
</div>

<div className="w-[400px] h-auto bg-[#d4c8df] shadow-md flex flex-col p-9 mb-4">
  <h2 className="text-black font-bold text-2xl mb-6 text-center">
    Secure Communication
  </h2>

  <section className="mb-6">
    <h3 className="font-semibold text-lg text-black mb-3">Understanding Secure Communication</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://www.eff.org/pages/tools"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Electronic Frontier Foundation (EFF) - Surveillance Self-Defense Tools
        </a>
      </li>
      <li>
        <a
          href="https://proton.me/blog/what-is-end-to-end-encryption"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Proton Mail - What is End-to-End Encryption?
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=K01JJ7zOBd4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Kaspersky - Secure Communication (3 minutes)
        </a>
      </li>
    </ul>
  </section>

  <section className="mb-6">
    <h3 className="font-semibold text-lg text-black mb-3">Tools for Secure Communication</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://signal.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Signal - Private Messenger
        </a>
      </li>
      <li>
        <a
          href="https://www.whatsapp.com/security/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          WhatsApp - Security
        </a>
      </li>
      <li>
        <a
          href="https://wire.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Wire - Secure Collaboration
        </a>
      </li>
      <li>
        <a
          href="https://element.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Element - Secure Messaging
        </a>
      </li>
    </ul>
  </section>

  <section className="mb-6">
    <h3 className="font-semibold text-lg text-black mb-3">Practices for Secure Communication</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://ssd.eff.org/en/module/protecting-yourself-against-phishing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          EFF - Protecting Yourself Against Phishing
        </a>
      </li>
      <li>
        <a
          href="https://www.us-cert.gov/ncas/tips/ST05-016"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          US-CERT - Using Caution with Email Attachments
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=G7G0IGDJZn0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          CrashCourse - Secure Communication Basics (10 minutes)
        </a>
      </li>
    </ul>
  </section>

  <section>
    <h3 className="font-semibold text-lg text-black mb-3">Additional Resources</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://www.privacytools.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          PrivacyTools - Encryption Against Global Mass Surveillance
        </a>
      </li>
      <li>
        <a
          href="https://proton.me/blog/guide-to-privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Proton Mail - Complete Guide to Online Privacy
        </a>
      </li>
    </ul>
  </section>
</div>

<div className="w-[400px] h-auto bg-[#d4c8df] shadow-md flex flex-col p-9 mb-4">
  <h2 className="text-black font-bold text-2xl mb-6 text-center">
    Incident Response
  </h2>

  <section className="mb-6">
    <h3 className="font-semibold text-lg text-black mb-3">Understanding Incident Response</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://www.sans.org/white-papers/incident-response-101/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          SANS Institute - Incident Response 101
        </a>
      </li>
      <li>
        <a
          href="https://www.cisa.gov/incident-handling-overview"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          CISA - Incident Handling Overview
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=6pYTLysFEdw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          IBM - Incident Response Plan: What To Do After a Data Breach (3 minutes)
        </a>
      </li>
    </ul>
  </section>

  <section className="mb-6">
    <h3 className="font-semibold text-lg text-black mb-3">Incident Response Plans</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://www.mitre.org/publications/technical-papers/incident-response-planning"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          MITRE - Incident Response Planning
        </a>
      </li>
      <li>
        <a
          href="https://www.us-cert.gov/sites/default/files/publications/Incident_Response_Best_Practices.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          US-CERT - Incident Response Best Practices
        </a>
      </li>
      <li>
        <a
          href="https://www.nist.gov/itl/special-publication-800-61"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          NIST - Special Publication 800-61 Revision 2: Computer Security Incident Handling Guide
        </a>
      </li>
    </ul>
  </section>

  <section className="mb-6">
    <h3 className="font-semibold text-lg text-black mb-3">Post-Incident Activities</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://www.sans.org/white-papers/post-incident-activities/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          SANS Institute - Post-Incident Activities
        </a>
      </li>
      <li>
        <a
          href="https://www.securitymagazine.com/articles/90989-the-importance-of-post-incident-reviews-and-what-they-should-cover"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Security Magazine - The Importance of Post-Incident Reviews
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=NQ9W5k4Oh4E"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          CISCO - Conducting a Post-Incident Review (7 minutes)
        </a>
      </li>
    </ul>
  </section>

  <section>
    <h3 className="font-semibold text-lg text-black mb-3">Additional Resources</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <a
          href="https://www.fireeye.com/services/incident-response.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          FireEye - Incident Response Services
        </a>
      </li>
      <li>
        <a
          href="https://www.paloaltonetworks.com/cyberpedia/what-is-incident-response"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Palo Alto Networks - What is Incident Response?
        </a>
      </li>
    </ul>
  </section>
</div>

        </div>
      </div>
    </div>
  );
}
