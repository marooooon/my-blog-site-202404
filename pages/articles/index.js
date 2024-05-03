// pages/articles/index.js
import fs from "fs";
import path from "path";
import Link from "next/link";
import Layout from "../../components/organisms/Layout";
import matter from "gray-matter";
import Contents from "../../components/molecules/Contents";

const Articles = ({ articles }) => {
    return (
        <Layout>
            <div className="my-16">
                <Contents>
                    {articles.map((article, index) => (
                        <li key={index}>
                            <Link href={`/articles/${article.slug}`}>
                                <div className="flex items-center justify-center h-48 border-2 border-gray-800 rounded text-gray-800 font-bold hover:bg-gray-800 hover:text-white transition-all">
                                    <p className="">
                                        {article.frontmatter.title}
                                    </p>
                                </div>
                            </Link>
                            <div className="flex justify-end mt-1">
                                <p>{article.frontmatter.date}</p>
                            </div>
                        </li>
                    ))}
                </Contents>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const files = fs.readdirSync(path.join("content", "articles"));
    const articles = files.map((filename) => {
        const markdownWithMetadata = fs
            .readFileSync(path.join("content", "articles", filename))
            .toString();
        const { data: frontmatter } = matter(markdownWithMetadata);
        return {
            slug: filename.replace(".md", ""),
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
