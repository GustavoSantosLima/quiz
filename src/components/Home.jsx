import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

const Home = () => {
  const { changeMode } = useContext(GameContext);

  return (
    <div className="app">
      <div className="box-title">
        <h1>Quiz de Programação</h1>
        <h2>Sejam bem-vindos</h2>
      </div>

      <span className="text-info">
        Clique em um dos botões abaixo para começar
      </span>

      <div className="box-buttons">
        <button onClick={() => changeMode("CATEGORY")}>Iniciar</button>
      </div>
    </div>
  );
};

export default Home;
