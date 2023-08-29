const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  // reidirects 는 url 이 변화하는게 clinet side 에서 보인다. -> user가 확인할 수 있음
  async redirects() {
    return [
      {
        source: '/old-blog/:path*',
        destination: 'new-blog/:path*',
        permanent: false,
      }
    ]
  },
  //rewrites 는 사용자 눈에 url 이 보이지 않는다
  //source url 로 바로 갈 경우, destination에서 받아온 data가 바로 뜨고, 
  //결론적으로 어디서 fetch 를 해왔는지 clinet side 에서 볼 수 없음.
  async rewrites() {
    return [{
      source: '/api/movies',
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    }]
  }

}

module.exports = nextConfig
