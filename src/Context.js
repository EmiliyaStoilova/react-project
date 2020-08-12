import React from 'react'

const UserContext = React.createContext({
    isLoggedIn: false,
    logIn: () => {},
    logOut: () => {},
})

export default UserContext