import { useGame } from "../Hooks/useGame";

const Home = () => {
  const { game, dispatch } = useGame();

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
          <p>
            Pergunta {game.indexQuestion + 1} de {game.questions.length}
          </p>

          <h2>{game.questions[game.indexQuestion].title}</h2>

          <div className="list">
            {game.questions[game.indexQuestion].alternatives.map(
              (item, key) => (
                <div
                  key={key}
                  onClick={() =>
                    dispatch({ type: "SELECT_ALTERNATIVE", payload: item })
                  }
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
                onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                className={game.selectedQuestion ? "" : "hidden"}
              >
                Continuar
              </button>
            ) : (
              <button onClick={() => dispatch({ type: "GAME_END" })}>
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
