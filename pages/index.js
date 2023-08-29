import { useEffect, useState } from 'react';
import Seo from '@/components/Seo';
//head 컴포넌트 안에 들어가는 모든게 html head 안에 들어감

export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRlYTdkYTU2NmUzM2JhZGQ2ZTdlYWNkNGM3MjFiNCIsInN1YiI6IjY0Njg4YWRiYTUwNDZlMDEyNDY3YTQwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SHS2ccg3VvUJc0UbSNtnCxs2XEocQW0MRBRml5hNvtE'
            }
        };
        (async () => {
            const { results } = await (await fetch(`/api/movies`, options)).json()
            setMovies(results)
        })();

    })
    return (
        <div className='container'>
            <Seo title="Home" />
            {/* !movie 라고 하면 빈 배열이 falsy 값이 아니기 때문에 length 가 0 인 경우로 해줘야한다. */}
            {movies.length === 0 && <h4>Loading...</h4>}
            {movies?.map(movie =>
                <div key={movie.id} className="movie">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <h4>{movie.original_title}</h4>
                </div>)}
            <style jsx>{`
             .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
 .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
`}</style>
        </div>
    )

}