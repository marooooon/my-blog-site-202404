// components/Header.js
import { useRouter } from "next/router";
import Container from "../molecules/container";
import Link from "next/link";

const Header = () => {
    const router = useRouter();

    return (
        <header className="bg-gray-800 py-4">
            <Container>
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <p className="text-white text-xl font-bold">
                                Title
                            </p>
                        </Link>
                    </div>
                    <nav>
                        <ul className="flex gap-x-8 text-white">
                            <li>
                                <Link href="/">
                                    <p
                                        className={
                                            router.pathname === "/"
                                                ? "underline"
                                                : ""
                                        }
                                    >
                                        Home
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <p
                                        className={
                                            router.pathname === "/about"
                                                ? "underline"
                                                : ""
                                        }
                                    >
                                        About
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/articles">
                                    <div
                                        className={
                                            router.pathname.startsWith(
                                                "/articles"
                                            )
                                                ? "underline"
                                                : ""
                                        }
                                    >
                                        Articles
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;
