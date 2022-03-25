//Exercício - 02

import kelvin from './assets/kelvin-costa.png';
import { useState } from 'react';

function UserCard({ name, picture, username, followers, following }) {
  const [follow, setFollow] = useState('unfollow');
  const [contagem, setContagem] = useState(followers);

  function newFollow() {
    const newFollower = follow === 'unfollow' ? 'following' : 'unfollow';

    setFollow(newFollower);

    setContagem(function (contagemAnterior) {
      return contagemAnterior + 1;
    });
  }

  return (
    <div className="master-card">
      <div className="card">
        <img src={picture} alt={name} />
        <h2>{name}</h2>
        <span className="username">{username}</span>
        <span className="stats">
          {contagem} seguidores <br />
          {following} seguindo
        </span>
      </div>
      <button onClick={newFollow} className={follow}>
        {follow === 'unfollow' ? 'Seguir' : 'Seguindo'}
      </button>
    </div>
  )
}

function App() {

  const users = [
    {
      id: 1,
      name: "Kelvin Costa",
      picture: kelvin,
      username: "@costa",
      followers: 140,
      following: 207
    }
  ];

  return (
    <div className="App">
      {users.map(function (user) {
        return <UserCard
          key={user.id}
          {...user}
        />
      })}
    </div>
  );
}

export default App;