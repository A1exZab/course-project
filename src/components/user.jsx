import React from 'react'
import { Button } from 'react-bootstrap'
import { Qualities } from './Qualities'
import { Bookmark } from './Bookmark'

export default function User({
	bookmark,
	name,
	qualities,
	profession,
	completedMeetings,
	rate,
	_id,
	onClickDeleteButton,
	onClickBookmark
}) {
	return (
		<tr key={_id}>
			<td>{name}</td>
			<td>
				<Qualities qualities={qualities} />
			</td>
			<td>{profession.name}</td>
			<td>{completedMeetings}</td>
			<td>{rate}/5</td>
			<td>
				<Bookmark bookmark={bookmark} id={_id} onClickBookmark={onClickBookmark} />
			</td>
			<td>
				<Button onClick={() => onClickDeleteButton(_id)} variant='danger'>
					Удалить
				</Button>
			</td>
		</tr>
	)
}
