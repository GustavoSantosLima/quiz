import Home from "./components/Home";
import Score from "./components/Score";
import Questions from "./components/Questions";
import Categories from "./components/Categories";
import { useGame } from "./Hooks/useGame";

function App() {
  const { game } = useGame();

  return (
    <div className="app">
      <h1>Quiz de Perguntas</h1>

      {game.page === "HOME" && <Home />}
      {game.page === "CATEGORY" && <Categories />}
      {game.page === "QUESTIONS" && <Questions />}
      {game.page === "SCORE" && <Score />}
    </div>
  );
}

export default App;
