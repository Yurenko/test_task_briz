import React from 'react';
import style from './UserForm.module.css'

interface UserFormType {
    name: string,
    number: string,
    handleSubmit: (e: React.SyntheticEvent) => void,
    handleName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleNumber: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UserForm: React.FC<UserFormType> = ({ name, number, handleSubmit, handleName, handleNumber }) => {

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <h2>Phone book</h2>
            <label htmlFor='name'>Name:
                <input type='text' name='name' onChange={handleName} value={name} className={style.input} id='name' placeholder='Name' required />
            </label>
            <label htmlFor='number'>Number:
                <input type='number' name='number' onChange={handleNumber} value={number} className={style.input} id='number' placeholder='Number' required />
            </label>
            <button type='submit' className={style.button} >Add</button>
        </form>
    )
}

export default UserForm