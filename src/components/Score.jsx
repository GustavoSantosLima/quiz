const Score = ({ score, restartGame }) => {
  return (
    <div className="app">
      <div className="box-title">
        <h1>Quiz de Programação</h1>
        <h2>Parabêns você chegou ao final</h2>
      </div>

      <div className="box-score">
        <span className="text-info">Sua pontuação foi: {score}</span>
        <span className="text-info">Você acertou {score} de 3 perguntas.</span>
      </div>

      <div className="box-buttons">
        <button onClick={restartGame}>Jogar novamente</button>
      </div>
    </div>
  );
};

export default Score;
