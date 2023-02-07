import { useGame } from "../Hooks/useGame";

const Home = () => {
  const { changeCategory } = useGame();

  return (
    <div className="category">
      <h2>Escolha uma categoria</h2>
      <p className="text-info">
        As perguntas serão referentes a categoria escolhida
      </p>
      <div className="box-categories">
        <button onClick={() => changeCategory("HTML")}>HTML</button>
        <button onClick={() => changeCategory("CSS")}>CSS</button>
        <button onClick={() => changeCategory("JAVASCRIPT")}>JAVASCRIPT</button>
      </div>
    </div>
  );
};

export default Home;
