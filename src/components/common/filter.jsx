import React from 'react';
import { getGenres } from '../../services/fakeGenreService';

const Filter = () => {
  const genres = getGenres();
  return (
    <div className='list-group'>
      {genres.map((genre) => (
        <button type='button' className='list-group-item list-group-item-action'>
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default Filter;
// TODO: Make the component to be a list of buttons
