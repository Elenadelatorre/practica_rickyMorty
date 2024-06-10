import { useState } from 'react';
import './imageRotate.css';

const Character = ({ name, image }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div onClick={handleClick}>
      <h1>{name}</h1>
      <img src={image} alt={name} className={isRotated ? 'rotated' : ''} />
    </div>
  );
};

export default Character;
