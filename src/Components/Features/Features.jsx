import PropTypes from "prop-types";

const Feature = ({ title, description }) => {
  return (
    <div className="flex items-start justify-start mb-4">
      <svg
        className="w-6 h-6 mt-1 mr-2 text-blue-400"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M9 5l7 7-7 7"></path>
      </svg>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-white">{title}</h3>{" "}
        <p className="text-sm text-white">{description}</p>{" "}
      </div>
    </div>
  );
};

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const FeatureList = () => {
  const features = [
    {
      title: "Challenge Your Coding Prowess with Devmindtest!",
      description:
        "Random Error Code Generation - Unleash the Mystery: Decode Random Error Codes - Experience Real-world Coding Hurdles",
    },
    {
      title: "Realistic Error Scenarios",
      description:
        "Decode, Diagnose, Dominate: Get Instant Feedback - Elevate Your Coding IQ: Learn Through Error Challenges",
    },
    {
      title: "Learning Through Challenges",
      description:
        "Explore a Universe of Errors: Endless Coding Adventures Await - Join Forces, Crack Codes: Connect with Developers Worldwide",
    },
    {
      title: "Engaging Developer Community",
      description:
        "Climb the Ranks: Compete for Coding Supremacy - Interactive Error Quests: Solve, Learn, Conquer",
    },
    {
      title: "Interactive Error Solving",
      description: "Track Your Mastery: Personalized Progress Reports Await",
    },
  ];

  return (
    <div className="py-4 px-4">
      {features.map((feature, index) => (
        <Feature
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

const FeatureComponent = () => {
  return (
    <div className="py-12 px-4 flex flex-col items-center justify-center font-montserrat">
      <hr className="w-full border-b-2 border-gray-300 my-4" />

      <h2 className=" text-4xl font-bold text-green-500 mb-8 mx-96">
        Features
      </h2>
      <div className="rounded-lg overflow-hidden flex justify-between">
        <div>
          <img
            className="object-cover rounded-lg shadow-lg"
            src="./src/assets/images/web-dev.png"
            alt="Hero Image"
            width="400"
            height="300"
          />
        </div>
        <FeatureList />
      </div>
      <hr className="w-full border-b-2 border-gray-300 my-4" />
    </div>
  );
};

export default FeatureComponent;
