import React, { useState } from 'react'
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from "./AddUser.module.css"

function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        setEnteredUsername("");
        setEnteredAge("");
    }
    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);

    }
    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);

    }
    return (
        <Card className={classes.input}>
            <form className="AddUser" onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" value={enteredUsername} id="username" onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (years)</label>
                <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser
