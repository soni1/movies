import React, { Component } from 'react';
import MovieImage from '../layout/MovieImage/MovieImage';
import SearchBar from '../layout/SearchBar/SearchBar';
import Grid from '../layout/Grid/Grid';
import Thumbnail from '../layout/Thumbnail/Thumbnail';
import LoadMoreBtn from '../layout/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../layout/Spinner/Spinner';
import './Home.css';

class Home extends Component {
  state = {

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