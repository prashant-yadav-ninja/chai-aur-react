import { useState } from "react";
import userContext from "./Usercontext";

// eslint-disable-next-line react/prop-types
const UsercontextProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    return (
        <userContext.Provider value={{user,setUser}} >{children}</userContext.Provider>

    )
};

export default UsercontextProvider;
