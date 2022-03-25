//Exercício - 01

import close from './assets/close.svg';
import cookie from './assets/cookie.svg';
import { useState } from 'react';

function AlertCard({ type, message, children }) {
  const [hide, setHide] = useState('unhide');

  function esconder() {
    const hided = hide === 'unhide' ? 'hide' : 'unhide';

    setHide(hided);
  }

  return (
    <div className={'card ' + hide}>
      <img onClick={esconder} src={close} alt="Close" className="closeBtn" />
      <img
        src={cookie}
        alt={"Cookie"}
        className="icon"
      />
      <p>
        {children}
      </p>
      <button onClick={esconder} className={'cookie'}>
        {message}
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <AlertCard type="cookie" message="Tudo bem!">
        Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.
      </AlertCard>
    </div>
  );
}

export default App;
