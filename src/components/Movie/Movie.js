import React from 'react'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

import './Movie.css'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'
import Stars from '../Stars/Stars'

export default class Movie extends React.Component {
  state = {
    image: '',
    loading: true,
    error: false,
  }

  cutDescription(desc, title) {
    if (!desc) return 'No description'
    let maxLen = 220
    if (title.length > 20) {
      maxLen = 170
    }
    if (title.length > 35) {
      maxLen = 150
    }

    if (desc.length > maxLen) {
      let newDesc = desc.slice(0, maxLen)
      let descArr = newDesc.split(' ')
      descArr[descArr.length - 1] = '...'
      newDesc = descArr.join(' ')
      return newDesc
    }
    return desc
  }

  async getPoster(path) {
    this.setState({
      loading: true,
    })
    if (path === null || path === undefined) this.showError()
    else
      try {
        const response = await fetch(`https://image.tmdb.org/t/p/original${path}`)
        const poster = response.url
        this.setState({
          image: poster,
          loading: false,
        })
      } catch (e) {
        this.showError()
      }
  }

  async showError() {
    this.setState({
      error: true,
      loading: false,
    })
  }

  showDate(date) {
    if (!date) return 'Release date unknown'
    return format(parseISO(date), 'MMMM d, y')
  }

  componentDidMount() {
    this.getPoster(this.props.movie.poster_path)
  }

  render() {
    const { movie, ratedMovies, sessionID } = this.props
    const { error, loading, image } = this.state

    const rating = movie.vote_average.toFixed(1)
    let ratingClasses = 'rating'
    if (rating < 3) ratingClasses += ' worst'
    else if (rating < 5) ratingClasses += ' bad'
    else if (rating < 7) ratingClasses += ' good'
    else ratingClasses += ' excellent'

    const img = <img src={image} alt="Movie Poster" className="poster"></img>
    let poster = loading ? <Spinner /> : img
    if (error) poster = <Error />
    return (
      <li className="Movie">
        {poster}
        <article className="Movie__info">
          <div className="description-wrapper">
            <div className={ratingClasses}>{rating}</div>
            <h4 className="name">{movie.title}</h4>
            <span className="release-date">{this.showDate(movie.release_date)}</span>
            <div className="genres-container">
              <span className="genre">Action</span>
              <span className="genre">Drama</span>
            </div>
            <p className="description">{this.cutDescription(movie.overview, movie.title)}</p>
          </div>
          <Stars movie={movie} ratedMovies={ratedMovies} sessionID={sessionID} />
        </article>
      </li>
    )
  }
}
