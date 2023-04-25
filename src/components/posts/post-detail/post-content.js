import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import styles from "./post-content.module.css";

const postsObj = {
  title: "Getting Started - NextJs",
  image: "getting-started-nextjs.png",
  date: "04/16/2023",
  slug: "getting-started-with-nextjs",
  content: "# This is the Title content for the Posts",
};

function PostContent({ props }) {
  console.log(props);
  const { slug, title, content, image } = props;
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
