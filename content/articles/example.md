---
title: "Next.js でブログを作る方法"
date: "2024-03-25"
author: "John Doe"
tags: ["Next.js", "ブログ", "チュートリアル"]
---

# はじめに

この記事では、Next.js を使用してブログを作成する方法を紹介します。Next.js は React フレームワークの一つであり、ブログのような静的なコンテンツサイトから、動的なウェブアプリケーションまで幅広い用途に利用されています。

# 環境のセットアップ

まずは、Next.js の環境をセットアップします。次のコマンドを使用して、新しい Next.js プロジェクトを作成します。

```bash
npx create-next-app my-blog
cd my-blog
```

## UL 系

-   ul
    -   li
    -   li
-   ul
    -   li
    -   li

## OL 系

1. 11111111
2. 22222222
3. 33333333

## コード系

一部だけ`code sample`にします。

## コード系

すべてコードにします。

```hoge.html
<Layout>
    <article className="slug">
        <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
        <p className="text-gray-500">{frontmatter.date}</p>
        <div className="prose">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    </article>
</Layout>
```

## 引用系

> 引用しています。
