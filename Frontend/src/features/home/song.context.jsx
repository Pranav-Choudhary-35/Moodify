import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext();

export const SongProvider = ({ children }) => {

const [song, setSong] = useState({


        "url": "https://ik.imagekit.io/8629896256/moodify-folder/moodify/songs/Zamaan_VsTvQz695.mp3",
        "posterUrl": "https://ik.imagekit.io/8629896256/moodify-folder/moodify/posters/Zamaan_sdV2x99-l.jpeg",
        "title": "Zamaan",
        "mood": "happy",
      
    })

    const [loading, setLoading] = useState(false)


    return(
      <SongContext.Provider value={{song, setSong, loading, setLoading}}>
        {children}
      </SongContext.Provider>
    )


};