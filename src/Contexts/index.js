import React, {useState, useEffect, createContext} from 'react'

export const IndexContext = createContext({})
export default function IndexProvider({children}){

    const [page, setPage] = useState('/')

    return(

        <IndexContext.Provider value={{ page, setPage }}>

            {children}

        </IndexContext.Provider>

    )
}
