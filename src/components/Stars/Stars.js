import React from 'react'
import PropTypes from 'prop-types'

import apiService from '../../services/apiService'
import './Stars.css'

export default class Stars extends React.Component {
  state = {
    error: false,
    hovered: -1,
    rating: 0,
  }

  static propTypes = {
    movie: PropTypes.object,
    ratedMovies: PropTypes.array,
    sessionID: PropTypes.string,
  }

  api = new apiService()

  getRating = (movie, ratedMovies) => {
    for (let ratedMovie of ratedMovies) {
      if (movie.id === ratedMovie.id) {
        let rating = ratedMovie.rating
        this.setState({
          rating,
        })
      }
    }
  }

  addRating = async (target) => {
    let rating = target.className[target.className.length - 1]
    rating = +rating + 1
    const { sessionID, movie } = this.props
    this.setState({
      rating,
    })
    try {
      await this.api.addRating(sessionID, movie.id, rating)
    } catch (e) {
      this.setState({ error: true })
    }
  }

  onHover = (target) => {
    let hovered = target.className[target.className.length - 1]
    hovered = +hovered + 1
    this.setState({
      hovered,
    })
  }

  componentDidMount() {
    const { movie, ratedMovies } = this.props
    this.getRating(movie, ratedMovies)
  }

  render() {
    if (this.state.error) return <div className="stars-error">Something went wrong</div>

    const stars = []
    const { rating, hovered } = this.state
    for (let i = 0; i < 10; i++) {
      let classes = 'fa fa-star '
      if (i < rating) classes += ' checked '
      if (i < hovered) classes += ' hovered  '
      classes += i
      const star = (
        <span
          key={i}
          value={i}
          className={classes}
          onClick={(e) => {
            this.addRating(e.target)
          }}
          onMouseEnter={(e) => {
            this.onHover(e.target)
          }}
          onMouseLeave={() => {
            this.setState({ hovered: -1 })
          }}
        ></span>
      )
      stars.push(star)
    }
    return <div className="Stars">{stars}</div>
  }
}
