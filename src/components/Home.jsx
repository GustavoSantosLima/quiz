import { useGame } from "../Hooks/useGame";

const Home = () => {
  const { dispatch } = useGame();

  return (
    <div className="home">
      <h2>Sejam bem-vindos</h2>
      <p className="text-info">Clique no botão abaixo para começar</p>
      <div className="box-buttons">
        <button onClick={() => dispatch({ type: "GAME_START" })}>
          Iniciar
        </button>
      </div>
    </div>
  );
};

export default Home;
