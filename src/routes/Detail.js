import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import DetailMovie from "../components/DetailMovie";
function Detail(){
    const[loading, setLoading] = useState(true)
    const[movie, setMovie] = useState([])

    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setMovie(()=>json.data.movie)
        setLoading(false)
    }
    useEffect(()=>{
        getMovie()
    },[])
    return (
        <div>
            {loading ? <h1>Loading</h1> :
                <div>
                    {
                        <DetailMovie
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            genres={movie.genres}
                            runtime={movie.runtime}
                        />
                    }
                </div>
            }
        </div>
    );
}
export default Detail