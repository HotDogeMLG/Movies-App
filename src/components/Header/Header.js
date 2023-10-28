import React from 'react'

import './Header.css'

export default class Header extends React.Component {
  state = {
    searchActive: true,
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
    let searchClasses = 'header-btn'
    let ratedClasses = 'header-btn'
    const { searchActive } = this.state
    searchActive ? (searchClasses += ' active') : (ratedClasses += ' active')

    return (
      <header className="Header">
        <button type="button" className={searchClasses} onClick={this.searchClick}>
          Search
        </button>
        <button type="button" className={ratedClasses} onClick={this.ratedClick}>
          Rated
        </button>
      </header>
    )
  }
}
