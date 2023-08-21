export default function MyApp({ Component, pageProps }) {
    // 가장 먼저 렌더링 되는 파일
    return (
        <>
            <h1>Hello</h1>
            <Component {...pageProps} />
            {/* 글로벌 코드를 적용하는 법 : global 을 써준다.  */}
            <style jsx global>{`
            nav{
                background-color:teal;

            }`}</style>
        </>
    )
}