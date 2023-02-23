import '../../styles.css'
import { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Users } from './users'
import API from '../API'
import { SearchStatus } from './SearchStatus'
import { Pagination } from './Pagination'
import { paginate } from '../utils/paginate'
import '../index.css'

function App() {
	const [users, setUsers] = useState(API.users.fetchAll())
	const [currentPage, setCurrentPage] = useState(1)

	const pageSize = 4

	const userCrop = paginate(users, currentPage, pageSize)

	const handlePageChange = (pageIndex) => {
		setCurrentPage(pageIndex)
	}

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
								users={userCrop}
								onClickDeleteButton={handleDeleteButton}
								onClickBookmark={handleBookmark}
							/>
						</tbody>
					</Table>
					<Pagination
						itemsCount={users.length}
						pageSize={pageSize}
						onPageChange={handlePageChange}
						currentPage={currentPage}
					/>
				</>
			) : (
				<SearchStatus usersAmount={users.length} />
			)}
		</div>
	)
}

export default App
