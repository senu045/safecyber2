import React, { useState, useEffect } from 'react';

const Quiz1 = ({ exitQuiz }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [videoVisible, setVideoVisible] = useState(true); // Initialize video as visible

  // Handler for showing instructions
  const showInstructions = () => setActiveSection('instructions');

  // Handler for navigating back to home page
  const backToHomePage = () => setActiveSection('home');

  // Handler for continuing to the quiz
  const continueToQuiz = () => setActiveSection('quiz');

  // Handler for changing the selected answer
  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  // Handler for submitting the answer
  const submitAnswer = () => {
    const video = document.querySelector('#scenarioVideo');

    if (selectedAnswer === 'yes') {
      setVideoVisible(true);
      if (video) {
        video.play(); // Ensure video is played
      }
      alert(
        "Wrong! Users should avoid engaging with suspicious games or links, such as 'spin the wheel' offers, as they are often fraudulent attempts to collect personal information."
      );
    } else if (selectedAnswer === 'no') {
      setVideoVisible(true); // Ensure video is visible if 'No' is selected
      if (video) {
        video.pause(); // Pause the video
      }
      alert(
        "Correct! Selecting 'No' is the correct response, as users should avoid engaging with unsolicited messages like 'spin the wheel' offers. Such messages are often spam and can easily exploit individuals who attempt to interact with them."
      );
    } else {
      alert("Please select an option before submitting.");
      return;
    }

    setActiveSection('final'); // Navigate to the final section
  };

  return (
    <main className="bg-[#070114] min-h-screen flex items-center justify-center">
      <div className="container max-w-4xl px-4">
        {activeSection === 'home' && (
          <section className="home block">
            <div id="homePage" className="home-content text-center">
              <h1 className="animate-text text-shadow text-[#48104b] text-4xl font-bold mb-4">
                Social Engineering
              </h1>
              <p className="text-white mb-4">
                This Quiz helps you to learn further about Social Engineering Attack types.
                <br />
                <br />
                Let's go to the challenge....!
              </p>
              <button
                id="startButton"
                className="start-btn bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold mt-8 hover:bg-[#320237] transition duration-300"
                onClick={showInstructions}
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
                <span className="text-white text-2xl">Baiting</span>
              </div>
              <div id="quizDialog">
                <span className="text-white text-xl block mb-4">
                  Would you like to participate in spinning the wheel provided?
                </span>
                <div className="video mb-4">
                  <video
                    id="scenarioVideo"
                    className={`w-full h-auto rounded-lg border border-transparent ${videoVisible ? 'block' : 'hidden'}`} // Conditional class
                  >
                    <source src="/src/assets/spinningwheel.mp4" type="video/mp4" />
                    Your browser does not support the video element.
                  </video>
                </div>
                <form id="quizForm" className="space-y-4">
                  <label className="flex items-center text-lg text-white">
                    <input
                      type="radio"
                      name="answer"
                      value="yes"
                      className="mr-2"
                      onChange={handleAnswerChange}
                    />
                    Yes
                  </label>
                  <label className="flex items-center text-lg text-white">
                    <input
                      type="radio"
                      name="answer"
                      value="no"
                      className="mr-2"
                      onChange={handleAnswerChange}
                    />
                    No
                  </label>
                  <div className="quiz-footer flex justify-between items-center border-t-2 border-[#48104b] pt-6 mt-6">
                    <button
                      type="button"
                      className="bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#320237] transition duration-300"
                      onClick={submitAnswer}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#320237] transition duration-300"
                      onClick={exitQuiz}
                    >
                      Exit Quiz
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'instructions' && (
          <div
            id="instructionsDialog"
            className="popup-info block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 bg-transparent border-2 border-[#fB05EB] rounded-lg px-4 py-6 max-w-xl"
          >
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
          <div
            id="finalDialog"
            className="popup-info-2 block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 bg-transparent border-2 border-[#fB05EB] rounded-lg px-4 py-6 max-w-xl"
          >
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

export default Quiz1;
