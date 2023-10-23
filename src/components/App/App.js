import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Pagination from '../Pagination/Pagination';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <SearchBar />
        <MoviesContainer />
        <Pagination />
      </div>
    );
  }
}
