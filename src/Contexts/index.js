import React, {useState, useEffect, createContext} from 'react'
import { firebaseConfig } from '../Connections/firebaseConfig'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get, set, push, update } from 'firebase/database'

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const IndexContext = createContext({})

export default function IndexProvider({children}){

    const [videos, setVideos] = useState([])
    const [keys, setKeys] = useState([])

    useEffect(() => {

        getVideos()

    }, [])

    async function getVideos(){

        const videosRef = ref(database, `videos/`);
      
        await get(videosRef).then(async (snapshot) => {
            
            let data = await snapshot.val()
            
            if(data){
                let keys = Object.keys(data)
                keys = keys.filter(key => key != "Intercurso")
                keys.push("Intercurso")
                setKeys(keys)
                setVideos(data)
            }

        })

    }

    return(

        <IndexContext.Provider value={{keys, videos, }}>

            {children}

        </IndexContext.Provider>

    )
}
