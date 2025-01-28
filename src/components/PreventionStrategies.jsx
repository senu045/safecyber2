// Best Practices Component
const BestPractices = () => (
  <div className="border border-purple-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 m-3">
    <h3 className="text-xl font-bold mb-4 text-yellow-600">Best Practices</h3>
    <ul className="list-disc list-inside text-gray-400">
      <li>
        Create complex passwords using a mix of uppercase and lowercase letters,
        numbers, and symbols.
      </li>
      <li>
        Enable two-factor authentication (2FA) whenever possible for an extra
        layer of security.
      </li>
      <li>
        Promote best practices like avoiding suspicious emails, links, and
        downloads.{" "}
      </li>
      <li>Avoid using easily guessable information like birthdays or names.</li>
    </ul>
  </div>
);

// Software Updates Component
const SoftwareUpdates = () => (
  <div className="border border-blue-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 m-3">
    <h3 className="text-xl font-bold mb-4 text-green-600">Software Updates</h3>
    <ul className="list-disc list-inside text-gray-400">
      <li>
        Keep operating systems, applications, and software up-to-date with the
        latest security patches.{" "}
      </li>
      <li>
        Use automatic updates to ensure timely application of security fixes.
      </li>
    </ul>
  </div>
);

// Security Tools Component
const SecurityTools = () => (
  <div className="border border-green-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 m-3">
    <h3 className="text-xl font-bold mb-4 text-blue-600">Security Tools</h3>
    <ul className="list-disc list-inside text-gray-400">
      <li>
        Implement firewalls and intrusion prevention systems to protect your
        network from unauthorized access.{" "}
      </li>
      <li>
        Segment your network to limit the impact of a potential ransomware
        attack.{" "}
      </li>
      <li>
        Use network traffic monitoring tools to identify unusual activity.{" "}
      </li>
    </ul>
  </div>
);

// Backups Component
const Backups = () => (
  <div className="border border-yellow-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 m-3">
    <h3 className="text-xl font-bold mb-4 text-purple-600">Backups</h3>
    <ul className="list-disc list-inside text-gray-400">
      <li>
        Regularly back up critical data to an external hard drive or cloud
        storage.{" "}
      </li>
      <li>
        Test the backup process to ensure data can be restored successfully.{" "}
      </li>
      <li>
        Store backups offline to prevent them from being encrypted by
        ransomware.{" "}
      </li>
    </ul>
  </div>
);

// Main Prevention Strategies Component
const PreventionStrategies = () => (
  <section className="relative flex flex-wrap justify-center gap-5 lg:flex lg:flex-row border-white mb-15">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-300">
      Prevention Strategies
    </h2>
    <div className="flex flex-row justify-center gap-6">
      <BestPractices />
      <SoftwareUpdates />
      <SecurityTools />
      <Backups />
    </div>
  </section>
);

export default PreventionStrategies;
