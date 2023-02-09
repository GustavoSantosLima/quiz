import React, { createContext, useState } from "react";
import data from "../data/db.json";

export const GameContext = createContext({});

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [page, setPage] = useState("HOME");
  const [category, setCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(false);

  const restart = () => {
    setScore(0);
    setPage("CATEGORY");
    setCategory(null);
    setQuestions([]);
    setIndexQuestion(0);
    setSelectedQuestion(false);
  };

  const changeMode = mode => {
    setPage(mode);
  };

  const changeSelected = ({ target }) => {
    if (!selectedQuestion) {
      setSelectedQuestion(target.textContent);

      if (target.textContent === questions[indexQuestion].answer) {
        setScore(score + 1);
      }
    }
  };

  const nextQuestion = () => {
    setSelectedQuestion(false);
    setIndexQuestion(indexQuestion + 1);
  };

  const changeCategory = category => {
    setPage("QUESTIONS");
    setCategory(category);

    const questionsRandom = shuffle(
      data.questions.filter(i => i.category === category)
    );

    setQuestions(
      questionsRandom.map(item => ({
        ...item,
        alternatives: shuffle(item.alternatives)
      }))
    );
  };

  const shuffle = list => {
    return list.sort(() => Math.random() - 0.5);
  };

  return (
    <GameContext.Provider
      value={{
        page,
        score,
        restart,
        category,
        questions,
        changeMode,
        nextQuestion,
        indexQuestion,
        changeSelected,
        changeCategory,
        selectedQuestion
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
