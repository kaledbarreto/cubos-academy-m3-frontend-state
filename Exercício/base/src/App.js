//Exercício - 03

import kelvin from './assets/hamburguer.png';
import { useState } from 'react';

function FoodCard({ name, picture, description }) {
  const [contagem, setContagem] = useState(0);

  function plus() {
    setContagem(function (contagemAnterior) {
      return contagemAnterior + 1;
    });
  }

  function sub() {
    setContagem(function (contagemAnterior) {
      return contagemAnterior - 1;
    });
  }

  return (
    <div className="master-card">
      <div className="card">
        <img src={picture} alt={name} />
        <h2>{name}</h2>
        <span className="description">{description}</span>
        <div className="quantity">
          <div onClick={sub} className="sub">
            -
          </div>
          <div className="amount">
            {contagem}
          </div>
          <div onClick={plus} className="sub">
            +
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {

  const foods = [
    {
      id: 1,
      name: "Hamburguer",
      picture: kelvin,
      description: "Arcu, sagittis, ut lectus congue dapibus semper odio a, lobortis.",
    }
  ];

  return (
    <div className="App">
      {foods.map(function (food) {
        return <FoodCard
          key={food.id}
          {...food}
        />
      })}
    </div>
  );
}

export default App;