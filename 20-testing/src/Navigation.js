import React from 'react';

function Navigation({authenticated}) {
    return (
        <nav>
            <ul>
                { authenticated ? 
                    <li>Logged In, Welcome</li> :  <li>Login</li> }
            </ul>
        </nav>
    )
}

export default Navigation;