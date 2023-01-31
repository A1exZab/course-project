import React from 'react';
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

export default function User({
	name,
	qualities,
	profession,
	completedMeetings,
	rate,
	_id,
	handleDeleteButton
}) {
	return (
		<>
			<td>{name}</td>
			<td>
				{qualities.map((quality) => {
					return (
						<Badge key={quality._id} style={{ marginRight: '5px' }} bg={quality.color}>
							{quality.name}
						</Badge>
					);
				})}
			</td>
			<td>{profession.name}</td>
			<td>{completedMeetings}</td>
			<td>{rate}/5</td>
			<td>
				<Button onClick={(id) => handleDeleteButton(_id)} variant='danger'>
					Удалить
				</Button>
			</td>
		</>
	);
}
