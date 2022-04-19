import React from 'react';
import { getGenres } from '../../services/fakeGenreService';

const Filter = () => {
  const genres = getGenres();
  return (
    <ul className='list-group'>
      {genres.map((genre) => (
        <li className='list-group-item'>{genre.name}</li>
      ))}
    </ul>
  );
};

export default Filter;
