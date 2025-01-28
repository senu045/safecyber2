import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

// Mock API call to simulate ransomware attack
const mockApiCall = (action) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(action === "click_link" ? "ransomware_alert" : "safe");
    }, 2000);
  });
};

const steps = [
  {
    id: "email",
    title: "Suspicious Email Received",
    content:
      "You have received an email from an unknown sender with a link. What will you do?",
    email: {
      subject: "Urgent: Account Verification Needed",
      from: "support@fakebank.com",
      body: `
        Dear User,

        We have detected unusual activity in your account. To prevent any disruptions, please click on the link below to verify your account:

        <a href="#" class="text-blue-600 underline">Verify Your Account</a>

        If you do not verify your account, your access may be temporarily suspended.

        Regards,
        Fake Bank Security Team
      `,
    },
    actions: [
      { id: "click_link", label: "Click Link" },
      { id: "delete_email", label: "Delete Email", nextStep: "safe" },
    ],
  },
  {
    id: "ransomware_alert",
    title: "Ransomware Alert",
    content: "Your system has been infected with ransomware! What will you do?",
    actions: [
      {
        id: "disconnect_network",
        label: "Disconnect from Network",
        nextStep: "disconnect_network",
      },
      {
        id: "ignore_alert",
        label: "Ignore Alert",
        nextStep: "report_incident",
      },
    ],
  },
  {
    id: "disconnect_network",
    title: "Disconnected from Network",
    content:
      "You have disconnected from the network. Report the incident to your IT department.",
    actions: [
      {
        id: "report_incident",
        label: "Report Incident",
        nextStep: "report_incident",
      },
    ],
  },
  {
    id: "safe",
    title: "Email Deleted",
    content: "You have safely deleted the suspicious email. Good job!",
    actions: [],
  },
  {
    id: "report_incident",
    title: "Incident Reported",
    content:
      "You have reported the incident. Wait for further instructions from your IT department.",
    actions: [],
  },
];

const SimulationModal = ({ isOpen, closeModal, currentStep, handleAction }) => {
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
                {step.email && (
                  <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-inner">
                    <h4 className="text-lg font-semibold mb-2">
                      {step.email.subject}
                    </h4>
                    <p className="text-gray-600 mb-2">
                      <strong>From:</strong> {step.email.from}
                    </p>
                    <p
                      className="text-gray-800"
                      dangerouslySetInnerHTML={{ __html: step.email.body }}
                    />
                  </div>
                )}
                <div className="mt-4 flex flex-col items-center space-y-2">
                  {step.actions.map((action) => (
                    <button
                      key={action.id}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => handleAction(action.id, action.nextStep)}
                    >
                      {action.label}
                    </button>
                  ))}
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

const SimulationComponent = () => {
  const [isSimulationOpen, setIsSimulationOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const openSimulationModal = () => setIsSimulationOpen(true);
  const closeSimulationModal = () => {
    setIsSimulationOpen(false);
    setCurrentStep(0);
  };

  const handleAction = async (action, nextStep) => {
    console.log("Action taken:", action);
    if (action === "click_link" || action === "disconnect_network") {
      const result = await mockApiCall(action);
      console.log("API result:", result);
      const nextStepIndex = steps.findIndex((step) => step.id === result);
      if (nextStepIndex === -1) {
        console.error("Invalid next step:", result);
        setCurrentStep(0); // Reset to the first step or handle accordingly
      } else {
        setCurrentStep(nextStepIndex);
      }
    } else {
      const nextStepIndex = steps.findIndex((step) => step.id === nextStep);
      if (nextStepIndex === -1) {
        console.error("Invalid next step:", nextStep);
        setCurrentStep(0); // Reset to the first step or handle accordingly
      } else {
        setCurrentStep(nextStepIndex);
      }
    }
  };

  return (
    <section className="max-w-6xl mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-400">
        Interactive Ransomware Simulation
      </h2>
      <div
        className="border border-orange-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex items-center justify-center"
        onClick={openSimulationModal}
      >
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4 text-blue-600">
            Start Simulation
          </h3>
        </div>
      </div>
      <SimulationModal
        isOpen={isSimulationOpen}
        closeModal={closeSimulationModal}
        currentStep={currentStep}
        handleAction={handleAction}
      />
    </section>
  );
};

export default SimulationComponent;
