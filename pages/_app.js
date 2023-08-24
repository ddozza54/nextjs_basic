import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps }) {
    // 가장 먼저 렌더링 되는 파일
    return (
        <Layout>
            <h1>Hello</h1>
            {/* Layout.js 에서 보낸 children 이 바로 이 사이에 있는 component들이 됨. */}
            <Component {...pageProps} />
            {/* 글로벌 코드를 적용하는 법 : global 을 써준다.  */}
            <style jsx global>{`
            nav{
                background-color:teal;

            }`}</style>
        </Layout>
    )
}