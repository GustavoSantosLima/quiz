import { useGame } from "../Hooks/useGame";

const Score = () => {
  const { score, questions, restart } = useGame();

  return (
    <div className="score">
      <h2>Parabêns você chegou ao final</h2>

      <div className="box-score">
        <span className="text-info">Sua pontuação foi: {score}</span>
        <span className="text-info">
          Você acertou {score} de {questions.length} perguntas.
        </span>
      </div>

      <div className="box-buttons">
        <button onClick={restart}>Jogar novamente</button>
      </div>
    </div>
  );
};

export default Score;
