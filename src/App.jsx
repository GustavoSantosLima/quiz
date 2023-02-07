import { useState } from "react";
import Home from "./components/Home";
import Score from "./components/Score";
import Questions from "./components/Questions";
import Categories from "./components/Categories";
import { GameContext } from "./contexts/GameContext";

function App() {
  const [total, setTotal] = useState(0);
  const [score, setScore] = useState(0);
  const [page, setPage] = useState("HOME");
  const [category, setCategory] = useState(null);

  const changeMode = mode => {
    setPage(mode);
  };

  const changeScore = number => {
    setScore(score + number);
  };

  const changeTotal = number => {
    setTotal(number);
  };

  const changeCategory = category => {
    setCategory(category);
    setPage("QUESTIONS");
  };

  const restart = () => {
    setScore(0);
    setTotal(0);
    setPage("CATEGORY");
    setCategory(null);
  };

  return (
    <GameContext.Provider
      value={{
        page,
        score,
        total,
        restart,
        category,
        changeMode,
        changeTotal,
        changeScore,
        changeCategory
      }}
    >
      {page === "HOME" && <Home />}
      {page === "CATEGORY" && <Categories />}
      {page === "QUESTIONS" && <Questions />}
      {page === "SCORE" && <Score />}
    </GameContext.Provider>
  );
}

export default App;
