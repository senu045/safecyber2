import { indicators } from "../constants";

// Indicators of Compromise Component
const IndicatorsOfCompromise = () => (
  <div className="flex flex-wrap justify-center gap-6">
    {indicators.map((indicator, index) => (
      <div
        key={index}
        className="relative p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 h-48 m-3"
      >
        <h3 className="text-xl font-bold mb-2 text-purple-600">
          {indicator.title}
        </h3>
        <p className="text-gray-500">{indicator.description}</p>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-75 rounded-lg">
          <a
            href={indicator.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400"
          >
            Find more...
          </a>
        </div>
      </div>
    ))}
  </div>
);

// Real-World Examples Component

// Main Recognizing Attacks Component
const RecognizingAttacks = () => (
  <section className="max-w-4xl mx-auto my-8">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-600">
      Recognizing Signs of a Ransomware Attack
    </h2>
    <IndicatorsOfCompromise />
  </section>
);

export default RecognizingAttacks;
