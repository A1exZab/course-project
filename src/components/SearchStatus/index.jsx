import React from 'react'
import { Badge } from 'react-bootstrap'
import './styles.css'

export function SearchStatus({ usersAmount }) {
	return (
		<>
			{usersAmount > 0 ? (
				<Badge style={{ fontSize: '20px', marginBottom: '5px' }}>
					Тусует с тобой сегодня: {usersAmount} человек(а)
				</Badge>
			) : (
				<div className='container'>
					<Badge bg='danger'>Cегодня с тобой никто не тусует 😒</Badge>
				</div>
			)}
		</>
	)
}
