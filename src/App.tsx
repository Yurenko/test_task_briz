import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import EditUser from './components/EditUser/EditUser';
import List from './components/List/List'
import UserForm from './components/UserForm/UserForm'

export interface Users {
  id: number | null,
  name: string,
  number: string
}

function App() {

  const [users, setUsers] = useState<Array<Users>>([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState<Users>({ id: null, name: '', number: '' });

  useEffect(() => {
    const item = localStorage.getItem('contactUsers');
    if (item) {
      if (typeof item === 'string') {
        const initialValue = JSON.parse(item);
        setUsers(initialValue)
      }
    } else {
      Promise.resolve([
        { id: 1, name: 'Yura', number: '87834' },
        { id: 2, name: 'Vova', number: '546756967' },
      ]).then(res => setUsers(res))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('contactUsers', JSON.stringify(users))
  }, [users])

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value)
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const addNewUser = {
      id: users.length + 1,
      name,
      number,
    };
    setUsers([...users, addNewUser])
    setName('');
    setNumber('');
  }

  const handleDeleteClick = (id: number | null) => {
    setUsers(users.filter(user => user.id !== id))
  }

  function handleEditClick(user: Users) {
    setIsEditing(true);
    setCurrentUser({ ...user });
  }

  const handleEditName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentUser({ ...currentUser, name: e.target.value })
  }

  const handleEditNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentUser({ ...currentUser, number: e.target.value })
  }

  function handleUpdateUser(id: number | null, updatedUser: Users) {
    const updatedItem = users.map(user => {
      return user.id === id ? updatedUser : user;
    });
    setIsEditing(false);
    setUsers(updatedItem);
    setCurrentUser({ id: null, name: '', number: '' })
  }

  function handleEditFormSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    handleUpdateUser(currentUser.id, currentUser);
  }

  return (
    <div className={style.wrapper}>
      {!isEditing ?
        <UserForm name={name} number={number} handleSubmit={handleSubmit} handleName={handleName} handleNumber={handleNumber} />
        :
        <EditUser name={currentUser.name} number={currentUser.number} handleEditName={handleEditName} handleEditNumber={handleEditNumber} handleEditFormSubmit={handleEditFormSubmit} />
      }
      {users.length > 0 &&
        <List users={users} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick} />}
    </div>
  );
}

export default App;
