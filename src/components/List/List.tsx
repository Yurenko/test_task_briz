import React from 'react';
import { Users } from '../../App'
import style from './List.module.css'

interface ListType {
    users: Array<Users>,
    handleDeleteClick: (id: number | null) => void,
    handleEditClick: (item: Users) => void
}

const List: React.FC<ListType> = ({ users, handleDeleteClick, handleEditClick }) => {
    return (
        <ul className={style.list}>
            {users.map(item =>
                <li key={item.id} className={style.listItem} >
                    <div>
                        <span className={style.name}>{item.name}</span>: {item.number}
                    </div>
                    <div>
                        <button type='button' onClick={() => handleDeleteClick(item.id)} className={style.button} >X</button>
                        <button type='button' onClick={() => handleEditClick(item)} className={style.button} >Edit</button>
                    </div>
                </li>)}
        </ul>
    )
}

export default List

