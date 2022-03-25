import { useState } from 'react';

function App() {
  const [contagem, setContagem] = useState(0);

  function comecarContagem() {
    setInterval(() => {
      setContagem(function (contagemAnterior) {
        return contagemAnterior + 1;
      });
    }, 1000);
  }

  return (
    <div className="App">
      Contagem {contagem}s
      <button onClick={comecarContagem}>Começar Contagem</button>
    </div>
  );
}

export default App;