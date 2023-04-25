import PostContent from "@/components/posts/post-detail/post-content";
import { getFilePostData, getPostsFiles } from "./../../lib/posts-util";
import React from "react";

function PostDetailPage(props) {
  return <PostContent props={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getFilePostData(slug);

  return {
    props: {
      post: postData,
    },
    // revalidate: 10,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
