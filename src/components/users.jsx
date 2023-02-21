import React from 'react'
import User from './user'

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
