import React, { useState } from 'react';
import "./App.css"
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import UserList from './components/UserList/UserList';
import AddUser from './components/Users/AddUser';
import Home from './Pages/Home/Home';



function App() {
  const [userList, setUserList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const addUserHandler = (uName, uAge) => {
    setUserList(prevUserList => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString }];
    })
  }
  const loginHandler = () => {
    setIsLoggedIn(true);
  }
  const logoutHandler = () => {
    setIsLoggedIn(false);
  }
  console.log("isloggedin: ", isLoggedIn)
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
      <Home />
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Header onLogout={logoutHandler} />}
    </div>
  );
}

export default App;
