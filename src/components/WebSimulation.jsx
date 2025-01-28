import { useState, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const WebSimulation = () => {
  const [isSimulationOpen, setIsSimulationOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [serverStatus, setServerStatus] = useState("Running");
  const [requestCount, setRequestCount] = useState(0);
  const [bandwidth, setBandwidth] = useState(0);
  const [cpuUsage, setCpuUsage] = useState(10);
  const [memoryUsage, setMemoryUsage] = useState(20);
  const requestInterval = useRef(null);
  const [attackers, setAttackers] = useState([]);

  const openSimulationModal = () => setIsSimulationOpen(true);
  const closeSimulationModal = () => {
    setIsSimulationOpen(false);
    resetSimulation();
  };

  const resetSimulation = () => {
    setRequests([]);
    setServerStatus("Running");
    setRequestCount(0);
    setBandwidth(0);
    setCpuUsage(10);
    setMemoryUsage(20);
    clearInterval(requestInterval.current);
  };

  const startAttack = () => {
    generateAttackers();
    requestInterval.current = setInterval(() => {
      setRequests((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          timestamp: new Date().toISOString(),
          ip: attackers[Math.floor(Math.random() * attackers.length)],
        },
      ]);
      setRequestCount((prev) => prev + 1);
      setBandwidth((prev) => prev + Math.random() * 10);
      setCpuUsage((prev) => prev + Math.random() * 2);
      setMemoryUsage((prev) => prev + Math.random() * 1);
    }, 100);
  };

  const generateAttackers = () => {
    const newAttackers = [];
    for (let i = 0; i < 10; i++) {
      newAttackers.push(`192.168.1.${Math.floor(Math.random() * 255)}`);
    }
    setAttackers(newAttackers);
  };

  useEffect(() => {
    if (requestCount > 100) {
      setServerStatus("Overloaded");
      clearInterval(requestInterval.current);
    }
    if (cpuUsage > 80 || memoryUsage > 90) {
      setServerStatus("Crash Imminent");
      clearInterval(requestInterval.current);
    }
  }, [requestCount, cpuUsage, memoryUsage]);

  return (
    <section className="max-w-6xl mx-auto my-8 p-4">
      <h2
        className="text-3xl font-bold mb-8 text-center"
        style={{ color: "#4B0082" }}
      >
        Understanding Realistic DDoS Attacks
      </h2>
      <div
        className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex items-center justify-center"
        onClick={openSimulationModal}
        style={{ backgroundColor: "black" }}
      >
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4" style={{ color: "#7D3C98" }}>
            Start Realistic DDoS Simulation
          </h3>
          <p className="text-gray-200">
            Learn how DDoS attacks impact servers in real-time.
          </p>
        </div>
      </div>

      <Transition appear show={isSimulationOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeSimulationModal}
        >
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
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6"
                    style={{ color: "white" }}
                  >
                    Realistic DDoS Attack Simulation
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm" style={{ color: "gray" }}>
                      This simulation illustrates the effects of a DDoS attack
                      on server performance.
                    </p>
                  </div>
                  <div className="mt-4 flex flex-col items-center space-y-4">
                    <div className="w-full flex justify-center">
                      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                        <h4
                          className="text-xl font-bold mb-2"
                          style={{
                            color:
                              serverStatus === "Running" ? "white" : "crimson",
                          }}
                        >
                          Server Status: {serverStatus}
                        </h4>
                        <p className="text-gray-400">
                          Total Requests: {requestCount}
                        </p>
                        <p className="text-gray-400">
                          Bandwidth Usage: {bandwidth.toFixed(2)} Mbps
                        </p>
                        <p className="text-gray-400">
                          CPU Usage: {cpuUsage.toFixed(2)}%
                        </p>
                        <p className="text-gray-400">
                          Memory Usage: {memoryUsage.toFixed(2)}%
                        </p>
                        <div className="mt-4 w-full h-64 bg-black rounded-lg overflow-auto">
                          {requests.map((req) => (
                            <div
                              key={req.id}
                              className="p-2 text-xs text-gray-400 border-b border-gray-600"
                            >
                              Request ID: {req.id} - Time: {req.timestamp} -
                              Attacker IP: {req.ip}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {serverStatus === "Running" && (
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium"
                        style={{ backgroundColor: "crimson", color: "white" }}
                        onClick={startAttack}
                      >
                        Start DDoS Attack
                      </button>
                    )}
                  </div>
                  <div className="mt-4">
                    <h4
                      className="text-lg font-bold mb-2"
                      style={{ color: "white" }}
                    >
                      Preventing DDoS Attacks
                    </h4>
                    <ul className="list-disc pl-5 text-gray-400 text-sm">
                      <li>
                        Deploy Web Application Firewalls (WAF) to filter
                        malicious traffic.
                      </li>
                      <li>Use rate limiting to control request flow.</li>
                      <li>
                        Use DDoS mitigation services like Cloudflare and AWS
                        Shield.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium"
                      style={{ backgroundColor: "#6C3483", color: "white" }}
                      onClick={closeSimulationModal}
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
    </section>
  );
};

export default WebSimulation;
