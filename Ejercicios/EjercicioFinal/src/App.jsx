import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CientificoCard from './CientificoCard/CientificoCard.jsx'; 
import curieImage from './assets/curie.jpg'; 
import saruhashiImage from './assets/katsuko.jpg'; 

export default function App() { 
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Científicos Notables</h2>
            
            <CientificoCard 
                nombre="María Skłodowska-Curie"
                imagenId={curieImage}
                profesion="física y química"
                premios="4 (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)"
                descubrio="polonio (elemento químico)"
            />
            
            <CientificoCard 
                nombre="Katsuko Saruhashi"
                imagenId={saruhashiImage} 
                profesion="geoquímica"
                premios="2 (Premio Miyake de geoquímica, Premio Tanaka)"
                descubrio="un método para medir el dióxido de carbono en el agua de mar"
            />
        </div>
    );
}
