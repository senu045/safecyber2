import React, { useState } from 'react';

const Quiz2 = ({ exitQuiz }) => {
  const [activeSection, setActiveSection] = useState('home');

  const startQuiz = () => setActiveSection('instructions');
  const backToHomePage = () => setActiveSection('home');
  const continueToQuiz = () => setActiveSection('quiz');
  const submitAnswer = () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }
    if (selectedAnswer.value === 'image1') { // Update this to match your correct answer value
      alert("Your answer is correct.\nThe fake login page is identified by low quality images, watermarks or official logos.");
    } else {
      alert("Oops! You are wrong. The correct answer is Image 1.\nThe fake login page is identified by low quality images, watermarks or official logos.");
    }
    setActiveSection('final');
  };

  return (
    <main className="bg-[#070114] min-h-screen flex items-center justify-center">
      <div className="container max-w-4xl px-4">
        {activeSection === 'home' && (
          <section className="home block">
            <div id="homePage" className="home-content text-center">
            <h1 className="animate-text text-shadow text-[#48104b] text-4xl font-bold mb-4">Social Engineering</h1>
              <p className="text-white mb-4">
                This Quiz helps you to learn further about Social Engineering Attack types.
                <br />
                <br />
                Let's go to the challenge....!
              </p>
              <button
                id="startButton"
                className="start-btn bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold mt-8 hover:bg-[#48104b] transition duration-300"
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
              <div className="quiz-header flex justify-between items-center pb-4 border-b-2 border-[#48104b] mb-6">
                <span className="text-white text-2xl">Angler Phishing</span>
              </div>
              <div id="quizDialog" className="text-center">
                <span className="text-white text-1xl block mb-4">
                  Guess: What is the fraudulent (fake) login page, and how can it be identified?
                </span>
                <form id="quizForm" className="flex justify-center items-center space-x-4">
  <div className="image-option">
    <input type="radio" id="option1" name="answer" value="image1" className="hidden peer" />
    <label htmlFor="option1" className="block cursor-pointer border-4 border-transparent transition duration-300 peer-checked:border-[#48104b] hover:scale-105 peer-checked:transform peer-checked:scale-110">
      <img src="src/assets/image2.jpeg" alt="Image 1" className="w-60 h-60 object-cover rounded-lg shadow-md" />
    </label>
  </div>
  <div className="image-option">
    <input type="radio" id="option2" name="answer" value="image2" className="hidden peer" />
    <label htmlFor="option2" className="block cursor-pointer border-4 border-transparent transition duration-300 peer-checked:border-[#48104b] hover:scale-105 peer-checked:transform peer-checked:scale-110">
      <img src="src/assets/image1.jpeg" alt="Image 2" className="w-60 h-60 object-cover rounded-lg shadow-md" />
    </label>
  </div>
</form>

                <div className="quiz-footer flex justify-between items-center border-t-2 border-[#48104b] pt-6 mt-6">
                  <button
                    className="bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#48104b] transition duration-300"
                    onClick={submitAnswer}
                  >
                    Submit
                  </button>
                  <button
                    className="bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#48104b] transition duration-300"
                    onClick={exitQuiz}
                  >
                    Exit Quiz
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'instructions' && (
          <div id="instructionsDialog" className="popup-info block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 bg-[transparent] border-2 border-[#fB05EB] rounded-lg px-4 py-6 max-w-xl">
            <h2 className="text-purple-200 text-3xl font-bold mb-4">Quiz Guide</h2>
            <ul className="text-purple-200 mb-4">
              <li>- This short quiz will not only test your knowledge but also provide valuable insights.</li>
              <li>- Take your time and answer thoughtfully.</li>
              <li>- All the questions contribute to your final score.</li>
              <li>- Review your answers before submitting to ensure accuracy.</li>
            </ul>
            <div className="btn-group flex justify-between mt-8">
              <button
                className="info-btn-2 bg-[transparent] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#48104b] transition duration-300"
                onClick={backToHomePage}
              >
                Exit Quiz
              </button>
              <button
                className="info-btn bg-[#48104b] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#48104b] transition duration-300"
                onClick={continueToQuiz}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {activeSection === 'final' && (
          <div id="finalDialog" className="popup-info-2 block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 bg-[transparent] border-2 border-[#fB05EB] rounded-lg px-4 py-6 max-w-xl">
            <h2 className="text-purple-200 text-3xl font-bold mb-4">Thank you for Your Contribution.</h2>
            <div className="flex justify-center">
              <button
                className="info-btn-2 bg-[transparent] border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#48104b] transition duration-300"
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

export default Quiz2;
