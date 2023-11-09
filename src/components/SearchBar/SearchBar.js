import React from 'react'
import PropTypes from 'prop-types'

import './SearchBar.css'

export default class SearchBar extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onSearch: PropTypes.func,
  }

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
