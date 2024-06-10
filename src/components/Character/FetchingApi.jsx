import { useState, useEffect } from 'react';
import Character from '../imageRotate/imageRotate';

const FetchingApi = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const characters = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        const charactersJson = await characters.json();
        setCharacters(charactersJson.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getCharacters();
  }, []);
  return (
    <div>
      {characters.map((character) => (
        <Character
          key={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
    </div>
  );
};

export default FetchingApi;
