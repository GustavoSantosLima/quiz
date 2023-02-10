import { useGame } from "../Hooks/useGame";

const Score = () => {
  const { game, dispatch } = useGame();

  return (
    <div className="score">
      <h2>Parabêns você chegou ao final</h2>

      <div className="box-score">
        <span className="text-info">Sua pontuação foi: {game.score}</span>
        <span className="text-info">
          Você acertou {game.score} de {game.questions.length} perguntas.
        </span>
        <span className="text-info">Categoria: {game.category}</span>
      </div>

      <div className="box-buttons">
        <button onClick={() => dispatch({ type: "GAME_RESTART" })}>
          Jogar novamente
        </button>
      </div>
    </div>
  );
};

export default Score;
