import React from 'react'

function Header(props) {
    return (
        <div>
            <button onClick={props.onLogout}>Logout</button>
        </div>
    )
}

export default Header
