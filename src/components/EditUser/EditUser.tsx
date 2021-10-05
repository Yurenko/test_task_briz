import React from 'react';
import style from '../UserForm/UserForm.module.css'

interface UserForm {
    name: string,
    number: string,
    handleEditFormSubmit: (e: React.SyntheticEvent) => void,
    handleEditName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleEditNumber: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const EditUser: React.FC<UserForm> = ({ name, number, handleEditFormSubmit, handleEditName, handleEditNumber }) => {

    return (
        <form onSubmit={handleEditFormSubmit} className={style.form}>
            <h2>Edit</h2>
            <label htmlFor='name'>Name:
                <input type='text' name='editName' onChange={handleEditName} value={name} className={style.input} id='name' placeholder='Name' required />
            </label>
            <label htmlFor='number'>Number:
                <input type='number' name='editNumber' onChange={handleEditNumber} value={number} className={style.input} id='number' placeholder='Number' required />
            </label>
            <button type='submit' className={style.button}>Edit</button>
        </form>
    )
}

export default EditUser