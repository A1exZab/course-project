import React from 'react'
import { Button } from 'react-bootstrap'
import { Qualities } from './Qualities'
import { Bookmark } from './Bookmark'
import PropTypes from 'prop-types'
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

User.propTypes = {
	bookmark: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	qualities: PropTypes.array.isRequired,
	profession: PropTypes.object.isRequired,
	completedMeetings: PropTypes.number.isRequired,
	rate: PropTypes.number.isRequired,
	_id: PropTypes.string.isRequired,
	onClickDeleteButton: PropTypes.func.isRequired,
	onClickBookmark: PropTypes.func.isRequired
}
