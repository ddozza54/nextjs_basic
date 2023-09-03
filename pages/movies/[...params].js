// moives/21412512

import Seo from "@/components/Seo";
import { useRouter } from "next/router";

//url에 변수를 넣는 방법
//[] 로 하면 쿼리 - string, 
//[...id] 로 하면 쿼리 - array 로 들어옴 : catch-all params
export default function Detail({ params }) {
    const router = useRouter();
    const [title, id] = params || [];
    console.log(router)
    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div >
    );
}
/**
 * 기존 방식이랑 다른 점 : 
 * 컴포넌트 내부에 들어있는 router 는 클라이언트 사이드에섬나 실행이 됨. 
 * 만약 url 에 들어있는 영화제목을 사용해서 구글 SEO 에 최적화하고, 
 * 유저가 접속하기 전에 탭 제목을 바꾸고 싶고, 
 * 기본적으로 이 페이지를 pre-render 하고 싶다면 
 * 이 때에는 server-side 에서 정보를 얻기 위한
 * getServerSideProps 를 실행하면 됨.
 */
export function getServerSideProps({ params: { params } }) {
    // console.log(ctx); 이 context 를 next 에서 지원해주는데, 
    //ctx 안에 params data 도 들어있다. 
    //지금은 api 로 fetch 해오는 게 아니라 조금 더 data 를 조금 더 빨리 가져오기 위함
    //이 함수가 반환해주는 값은 컴포넌트에 넣어줘야함! 위로 고고
    return {
        props: { params },
    }
}

