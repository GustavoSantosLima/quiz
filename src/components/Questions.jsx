import { useContext, useEffect, useState } from "react";
import { GameContext } from "../contexts/GameContext";
import data from "../data/questions";

const Home = () => {
  const { category, total, changeScore, changeMode, changeTotal } =
    useContext(GameContext);
  const [show, setShow] = useState("hidden");
  const [current, setCurrent] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const [list] = data.filter(i => i.category === category);
    setQuestions(list.questions);
    changeTotal(list.questions.length);
  }, []);

  const handleQuestion = ({ target }) => {
    if (show === "hidden") {
      const element = document.getElementById(target.id);

      setShow("");

      if (target.textContent === questions[current].answer) {
        element.classList.add("success");
        changeScore(1);
      } else {
        element.classList.add("incorrect");
        changeScore(0);
      }
    }
  };

  const handleNext = () => {
    if (document.querySelector(".success")) {
      document.querySelector(".success").classList.remove("success");
    }

    if (document.querySelector(".incorrect")) {
      document.querySelector(".incorrect").classList.remove("incorrect");
    }

    setCurrent(current + 1);
    setShow("hidden");
  };

  return (
    <div className="app">
      <div className="box-title">
        <h1>Quiz de Programação</h1>
      </div>

      {questions.length > 0 && (
        <div className="box-questions">
          <span>
            Pergunta {current + 1} de {total}
          </span>

          <h1>{questions[current].question}</h1>

          <div className="list">
            {questions[current].options.map((item, key) => (
              <div
                id={`option_${key + 1}`}
                key={key}
                className="item"
                onClick={handleQuestion}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="box-buttons">
            {current + 1 < questions.length ? (
              <button onClick={handleNext} className={show}>
                Continuar
              </button>
            ) : (
              <button onClick={() => changeMode("SCORE")}>Finalizar</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
