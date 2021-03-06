import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import Filter from './common/filter';

class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 4,
    selectedGenre: {},
  };

  componentDidMount() {
    this.setState({ movies: getMovies() });
  }

  handleDelete = (movie) => {
    const newMovies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: newMovies });
  };

  handleClick = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);

    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleItemSelect = (genre) => {
    console.log(genre);
  };

  render() {
    const { length: movieCount } = this.state.movies;
    const { currentPage, pageSize, movies: allMovies, selectedGenre } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);

    if (movieCount === 0) return <p>There are no movies in the database</p>;

    return (
      <div className='row'>
        <div className='col-3'>
          <Filter onItemSelect={this.handleItemSelect} selectedItem={selectedGenre} />
        </div>
        <div className='col'>
          <p>Showing {movieCount} movies in the database</p>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Title</th>
                <th scope='col'>Genre</th>
                <th scope='col'>Stock</th>
                <th scope='col'>Rate</th>
                <th scope='col'></th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like like={movie.liked} handleClick={() => this.handleClick(movie)} />
                  </td>
                  <td>
                    <button className='btn btn-danger btn-sm' onClick={() => this.handleDelete(movie)}>
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination itemsCount={movieCount} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange} />
        </div>
      </div>
    );
  }
}

export default Movies;
