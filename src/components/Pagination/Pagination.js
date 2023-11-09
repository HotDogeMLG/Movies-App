import React from 'react'
import PropTypes from 'prop-types'

import './Pagination.css'

export default class Pagination extends React.Component {
  static propTypes = {
    page: PropTypes.number,
    totalResults: PropTypes.number,
    onPageChange: PropTypes.func,
  }

  render() {
    const { onPageChange, page, totalResults } = this.props
    const listItems = []
    const lastInd = Math.max(Math.ceil(totalResults / 10), 1)
    let minInd, maxInd
    if (page < lastInd - 3) {
      minInd = Math.max(1, page - 3)
      maxInd = Math.max(7, page + 3)
    } else {
      minInd = Math.max(lastInd - 6, 1)
      maxInd = lastInd
    }

    for (let i = minInd; i <= maxInd; i++) {
      let liClasses = 'page-item'
      let li
      if (i === page) liClasses += ' active'

      let otherLis = (
        <li className={liClasses} key={i}>
          <button className="page-link" type="button" disabled={true}>
            ...
          </button>
        </li>
      )

      let usualLi = (
        <li className={liClasses} key={i}>
          <button
            className="page-link"
            type="button"
            onClick={() => {
              onPageChange(i)
            }}
          >
            {i}
          </button>
        </li>
      )

      if (lastInd - minInd >= 6) {
        if (i === minInd && page > 3) li = otherLis
        else if (i === maxInd && page < lastInd - 3) li = otherLis
        else li = usualLi
      } else li = usualLi
      listItems.push(li)
    }

    let firstPage, lastPage
    if (page > 3)
      firstPage = (
        <li className="page-item">
          <button
            className="page-link"
            type="button"
            onClick={() => {
              onPageChange(1)
            }}
          >
            1
          </button>
        </li>
      )
    if (page < lastInd - 3)
      lastPage = (
        <li className="page-item">
          <button
            className="page-link"
            type="button"
            onClick={() => {
              onPageChange(lastInd)
            }}
          >
            {lastInd}
          </button>
        </li>
      )

    let leftClasses, rightClasses
    leftClasses = rightClasses = 'page-item'
    if (page === 1) leftClasses += ' disabled'
    if (page === lastInd) rightClasses += ' disabled'
    return (
      <ul className="pagination pagination-sm">
        <li className={leftClasses}>
          <button
            className="page-link"
            type="button"
            onClick={() => {
              onPageChange(page - 1)
            }}
          >
            &laquo;
          </button>
        </li>
        {firstPage}
        {listItems}
        {lastPage}
        <li className={rightClasses}>
          <button
            className="page-link"
            type="button"
            onClick={() => {
              onPageChange(page + 1)
            }}
          >
            &raquo;
          </button>
        </li>
      </ul>
    )
  }
}
