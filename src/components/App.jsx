import '../../styles.css';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import Users from './users';
import API from '../API';

function App() {
	const [users, setUsers] = useState(API.users.fetchAll());

	const handleDeleteButton = (id) => {
		setUsers(users.filter((user) => user._id !== id));
	};

	return (
		<div className='App'>
			{users.length > 0 ? (
				<>
					<Badge style={{ fontSize: '20px', marginBottom: '5px' }}>
						Тусует с тобой сегодня: {users.length} человек(а)
					</Badge>
					<Table bordered='rows' variant='dark'>
						<thead>
							<tr>
								<th>Имя</th>
								<th>Качества</th>
								<th>Профессия</th>
								<th>Встретился, раз</th>
								<th>Оценка</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<Users users={users} handleDeleteButton={handleDeleteButton} />
						</tbody>
					</Table>
				</>
			) : (
				<Badge style={{ fontSize: '50px', marginBottom: '5px' }} bg='danger'>
					Cегодня с тобой никто не тусует 😒
				</Badge>
			)}
		</div>
	);
}

export default App;
