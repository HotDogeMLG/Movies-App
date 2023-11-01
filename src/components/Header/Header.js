import React from 'react'

import './Header.css'

export default class Header extends React.Component {
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
