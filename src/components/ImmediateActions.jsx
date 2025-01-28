// Immediate Actions Component
const ImmediateActions = () => (
  <div className="border border-blue-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 m-3">
    <h3 className="text-xl font-bold mb-4 text-purple-600">
      Immediate Actions
    </h3>
    <ul className="list-disc list-inside text-gray-400">
      <li>
        Disconnect infected device: Isolate the infected device from the network
        to prevent further spread.{" "}
      </li>
      <li>
        Avoid paying the ransom: Paying the ransom does not guarantee data
        recovery and often encourages further attacks.
      </li>
      <li>
        Document the attack: Gather information about the ransomware, including
        any ransom demands or contact information.
      </li>
      <li>
        Contact IT support: Report the incident to your IT department or
        cybersecurity team immediately.{" "}
      </li>
      <li>Run a full system scan using reliable antivirus software.</li>
    </ul>
  </div>
);

// Incident Reporting Component
const IncidentReporting = () => (
  <div className="border border-green-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 m-3">
    <h3 className="text-xl font-bold mb-4 text-green-600">
      Incident Reporting
    </h3>

    <ul className="list-disc list-inside text-gray-400">
      <li>
        Report the ransomware incident to your organization's IT department or
        security team. Provide detailed information about the attack, including
        how it occurred and the steps taken so far. Additionally, report the
        incident to relevant authorities such as local law enforcement and
        national cybersecurity agencies.{" "}
      </li>
      <li>
        Contain the threat: Prevent the ransomware from spreading to other
        devices or systems.
      </li>
      <li>
        Investigate the incident: Determine the source of the infection and how
        the ransomware gained access.{" "}
      </li>
      <li>
        Data recovery: Attempt to recover data from backups or using specialized
        recovery tools.{" "}
      </li>
    </ul>
  </div>
);

// Recovery Process Component
const RecoveryProcess = () => (
  <div className="border border-purple-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 m-3">
    <h3 className="text-xl font-bold mb-4 text-yellow-600">Recovery Process</h3>

    <ul className="list-disc list-inside text-gray-400">
      <li>
        Ensure the ransomware has been completely removed from the system.
      </li>
      <li>
        Verify the integrity of your backups before starting the recovery
        process.
      </li>
      <li>Restore systems and data from the most recent clean backup.</li>
      <li>
        Test the restored systems and data to ensure they are functioning
        correctly.
      </li>
      <li>Implement additional security measures to prevent future attacks.</li>
      <li>
        Security enhancements: Implement additional security measures to prevent
        future attacks, such as stronger password policies, employee training,
        and updated security software.
      </li>
    </ul>
  </div>
);

// Main Response to Ransomware Attack Component
const ResponseToRansomwareAttack = () => (
  <section className="relative flex flex-wrap justify-center gap-5 lg:flex lg:flex-row border-white mb-15">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-300">
      Response to a Ransomware Attack
    </h2>
    <div className="flex flex-row justify-center gap-6">
      <ImmediateActions />
      <IncidentReporting />
      <RecoveryProcess />
    </div>
  </section>
);

export default ResponseToRansomwareAttack;
