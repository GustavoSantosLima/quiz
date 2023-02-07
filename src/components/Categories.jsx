const Home = ({ onChangeCategory }) => {
  return (
    <div className="app">
      <div className="box-title">
        <h1>Quiz de Programação</h1>
        <h2>Escolha uma categoria</h2>
      </div>

      <span className="text-info">
        As perguntas serão referentes a categoria escolhida
      </span>

      <div className="box-categories">
        <button onClick={() => onChangeCategory("HTML")}>HTML</button>
        <button onClick={() => onChangeCategory("CSS")}>CSS</button>
        <button onClick={() => onChangeCategory("JAVASCRIPT")}>
          JAVASCRIPT
        </button>
      </div>
    </div>
  );
};

export default Home;
