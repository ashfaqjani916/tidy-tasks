import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
}


interface QuestionProps {
  question: Question;
  onAnswerSelected: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswerSelected }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    onAnswerSelected(answer);
  };

  return (
    <div>
      <p>{question.question}</p>
      <div>
        {question.options.map((option: any, index: any) => (
          <div key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => handleAnswerSelect(option)}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
