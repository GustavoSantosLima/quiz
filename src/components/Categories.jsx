import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

const Home = () => {
  const { changeCategory } = useContext(GameContext);

  return (
    <div className="app">
      <div className="box-title">
        <h1>Quiz de Programação</h1>
        <h2>Escolha uma categoria</h2>
      </div>

      <span className="text-info">
        As perguntas serão referentes a categoria escolhida
      </span>

      <div className="box-categories">
        <button onClick={() => changeCategory("HTML")}>HTML</button>
        <button onClick={() => changeCategory("CSS")}>CSS</button>
        <button onClick={() => changeCategory("JAVASCRIPT")}>JAVASCRIPT</button>
      </div>
    </div>
  );
};

export default Home;
