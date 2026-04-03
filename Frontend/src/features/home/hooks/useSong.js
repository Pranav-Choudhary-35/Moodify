import { getSong } from "../service/song.api";
import { useContext } from "react";
import { SongContext } from "../song.context";

export const useSong = () => {
    const {song, setSong, loading, setLoading} = useContext(SongContext);


    async function handleGetSong({mood}){

        setLoading(true);
        const data = await getSong({mood});
        setSong(data.song);
        setLoading(false);

    }

return {song, setSong, loading, setLoading, handleGetSong}


}