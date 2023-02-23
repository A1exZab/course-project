import React from 'react'
import plus from '../../assets/img/bookmark-plus.svg'
import './styles.css'
import added from '../../assets/img/bookmark-added.svg'
import './styles.css'

export function Bookmark({ onClickBookmark, id, bookmark }) {
	return (
		<div className='bookmark__container'>
			<img onClick={() => onClickBookmark(id)} src={bookmark ? added : plus} alt='' />
		</div>
	)
}
