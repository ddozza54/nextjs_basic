import { useEffect, useState } from 'react';
import Seo from '@/components/Seo';
//head 컴포넌트 안에 들어가는 모든게 html head 안에 들어감

export default function Home({ results }) {
    return (
        <div className='container'>
            <Seo title="Home" />
            {/* !movie 라고 하면 빈 배열이 falsy 값이 아니기 때문에 length 가 0 인 경우로 해줘야한다. */}
            {results?.map(movie =>
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


//이 함수 이름은 고정!
//backend 에서만 동작하는 함수이기 때문에 client 에서 관여 X
// return 한 props 는 알아서 페이지로 넘겨진다. Nextjs 가 해주는 거임. 
// _app.js 의    <Component {...pageProps} /> 에서 이 pageProps 로 들어가는거임. 
export async function getServerSideProps() {
    const { results } = await
        (await fetch(`http://localhost:3000/api/movies`)
        ).json();
    return {
        props: {
            results,
        },
    };
}