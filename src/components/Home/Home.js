import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../../config';

import MovieImage from '../layout/MovieImage/MovieImage';
import SearchBar from '../layout/SearchBar/SearchBar';
import Grid from '../layout/Grid/Grid';
import Thumbnail from '../layout/Thumbnail/Thumbnail';
import LoadMoreBtn from '../layout/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../layout/Spinner/Spinner';
import './Home.css';

class Home extends Component {
  state = {
    movies: [],
    movieImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ''
  }
  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchItems(endpoint);
  }

  loadMoreItems = () => {
    let endpoint = '';
    this.setState({ loading: true });

    if (this.state.searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      this.setState({
        //copying the old movies and appending the new movies 
        movies: [...this.state.movies, ...result.results],
        movieImage: this.state.movieImage || result.results[0],
        loading: false,
        currentPage: result.page,
        totalPages: result.total_pages
      })
    })
    .catch(error => console.error('Error:', error))
  }

  render() {
    return (
      <div>
        <MovieImage />
        <SearchBar />
        <Grid />
        <Spinner />
        <LoadMoreBtn />
      </div>
    )
  }
}

export default Home;