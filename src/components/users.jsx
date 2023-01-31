import React from 'react';
import User from './user';

export default function Users({ users, handleDeleteButton }) {
	console.log(users);
	return (
		<>
			{users.map((user) => {
				return (
					<tr key={user._id}>
						<User handleDeleteButton={handleDeleteButton} {...user} />
					</tr>
				);
			})}
		</>
	);
}
