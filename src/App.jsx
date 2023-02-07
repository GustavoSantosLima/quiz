import { useState } from "react";
import Home from "./components/Home";
import Score from "./components/Score";
import Questions from "./components/Questions";
import Categories from "./components/Categories";

function App() {
  const [score, setScore] = useState(0);
  const [gameMode, setGameMode] = useState(1);
  const [category, setCategory] = useState(null);

  const changeMode = mode => {
    setGameMode(mode);
  };

  const changeCategory = category => {
    setCategory(category);
    setGameMode(3);
  };

  const restartGame = () => {
    setScore(0);
    setGameMode(2);
    setCategory(null);
  };

  return (
    <>
      {gameMode === 1 && <Home onChangeMode={changeMode} />}
      {gameMode === 2 && <Categories onChangeCategory={changeCategory} />}
      {gameMode === 3 && (
        <Questions
          category={category}
          onChangeMode={changeMode}
          onChangeScore={number => setScore(score + number)}
        />
      )}
      {gameMode === 4 && <Score score={score} restartGame={restartGame} />}
    </>
  );
}

export default App;
