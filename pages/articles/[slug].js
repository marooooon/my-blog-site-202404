// pages/articles/[slug].js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/organisms/Layout";

const Article = ({ frontmatter, content }) => {
    return (
        <Layout>
            <article className="slug">
                <h1 className="text-3xl font-bold text-center">
                    {frontmatter.title}
                </h1>
                <p className="text-gray-500 text-center">{frontmatter.date}</p>
                <div className="prose bg-blue-50 rounded mt-12">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </article>
        </Layout>
    );
};

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("content", "articles"));
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMetadata = fs
        .readFileSync(path.join("content", "articles", `${slug}.md`))
        .toString();
    const { data: frontmatter, content } = matter(markdownWithMetadata);

    return {
        props: {
            frontmatter,
            content,
        },
    };
}

export default Article;
