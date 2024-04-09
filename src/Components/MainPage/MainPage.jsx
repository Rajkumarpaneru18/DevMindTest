import  { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useFlags } from "flagsmith/react";

const API_KEY = "AIzaSyBiCJGJyrV2rE08QQQzuDF_LFHKPAnL7tk";

const genAI = new GoogleGenerativeAI(API_KEY);

const MainSection = () => {
  const [currentCode, setCurrentCode] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [correctError, setCorrectError] = useState("");
  const [showSolution, setShowSolution] = useState(false);
  const [codeWidth, setCodeWidth] = useState("w-full md:w-1/2");

  useEffect(() => {
    getRandomCode();
  }, []);

  const { solution } = useFlags(["solution"]);
  const getRandomCode = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt =
      "Generate a code snippet with an error inside it and don't say what error is present";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    setCurrentCode(text.trim());
    setUserAnswer("");
    setFeedback("");
    setShowSolution(false);
    if (text.length > 500) {
      setCodeWidth("w-full");
    } else {
      setCodeWidth("w-full md:w-1/2");
    }
  };

  const checkAnswer = () => {
    const correctAnswer = currentCode.split(" - ")[0];
    if (userAnswer.trim() === correctAnswer) {
      setFeedback("Correct! Well done!");
      setShowSolution(false);
    } else {
      setCorrectError(correctAnswer);
      setShowSolution(true);
      setFeedback("Thanks for your attempt!");
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Error Code Challenge
        </h2>
        <button
          className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg"
          onClick={getRandomCode}
        >
          Generate Code
        </button>
        <p className="mt-4 text-lg font-semibold">
          Decode the following error code:
        </p>
        <div className="flex justify-center">
          <textarea
            className={`mt-4 p-2 border border-gray-300 rounded-lg text-lg font-mono resize-none ${codeWidth}`}
            rows="5"
            value={currentCode}
            readOnly
            style={{
              backgroundColor: "black",
              color: "white",
              width: "500px",
              height: "400px",
            }}
          ></textarea>
        </div>
        <input
          className="w-full md:w-1/2 mt-4 p-2 border border-gray-300 rounded-lg text-lg"
          type="text"
          placeholder="Enter your answer here"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <br />
        <button
          className="bg-blue-500 hover:bg-green-500 r text-white font-bold py-2 px-4 rounded-lg mt-4"
          onClick={checkAnswer}
        >
          Submit
        </button>
        <p className="font-bold mt-4 text-lg text-green-400">{feedback}</p>
        {solution.enabled && showSolution && (
          <div className="mt-4">
            <p className="font-bold text-red-500">
              Correct Error: {correctError}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MainSection;
