import React from 'react'
import PropTypes from 'prop-types'

import './MoviesContainer.css'

import Movie from '../Movie/Movie'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'

export default class MoviesContainer extends React.Component {
  static propTypes = {
    movies: PropTypes.array,
    sessionID: PropTypes.string,
    ratedMovies: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.bool,
  }

  render() {
    const { movies, loading, error, ratedMovies, sessionID } = this.props
    if (loading)
      return (
        <div className="center">
          <Spinner />
        </div>
      )
    else if (error)
      return (
        <div className="center">
          <span className="error-text">
            Something went <b>terribly</b> wrong, try again later
          </span>
          <Error />
        </div>
      )
    else if (movies.length === 0)
      return (
        <div className="no-content">No content here, you should probably check other pages or change your request</div>
      )
    const allMovies = movies.map((el) => {
      return <Movie movie={el} ratedMovies={ratedMovies} sessionID={sessionID} key={el.id} />
    })
    return <ul className="MoviesContainer">{allMovies}</ul>
  }
}
