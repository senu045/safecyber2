import React, { useState, useEffect } from 'react';

const Quiz8 = ({ exitQuiz }) => {
  const initialOrder = [
    { id: 1, text: "Gathering information of frequently visited websites of a target group (in an organization)", order: 1 },
    { id: 2, text: "Analyze the intel: the user behavior, the network response to traffic requests etc.", order: 2 },
    { id: 3, text: "Preparing the Attack: by using sql injections, cross-site scripting, zero-day exploitation etc.", order: 3 },
    { id: 4, text: "Executing the Attack: the malware payload is delivered to the target network", order: 4 },
  ];

  const [activeSection, setActiveSection] = useState('home');
  const [answerOrder, setAnswerOrder] = useState([]);

  useEffect(() => {
    setAnswerOrder(shuffleArray(initialOrder));
  }, []);

  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const startQuiz = () => setActiveSection('instructions');
  const backToHomePage = () => setActiveSection('home');
  const continueToQuiz = () => setActiveSection('quiz');

  const onDragStart = (e, index) => {
    e.dataTransfer.setData('draggedItemIndex', index);
  };

  const onDrop = (e, index) => {
    const draggedItemIndex = e.dataTransfer.getData('draggedItemIndex');
    const updatedOrder = [...answerOrder];
    const draggedItem = updatedOrder.splice(draggedItemIndex, 1)[0];
    updatedOrder.splice(index, 0, draggedItem);
    setAnswerOrder(updatedOrder);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const submitAnswer = () => {
    const correctOrder = answerOrder.map((item, index) => item.order === index + 1);
    if (correctOrder.every(Boolean)) {
      alert('Correct Order!');
    } else {
      alert('Incorrect Order! Please try again.');
    }
    setActiveSection('final');
  };

  return (
    <main className="bg-[#070114] min-h-screen flex items-center justify-center">
      <div className="container max-w-4xl px-4">
        {activeSection === 'home' && (
          <section className="home block">
            <div id="homePage" className="home-content text-center">
              <h1 className="text-[#48104b] text-4xl font-bold mb-4">Social Engineering</h1>
              <p className="text-white mb-4">
                This Quiz helps you to learn further about Social Engineering Attack types.
                <br />
                <br />
                Let's go to the challenge....!
              </p>
              <button
                id="startButton"
                className="start-btn bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold mt-8 hover:bg-[#320237] transition duration-300"
                onClick={startQuiz}
              >
                Start Quiz
              </button>
            </div>
          </section>
        )}

        {activeSection === 'quiz' && (
          <section className="quiz-section block">
            <div className="quiz-box bg-transparent border-2 border-[#48104b] rounded-lg p-6 max-w-2xl mx-auto">
              <h1
                className="text-white text-3xl font-bold mb-4"
                style={{
                  background: 'linear-gradient(45deg, transparent, #641655, transparent)',
                  borderRadius: '6px',
                  textAlign: 'center',
                }}
              >
                Social Engineering
              </h1>
              <div className="quiz-header pb-4 border-b-2 border-[#48104b] mb-6">
                <span className="text-white">
                  Watering Holes Attacks
                  <pre className="text-white overflow-auto break-words whitespace-normal">
                    (A type of supply chain attack that involves compromising a website that's frequently visited by a specific group of people, such as an organization, to distribute malware.)
                  </pre>
                </span>
              </div>
              <div id="quizDialog" className="text-center">
                <span className="text-white text-1xl block mb-4">
                  Identify and arrange the stages of a Watering Holes attack in the correct order.
                </span>
                <form id="quizForm">
                  <div className="container space-y-4" id="answerContainer">
                    {answerOrder.map((item, index) => (
                      <div
                        key={item.id}
                        className="item bg-[#3d0d40] text-[#edadf4] p-4 rounded-lg shadow-md cursor-pointer"
                        draggable
                        onDragStart={(e) => onDragStart(e, index)}
                        onDrop={(e) => onDrop(e, index)}
                        onDragOver={onDragOver}
                      >
                        {item.text}
                      </div>
                    ))}
                  </div>
                </form>
              </div>
              <div className="quiz-footer flex justify-between items-center border-t-2 border-[#48104b] pt-6 mt-6">
                <button
                  className="bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#320237] transition duration-300"
                  onClick={submitAnswer}
                >
                  Submit
                </button>
                <button
                  className="bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#320237] transition duration-300"
                  onClick={exitQuiz}
                >
                  Exit Quiz
                </button>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'instructions' && (
          <div id="instructionsDialog" className="popup-info block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 bg-transparent border-2 border-[#fB05EB] rounded-lg px-4 py-6 max-w-xl">
            <h2 className="text-purple-200 text-3xl font-bold mb-4">Quiz Guide</h2>
            <ul className="text-purple-200 mb-4">
              <li>- This short quiz will not only test your knowledge but also provide valuable insights.</li>
              <li>- Take your time and answer thoughtfully.</li>
              <li>- All the questions contribute to your final score.</li>
              <li>- Review your answers before submitting to ensure accuracy.</li>
            </ul>
            <div className="btn-group flex justify-between mt-8">
              <button
                className="info-btn-2 bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#48104b] transition duration-300"
                onClick={backToHomePage}
              >
                Exit Quiz
              </button>
              <button
                className="info-btn bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#320237] transition duration-300"
                onClick={continueToQuiz}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {activeSection === 'final' && (
          <div id="finalDialog" className="popup-info-2 block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 bg-transparent border-2 border-[#fB05EB] rounded-lg px-4 py-6 max-w-xl">
            <h2 className="text-purple-200 text-3xl font-bold mb-4">Thank you for Your Contribution.</h2>
            <div className="flex justify-center">
              <button
                className="info-btn-2 bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#48104b] transition duration-300"
                onClick={exitQuiz}
              >
                Exit
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Quiz8;
