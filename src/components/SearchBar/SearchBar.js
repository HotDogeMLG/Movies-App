import React from 'react'

import './SearchBar.css'

export default class SearchBar extends React.Component {
  render() {
    const { value, onSearch } = this.props
    return (
      <form className="SearchBar">
        <label className="search-field search-label">
          <input
            value={value}
            type="text"
            className="search-field search-input"
            placeholder="Type to search..."
            onChange={(e) => {
              onSearch(e.target.value)
            }}
          ></input>
        </label>
      </form>
    )
  }
}
