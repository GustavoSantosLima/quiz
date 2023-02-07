import { useGame } from "../Hooks/useGame";

const Home = () => {
  const game = useGame();

  return (
    <div className="question">
      <div className="box-questions">
        <span>
          Pergunta {game.current + 1} de {game.questions.length}
        </span>

        <h1>{game.questions[game.current].question}</h1>

        <div className="list">
          {game.questions[game.current].options.map((item, key) => (
            <div
              id={`option_${key + 1}`}
              key={key}
              className="item"
              onClick={game.handleQuestion}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="box-buttons">
          {game.current + 1 < game.questions.length ? (
            <button onClick={game.nextQuestion} className={game.show}>
              Continuar
            </button>
          ) : (
            <button onClick={() => game.changeMode("SCORE")}>Finalizar</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
