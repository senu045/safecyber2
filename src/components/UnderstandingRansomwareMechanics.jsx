import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import JSEncrypt from "jsencrypt";

const encryptFile = (fileContent, publicKey) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const encrypted = encrypt.encrypt(fileContent);
  console.log("Encrypted content:", encrypted); // Log encrypted content
  return encrypted;
};

const decryptFile = (encryptedContent, privateKey) => {
  const decrypt = new JSEncrypt();
  decrypt.setPrivateKey(privateKey);
  const decrypted = decrypt.decrypt(encryptedContent);
  console.log("Decrypted content:", decrypted); // Log decrypted content
  return decrypted;
};

const steps = [
  {
    id: "select_file",
    title: "Select a File",
    content: "Choose a file to simulate the encryption process.",
    action: "select_file",
  },
  {
    id: "encrypt_file",
    title: "Encrypt the File",
    content: "Click the button to encrypt the selected file.",
    action: "encrypt_file",
  },
  {
    id: "decrypt_file",
    title: "Decrypt the File",
    content:
      "Click the button to decrypt the file and restore the original content.",
    action: "decrypt_file",
  },
];

const SimulationModal = ({
  isOpen,
  closeModal,
  currentStep,
  handleAction,
  fileContent,
  encryptedContent,
  decryptedContent,
}) => {
  const step = steps[currentStep];

  if (!step) {
    console.error("Invalid step index:", currentStep);
    return null;
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {step.title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{step.content}</p>
                </div>
                <div className="mt-4 flex flex-col items-center space-y-2">
                  {step.action === "select_file" && (
                    <input
                      type="file"
                      className="file-input"
                      onChange={(e) =>
                        handleAction(step.action, e.target.files[0])
                      }
                    />
                  )}
                  {step.action === "encrypt_file" && (
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => handleAction(step.action)}
                    >
                      Encrypt File
                    </button>
                  )}
                  {step.action === "decrypt_file" && (
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={() => handleAction(step.action)}
                    >
                      Decrypt File
                    </button>
                  )}
                </div>
                <div className="mt-4">
                  {fileContent && (
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-gray-700">
                        Original File Content:
                      </h4>
                      <p className="text-xs text-gray-600">{fileContent}</p>
                    </div>
                  )}
                  {encryptedContent && (
                    <div>
                      <h4 className="text-sm font-bold text-gray-700">
                        Encrypted File Content:
                      </h4>
                      <p className="text-xs text-gray-600 break-all">
                        {encryptedContent}
                      </p>
                    </div>
                  )}
                  {decryptedContent && (
                    <div className="mt-4">
                      <h4 className="text-sm font-bold text-gray-700">
                        Decrypted File Content:
                      </h4>
                      <p className="text-xs text-gray-600 break-all">
                        {decryptedContent}
                      </p>
                    </div>
                  )}
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const UnderstandingRansomwareMechanics = () => {
  const [isSimulationOpen, setIsSimulationOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [fileContent, setFileContent] = useState(null);
  const [encryptedContent, setEncryptedContent] = useState(null);
  const [decryptedContent, setDecryptedContent] = useState(null);
  const [privateKey, setPrivateKey] = useState(null);
  const [publicKey, setPublicKey] = useState(null);

  const openSimulationModal = () => setIsSimulationOpen(true);
  const closeSimulationModal = () => {
    setIsSimulationOpen(false);
    setCurrentStep(0);
    setFileContent(null);
    setEncryptedContent(null);
    setDecryptedContent(null);
    setPrivateKey(null);
    setPublicKey(null);
  };

  const handleAction = (action, file) => {
    if (action === "select_file") {
      const reader = new FileReader();
      reader.onload = () => {
        setFileContent(reader.result);
        setCurrentStep(1); // Move to next step
      };
      reader.readAsText(file);
    } else if (action === "encrypt_file") {
      const encrypt = new JSEncrypt();
      const privateKey = encrypt.getPrivateKey();
      const publicKey = encrypt.getPublicKey();
      setPrivateKey(privateKey);
      setPublicKey(publicKey);
      const encrypted = encryptFile(fileContent, publicKey);
      setEncryptedContent(encrypted);
      setCurrentStep(2); // Move to next step
    } else if (action === "decrypt_file") {
      const decrypted = decryptFile(encryptedContent, privateKey);
      setDecryptedContent(decrypted);
    }
  };

  return (
    <section className="max-w-6xl mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-white-600">
        Understanding Ransomware Mechanics
      </h2>
      <div
        className="border border-pink-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex items-center justify-center"
        onClick={openSimulationModal}
      >
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4 text-purple-600">
            Start Simulation
          </h3>
          <p className="text-gray-600">
            Learn how ransomware encrypts and decrypts files.
          </p>
        </div>
      </div>
      <SimulationModal
        isOpen={isSimulationOpen}
        closeModal={closeSimulationModal}
        currentStep={currentStep}
        handleAction={handleAction}
        fileContent={fileContent}
        encryptedContent={encryptedContent}
        decryptedContent={decryptedContent}
      />
    </section>
  );
};

export default UnderstandingRansomwareMechanics;
