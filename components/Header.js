// components/Header.js
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-gray-800 p-4">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div>
          <Link href="/">
            <p className="text-white text-xl font-bold">
              daijiro-site-react-markdown
            </p>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4 text-white">
            <li>
              <Link href="/">
                <p className={router.pathname === '/' ? 'font-bold' : ''}>
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className={router.pathname === '/about' ? 'font-bold' : ''}>
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link href="/articles">
                <div
                  className={
                    router.pathname.startsWith('/articles') ? 'font-bold' : ''
                  }
                >
                  Articles
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
