---
title: "Next.jsでブログを作る方法"
date: "2024-03-25"
author: "Daijiro Takeuchi"
tags: ["Next.js", "ブログ", "チュートリアル"]
---

# Next.jsでブログを作る方法

## プロジェクトの構成

```markdown
- pages
  - index.js
  - articles
    - [slug].js
  - about.js
- components
  - Header.js
  - Layout.js
- styles
  - tailwind.css
- content
  - articles
    - article1.md
    - article2.md
    - ...
```

## 概要
このプロジェクトは、React（Next.js）を使用してマークダウン形式の.mdファイルを読み込み、ブログサイトを構築するものです。以下に実装方法を示します。

### SPAサイトとしての設定
```javascript
// _app.js

import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

### App Routerの使用
```javascript
// Header.js

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <a className="text-xl font-bold">My Blog</a>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a className="hover:text-gray-400">TOP</a>
              </Link>
            </li>
            <li>
              <Link href="/articles">
                <a className="hover:text-gray-400">記事一覧</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-gray-400">About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
```

### CSSの設定
```css
/* tailwind.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### mdファイルの読み込みと表示
```javascript
// ArticleDetail.js

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const ArticleDetail = ({ slug }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      const mdFile = await import(`../content/articles/${slug}.md`);
      const response = await fetch(mdFile.default);
      const text = await response.text();
      setContent(text);
    };

    fetchContent();
  }, [slug]);

  return (
    <div className="container mx-auto">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default ArticleDetail;
```

## ページ構成
- TOPページ: pages/index.js
- 記事一覧ページ: pages/articles/index.js
- 記事詳細ページ: pages/articles/[slug].js
- Aboutページ: pages/about.js

### ハンバーガーメニューの実装
```javascript
// Header.js

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <a className="text-xl font-bold">My Blog</a>
          </Link>
        </div>
        <nav>
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 21a9 9 0 100-18 9 9 0 000 18zM5 9a7 7 0 1114 0 7 7 0 01-14 0zm7-5a5 5 0 100 10 5 5 0 000-10z"
              ></path>
            </svg>
          </button>
          <ul
            className={`${
              menuOpen ? 'block' : 'hidden'
            } lg:flex lg:space-x-4`}
          >
            <li>
              <Link href="/">
                <a className="hover:text-gray-400">TOP</a>
              </Link>
            </li>
            <li>
              <Link href="/articles">
                <a className="hover:text-gray-400">記事一覧</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-gray-400">About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
```
以上が、このプロジェクトの実装方法に関するコードと説明です。