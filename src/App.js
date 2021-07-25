import React, { useState } from 'react';
import "./App.css"
import UserList from './components/UserList/UserList';
import AddUser from './components/Users/AddUser';



function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList(prevUserList => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString }];
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
