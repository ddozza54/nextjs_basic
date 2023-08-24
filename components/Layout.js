import NavBar from "./NavBar";

//props 로 받은 children은 react 에서 제공해주는 기능임. 
//이 파일 만든 후 _app.js 파일로 이동 => 가장 상위 폴더로 만들어줌
export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <div>
                {children}
            </div>
        </>
    );
}

