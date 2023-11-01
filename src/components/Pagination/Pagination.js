import React from 'react'

import './Pagination.css'

export default class Pagination extends React.Component {
  render() {
    const { onPageChange, page } = this.props
    const listItems = []

    for (let i = 1; i <= 5; i++) {
      let liClasses = 'page-item'
      if (i === page) liClasses += ' active'
      let li = (
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
      listItems.push(li)
    }

    let leftClasses, rightClasses
    leftClasses = rightClasses = 'page-item'
    if (page === 1) leftClasses += ' disabled'
    else if (page === 5) rightClasses += ' disabled'
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
        {listItems}
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
