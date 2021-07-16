import axios from "./axios";
import { useEffect, useState } from "react";
import { EYE_CATCH_BASE_URL } from "./request";

type Props = {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
};
type Movie = {
    id: string;
    name: string;
    title: string;
    original_name: string;
    poster_path: string;
    backdrop_path: string;
}

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    return (
        < div >
            <h2>{title}</h2>
            {
                movies.map((movie) => {
                    return (
                        < img key={movie.id}
                            className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
                            src={EYE_CATCH_BASE_URL + movie.backdrop_path}
                        ></img>

                    )
                })
            }
        </div >
    )
}