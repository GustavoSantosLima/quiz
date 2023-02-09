import { useGame } from "../Hooks/useGame";

const Home = () => {
  const { categories, changeCategory } = useGame();

  return (
    <div className="category">
      <h2>Escolha uma categoria</h2>
      <p className="text-info">
        As perguntas serão referentes a categoria escolhida
      </p>
      <div className="box-categories">
        {categories.map((category, key) => (
          <button key={key} onClick={() => changeCategory(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
