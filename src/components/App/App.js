import React from 'react'
import { debounce } from 'lodash'

import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import Pagination from '../Pagination/Pagination'
import apiService from '../../services/apiService'
import { GenresProvider } from '../GenresContext/GenresContext'
import './App.css'

export default class App extends React.Component {
  state = {
    movies: [],
    loading: true,
    error: false,
    page: 1,
    searchVal: '',
    tab: 'search',
  }

  api = new apiService()

  async getTopMoives() {
    this.setState({
      loading: true,
    })
    try {
      const topMovies = await this.api.getTopMovies()
      this.setState({
        movies: topMovies.results,
        loading: false,
      })
    } catch (e) {
      console.log('Произошел пиздец')
      this.throwError()
    }
  }

  changePage(page) {
    this.setState({
      page,
    })
  }

  async changeTab(tab) {
    await this.setState({
      tab,
      loading: true,
    })
    if (this.state.tab === 'rated') {
      try {
        const ratedMovies = await this.api.getRatedMovies(this.sessionID)
        this.setState({
          movies: ratedMovies.results,
          ratedMovies: ratedMovies.results,
          page: 1,
        })
        this.setState({
          loading: false,
        })
      } catch (e) {
        this.throwError()
      }
    } else {
      this.setState({ page: 1 })
      this.searchRequest(this.state.searchVal)
    }
  }

  async searchMovies(val) {
    if (this.state.searchVal !== val) {
      this.setState({ searchVal: val })
      this.debouncedSearch(val)
    }
  }

  searchRequest = async (val) => {
    try {
      const ratedMovies = await this.api.getRatedMovies(this.sessionID)
      this.setState({ ratedMovies: ratedMovies.results })
    } catch (e) {
      this.throwError()
    }
    if (val === '') {
      this.getTopMoives()
    } else {
      this.setState({
        page: 1,
        loading: true,
      })

      try {
        let movies = await this.api.searchMovies(val)
        this.setState({
          movies: movies.results,
          loading: false,
        })
      } catch (e) {
        this.throwError()
      }
    }
  }

  throwError() {
    this.setState({
      loading: false,
      error: true,
    })
  }

  debouncedSearch = debounce(this.searchRequest, 800)

  async componentDidMount() {
    try {
      this.token = await this.api.getToken()
      this.sessionID = await this.api.createSession()
      let genres = await this.api.getGenres()
      this.genres = genres.genres
      const { searchVal } = this.state
      this.searchRequest(searchVal)
    } catch (e) {
      this.throwError()
    }
  }

  componentDidCatch() {
    this.setState({ loading: false, error: true })
  }

  render() {
    const { movies, loading, error, page, searchVal, tab, ratedMovies } = this.state
    let shownMovies = []
    if (movies && !loading) shownMovies = movies.slice((page - 1) * 4, page * 4)

    const searchBar =
      tab === 'search' ? (
        <SearchBar
          value={searchVal}
          onSearch={(val) => {
            this.searchMovies(val)
          }}
        />
      ) : null
    return (
      <GenresProvider value={this.genres}>
        <div className="App">
          <Header
            tab={tab}
            onTabChange={(tab) => {
              this.changeTab(tab)
            }}
          />
          {searchBar}
          <MoviesContainer
            movies={shownMovies}
            sessionID={this.sessionID}
            ratedMovies={ratedMovies}
            loading={loading}
            error={error}
          />
          <Pagination
            page={page}
            onPageChange={(page) => {
              this.changePage(page)
            }}
          />
        </div>
      </GenresProvider>
    )
  }
}
