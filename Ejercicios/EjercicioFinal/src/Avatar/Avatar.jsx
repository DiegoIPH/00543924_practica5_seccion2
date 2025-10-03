import { getImageUrl } from '../utils.js'; 
import './Avatar.css'; 

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

export default Avatar;