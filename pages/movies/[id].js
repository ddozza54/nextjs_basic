// moives/21412512

import { useRouter } from "next/router";

//url에 변수를 넣는 방법
export default function Detail() {
    const router = useRouter();
    console.log(router)
    /**
     * query: 
     * id: "1"
     * url 의 정보를 찾아볼 수 있다. 
     */
    return (
        <div>
            <h4>{router.query.title || "Loading..."}</h4>
        </div>
    );
}

