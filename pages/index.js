import Seo from '@/components/Seo';
import Head from 'next/head';
//head 컴포넌트 안에 들어가는 모든게 html head 안에 들어감

export default function Home() {
    return (
        <div>
            <Seo title="Home" />
            <h1>Home</h1>
        </div>

    )

}