import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getImageUrl } from './utils.js';

function MyButton(props){
  return(
    <button onClick={props.Fn}>Soy un botón custom y mi cuenta es: {props.count} </button>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, size)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div className="profile-container">
      <h1>Ejercicio 5: Avatares con Props Complejas</h1>

      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'Yfe0oq2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Akililu Lemma',
          imageId: 'OKS6Y1A'
        }}
      />
      <Avatar
        size={50}
        person={{
          name: 'Lin Lanying',
          imageId: '1HXS0H6'
        }}
      />
    </div>
  );
}
