const Home = ({ onChangeMode }) => {
  return (
    <div className="app">
      <div className="box-title">
        <h1>Quiz de Programação</h1>
        <h2>Sejam bem-vindos</h2>
      </div>

      <span className="text-info">
        Clique em um dos botões abaixo para começar
      </span>

      <div className="box-buttons">
        <button onClick={() => onChangeMode(2)}>Iniciar</button>
      </div>
    </div>
  );
};

export default Home;
