import matter from "gray-matter";
import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

function getFilePostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

function getAllPosts() {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((file) => {
    return getFilePostData(file);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.dat > postB.date ? -1 : 1
  );
  return sortedPosts;
}

function getFeaturedPosts() {
  const featuredPosts = getAllPosts().filter((post) => post.isFeatured);
  return featuredPosts;
}

export { getPostsFiles, getAllPosts, getFilePostData, getFeaturedPosts };
