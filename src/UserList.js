// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setListOfUser(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>List of Users</h1>
      {listOfUser.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.username}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserList;
