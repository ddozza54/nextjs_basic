// moives/21412512

import { useRouter } from "next/router";

//url에 변수를 넣는 방법
//[] 로 하면 쿼리 - string, 
//[...id] 로 하면 쿼리 - array 로 들어옴 : catch-all params
export default function Detail() {
    const router = useRouter();
    const [title, id] = router.query.params || [];
    console.log(router)
    return (
        <div>
            <h4>{title}</h4>
        </div>
    );
}

