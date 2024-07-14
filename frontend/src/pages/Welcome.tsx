import { useState } from "react";
import Question from "../components/Question"
import { allquestions } from "../db/questions.json";

const answers = [];

const handleAnswer = (answer: string) => {
  answers.push(answer);
  // Implement logic to check if the answer is correct
};

const Welcome = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="md:flex  flex flex-col h-screen gap-10 ">
      <div className="md:w-1/3 md:flex md:flex-col items-center p-3 justify-center md:border md:border-r-2 h-1/5 ">
        <div className="flex items-center gap-5 mt-9 shadow-md shadow-b w-full py-5 px-2">
          <img className="h-[60px] w-[60px]" src="/logo.png" />
          <h1 className="font-bold md:text-[35px]  text-3xl font-handlee text-[#4D89AD] ">Welcome to Tidy Tasks</h1>
        </div>
        <p className="md:p-10 md:flex hidden ">Your app preferences will be set according to the adjacent questions. please answer the questions</p>
      </div>
      <div className="md:w-2/3 h-4/5 p-10  ">
        <p className="text-[#2a4b60] text-xl p-2 mb-5" >Please answer the following questions:</p>
        <div className=" p-3 rounded-xl shadow-2xl  ">
          {allquestions.map((question, index) => (
            index === currentQuestionIndex && (
              <Question key={index} question={question} onAnswerSelected={handleAnswer} />
            )
          ))}
          {currentQuestionIndex < 8 ? (
            <button onClick={handleNextQuestion} className="relative inline-flex items-center justify-start py-3 pl-4 ml-52 mt-5 pr-12 overflow-hidden font-semibold text-[#4D89AD] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#4D89AD] group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Next</span>
            </button>
          ) : <button className="relative inline-block text-lg group ml-52 mt-5">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Submit</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </button>}
        </div>
      </div>
    </div>
  );
}


export default Welcome;



