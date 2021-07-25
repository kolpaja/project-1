import React from 'react';
import './UserList.css';


function UserList(props) {
    return (

        <ul className="user-list">
            {props.users.map(user =>
                <li key={user.id}>
                    {user.name} {user.age} years old.
                </li>
            )}
        </ul>

    )
}

export default UserList
