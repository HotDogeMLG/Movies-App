import React from 'react'

import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import Pagination from '../Pagination/Pagination'
import apiService from '../../services/apiService'
import './App.css'

export default class App extends React.Component {
  state = {
    movies: [],
    loading: true,
  }

  async getTopMoives() {
    this.setState({
      loading: true,
    })
    const api = new apiService()
    await api.getToken()
    await api.createSession()
    const topMovies = await api.getTopMovies()
    this.setState({
      movies: topMovies.results,
      loading: false,
    })
  }

  componentDidMount() {
    this.getTopMoives()
  }

  render() {
    const { movies, loading } = this.state
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <MoviesContainer movies={movies} loading={loading} />
        <Pagination />
      </div>
    )
  }
}
