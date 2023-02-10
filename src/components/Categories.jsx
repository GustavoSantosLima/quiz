import { useGame } from "../Hooks/useGame";

const Home = () => {
  const { game, dispatch } = useGame();

  return (
    <div className="category">
      <h2>Escolha uma categoria</h2>
      <p className="text-info">
        As perguntas serão referentes a categoria escolhida
      </p>
      <div className="box-categories">
        {game.categories.map((category, key) => (
          <button
            key={key}
            onClick={() =>
              dispatch({ type: "SELECT_CATEGORY", payload: category })
            }
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
