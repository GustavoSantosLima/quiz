import { useGame } from "../Hooks/useGame";

const Home = () => {
  const game = useGame();

  const checkCorrect = text => {
    if (game.selectedQuestion === text) {
      return game.questions[game.indexQuestion].answer === text
        ? "alternative success"
        : "alternative error";
    }

    return "alternative";
  };

  return (
    <div className="question">
      {game.questions.length > 0 && (
        <div className="box-questions">
          <span>
            Pergunta {game.indexQuestion + 1} de {game.questions.length}
          </span>

          <h1>{game.questions[game.indexQuestion].title}</h1>

          <div className="list">
            {game.questions[game.indexQuestion].alternatives.map(
              (item, key) => (
                <div
                  key={key}
                  onClick={game.changeSelected}
                  className={checkCorrect(item)}
                >
                  {item}
                </div>
              )
            )}
          </div>

          <div className="box-buttons">
            {game.indexQuestion + 1 < game.questions.length ? (
              <button
                onClick={game.nextQuestion}
                className={game.selectedQuestion ? "" : "hidden"}
              >
                Continuar
              </button>
            ) : (
              <button onClick={() => game.changeMode("SCORE")}>
                Finalizar
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
