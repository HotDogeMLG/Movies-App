import React from 'react'

import './SearchBar.css'

export default class SearchBar extends React.Component {
  render() {
    return (
      <form className="SearchBar">
        <label className="search-field search-label">
          <input type="text" className="search-field search-input" placeholder="Type to search..."></input>
        </label>
      </form>
    )
  }
}
