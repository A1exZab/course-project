import React from 'react'
import { Badge } from 'react-bootstrap'
import './styles.css'
import PropTypes from 'prop-types'

export function SearchStatus({ usersAmount }) {
	return (
		<>
			{usersAmount > 0 ? (
				<div className='search-status'>
					<Badge style={{ fontSize: '20px', marginBottom: '5px' }}>
						Тусует с тобой сегодня: {usersAmount} человек(а)
					</Badge>
				</div>
			) : (
				<div className='search-status__container'>
					<Badge bg='danger'>Cегодня с тобой никто не тусует 😒</Badge>
				</div>
			)}
		</>
	)
}

SearchStatus.propTypes = {
	usersAmount: PropTypes.number.isRequired
}
