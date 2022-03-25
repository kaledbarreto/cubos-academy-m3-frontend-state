import { useState } from 'react';

function App() {
  const [tema, setTema] = useState('claro');

  function trocaTema() {
    const novoTema = tema === 'claro' ? 'escuro' : 'claro';

    setTema(novoTema);
  }

  return (
    <div className={'App ' + tema}>
      <h1>Olá Mundo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos dolor iure. Quas, unde quasi alias saepe nemo corporis deserunt animi repellendus, ea necessitatibus accusantium?
      </p>
      <button onClick={trocaTema}>Tema {tema === 'claro' ? '🌞' : '🌛'}</button>
    </div>
  );
}

export default App;
