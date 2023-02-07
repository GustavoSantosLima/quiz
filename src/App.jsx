import Home from "./components/Home";
import Score from "./components/Score";
import Questions from "./components/Questions";
import Categories from "./components/Categories";
import { useGame } from "./Hooks/useGame";

function App() {
  const { page } = useGame();

  return (
    <div className="app">
      <h1>Quiz de Programação</h1>

      {page === "HOME" && <Home />}
      {page === "CATEGORY" && <Categories />}
      {page === "QUESTIONS" && <Questions />}
      {page === "SCORE" && <Score />}
    </div>
  );
}

export default App;
