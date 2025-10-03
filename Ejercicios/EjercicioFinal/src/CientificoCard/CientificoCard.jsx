import Avatar from '../Avatar/Avatar.jsx'; 
import './CientificoCard.css';

function CientificoCard({ nombre, imagenId, profesion, premios, descubrio }) {
    
    return (
        <div className="card-cientifico">
            <h2>{nombre}</h2>
            
            <Avatar 
                person={{ name: nombre, imageId: imagenId }} 
                size={90} 
            /> 
            
            <ul>
                <li><strong>Profesión:</strong> {profesion}</li>
                <li><strong>Premios:</strong> {premios}</li>
                <li><strong>Descubrió:</strong> {descubrio}</li>
            </ul>
        </div>
    );
}

export default CientificoCard;