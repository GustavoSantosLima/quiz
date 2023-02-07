import React, { createContext, useEffect, useState } from "react";
import data from "../data/questions";

export const GameContext = createContext({});

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [page, setPage] = useState("HOME");
  const [category, setCategory] = useState(null);
  const [questions, setQuestions] = useState([]);

  //Refatorar
  const [show, setShow] = useState("hidden");
  const [current, setCurrent] = useState(0);

  const changeMode = mode => {
    setPage(mode);
  };

  const handleQuestion = ({ target }) => {
    if (show === "hidden") {
      const element = document.getElementById(target.id);

      setShow("");

      if (target.textContent === questions[current].answer) {
        element.classList.add("success");
        changeScore(1);
      } else {
        element.classList.add("error");
        changeScore(0);
      }
    }
  };

  const nextQuestion = () => {
    if (document.querySelector(".success")) {
      document.querySelector(".success").classList.remove("success");
    }

    if (document.querySelector(".error")) {
      document.querySelector(".error").classList.remove("error");
    }

    setCurrent(current + 1);
    setShow("hidden");
  };

  const changeScore = number => {
    setScore(score + number);
  };

  const changeCategory = category => {
    setCategory(category);
    setPage("QUESTIONS");
    const [list] = data.filter(i => i.category === category);
    setQuestions(list.questions.sort(() => Math.random() - 0.5));
  };

  const restart = () => {
    setScore(0);
    setPage("CATEGORY");
    setCategory(null);
  };

  return (
    <GameContext.Provider
      value={{
        page,
        show,
        score,
        restart,
        current,
        category,
        questions,
        changeMode,
        changeScore,
        nextQuestion,
        handleQuestion,
        changeCategory
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
