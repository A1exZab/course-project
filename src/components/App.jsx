import '../../styles.css'
import { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Users } from './users'
import API from '../API'
import { SearchStatus } from './SearchStatus'

function App() {
	const [users, setUsers] = useState(API.users.fetchAll())

	const handleDeleteButton = (id) => {
		setUsers(users.filter((user) => user._id !== id))
	}

	const handleBookmark = (id) => {
		const updateUsers = users.map((user) => {
			return user._id === id ? { ...user, bookmark: !user.bookmark } : user
		})
		setUsers(updateUsers)
	}

	return (
		<div className='App'>
			{users.length > 0 ? (
				<>
					<SearchStatus usersAmount={users.length} />
					<Table bordered='rows' variant='dark'>
						<thead>
							<tr>
								<th>Имя</th>
								<th>Качества</th>
								<th>Профессия</th>
								<th>Встретился, раз</th>
								<th>Оценка</th>
								<th>Избранное</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<Users
								users={users}
								onClickDeleteButton={handleDeleteButton}
								onClickBookmark={handleBookmark}
							/>
						</tbody>
					</Table>
				</>
			) : (
				<SearchStatus usersAmount={users.length} />
			)}
		</div>
	)
}

export default App
