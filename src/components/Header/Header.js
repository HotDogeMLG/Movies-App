import React from 'react'
import PropTypes from 'prop-types'

import './Header.css'

export default class Header extends React.Component {
  static propTypes = {
    tab: PropTypes.string,
    onTabChange: PropTypes.func,
  }

  searchClick = () => {
    this.setState({
      searchActive: true,
    })
  }

  ratedClick = () => {
    this.setState({
      searchActive: false,
    })
  }

  render() {
    const { tab, onTabChange } = this.props
    let searchClasses = 'header-btn'
    let ratedClasses = 'header-btn'
    tab === 'search' ? (searchClasses += ' active') : (ratedClasses += ' active')

    return (
      <header className="Header">
        <button
          type="button"
          className={searchClasses}
          onClick={() => {
            onTabChange('search')
          }}
        >
          Search
        </button>
        <button
          type="button"
          className={ratedClasses}
          onClick={() => {
            onTabChange('rated')
          }}
        >
          Rated
        </button>
      </header>
    )
  }
}
