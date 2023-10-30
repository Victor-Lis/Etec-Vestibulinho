import React, {useState, useEffect, createContext} from 'react'

export const IndexContext = createContext({})
export default function IndexProvider({children}){

    return(

        <IndexContext.Provider value={{}}>

            {children}

        </IndexContext.Provider>

    )
}
