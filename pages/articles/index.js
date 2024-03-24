// pages/articles/index.js
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Layout from '../../components/Layout';
import matter from 'gray-matter';

const Articles = ({ articles }) => {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold mb-4">Articles</h1>
        <ul className="space-y-4">
          {articles.map((article, index) => (
            <li key={index}>
              <Link href={`/articles/${article.slug}`}>
                <p className="text-blue-500">{article.frontmatter.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('content', 'articles'));
  const articles = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join('content', 'articles', filename))
      .toString();
    const { data: frontmatter } = matter(markdownWithMetadata);
    return {
      slug: filename.replace('.md', ''),
      frontmatter,
    };
  });

  return {
    props: {
      articles,
    },
  };
}

export default Articles;
