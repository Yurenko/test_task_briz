import React from 'react';
import { Users } from '../../App';
import style from './List.module.css'

interface ListItemStyle {
    item: Users,
    handleDeleteClick: (id: number | null) => void,
    handleEditClick: (item: Users) => void
}

const ListItem: React.FC<ListItemStyle> = ({ item, handleDeleteClick, handleEditClick }) => {
    return (
        <li className={style.listItem} >
            <div>
                <span className={style.name}>{item.name}</span>: {item.number}
            </div>
            <div>
                <button type='button' onClick={() => handleDeleteClick(item.id)} className={style.button} >X</button>
                <button type='button' onClick={() => handleEditClick(item)} className={style.button} >Edit</button>
            </div>
        </li>
    )
}
export default ListItem