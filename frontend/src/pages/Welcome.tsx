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
    <div className="flex w-full">
      <div className="md:w-1/3 md:flex md:flex-col items-center  justify-center">
        <div className="flex">
          <img className="h-[60px] w-[60px]" src="/logo.png" />
          <h1 className="font-bold text-[35px]  font-handlee text-[#4D89AD] ">Welcome to Tidy Tasks</h1>
        </div>
        <p className="p-10">Your app preferences will be set according to the adjacent questions. please answer the questions</p>
      </div>
      <div className="md:w-2/3">
        {allquestions.map((question, index) => (
          index === currentQuestionIndex && (
            <Question key={index} question={question} onAnswerSelected={handleAnswer} />
          )
        ))}
        {currentQuestionIndex < 9 ? <button onClick={handleNextQuestion}>Next</button> : null}
        {currentQuestionIndex == 8 ? <button>Submit</button> : null}
      </div>
    </div>
  );
}

export default Welcome
