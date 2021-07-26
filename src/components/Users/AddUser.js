import React, { useState } from 'react'
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from "./AddUser.module.css";
import ErrorModal from '../UI/ErrorModal/ErrorModal'

function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age(non-empty values)"
            })
            return;
        }//by putting a + sign before "+enteredAge" we make sure its a number
        if (+enteredAge < 12) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age( > 0)"
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    }
    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);

    }
    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form className="AddUser" onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={enteredUsername} id="username" onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (years)</label>
                    <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser
