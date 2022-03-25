import { useState } from 'react';

function App() {
  let [contador, setContador] = useState(0); /* Utilizando o useState, como uma variável que quer que o react mude se ela mudar*/

  function addUm() {
    setContador(contador + 1);
  }

  function subUm() {
    setContador(contador - 1);
  }

  function reset() {
    setContador(contador = 0);
  }

  return (
    <div className="App">
      Contagem {contador}
      <button onClick={addUm}>Contar + 1</button>
      <button onClick={subUm}>Contar - 1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
