import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import './styles.css'

export function Pagination({ itemsCount, pageSize, onPageChange, currentPage }) {
	const pageCount = Math.ceil(itemsCount / pageSize)
	const pages = _.range(1, pageCount + 1)
	if (pageCount === 1) return null
	return (
		<div className='pagination__container'>
			<nav>
				<ul className='pagination'>
					{pages.map((page) => (
						<li
							className={'page-item' + (page === currentPage ? ' active' : '')}
							key={'page_' + page}>
							<a className='page-link' onClick={() => onPageChange(page)}>
								{page}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

Pagination.propTypes = {
	itemsCount: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired
}
