import React from 'react'
import { Badge } from 'react-bootstrap'

export function Qualities({ qualities }) {
	return (
		<>
			{qualities.map((quality) => {
				return (
					<Badge key={quality._id} style={{ marginRight: '5px' }} bg={quality.color}>
						{quality.name}
					</Badge>
				)
			})}
		</>
	)
}
