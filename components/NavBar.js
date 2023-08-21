import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <Link href="/" style={{ color: router.pathname === "/" ? "red" : "blue" }}>
                Home
            </Link>
            <Link href="/" legacyBehavior>
                <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>
                    Home

                </a>
            </Link>

            <Link href="/about" style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
                About
            </Link>
            <style jsx global>{`
            nav{
background-color:teal;

            }`}</style>
        </nav>
    );
}

