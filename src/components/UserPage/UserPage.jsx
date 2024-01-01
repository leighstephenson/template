import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {

  const user = useSelector((store) => store.user);

  return (

    <center>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>

      <p>Add content here</p>
      
      <LogOutButton className="btn" />
    </div>
    </center>

  );
}

export default UserPage;
