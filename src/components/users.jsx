import React from 'react'
import User from './user'
import PropTypes from 'prop-types'

export function Users({ users, onClickDeleteButton, onClickBookmark }) {
	return (
		<>
			{users.map((user) => {
				return (
					<User
						key={user._id}
						onClickDeleteButton={onClickDeleteButton}
						onClickBookmark={onClickBookmark}
						{...user}
					/>
				)
			})}
		</>
	)
}

Users.propTypes = {
	users: PropTypes.array.isRequired,
	onClickDeleteButton: PropTypes.func.isRequired,
	onClickBookmark: PropTypes.func.isRequired
}
