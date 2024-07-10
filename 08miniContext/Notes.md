# Step 1

## New folder in src namely context and then make a new file

```js
import React from "react";

const UserContext = React.createContext()

export default UserContext
```

## Another file (JSX) for a context provider that passes data as a prop
```js
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user,setUser] = useState(null)
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
 ```