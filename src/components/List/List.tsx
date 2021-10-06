import React from 'react';
import { Users } from '../../App'
import style from './List.module.css'
import ListItem from './ListItem';

interface ListType {
    users: Array<Users>,
    handleDeleteClick: (id: number | null) => void,
    handleEditClick: (item: Users) => void
}

const List: React.FC<ListType> = ({ users, handleDeleteClick, handleEditClick }) => {
    return (
        <ul className={style.list}>
            {users.map(item => <ListItem key={item.id} item={item} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick} />
            )}
        </ul>
    )
}

export default List

