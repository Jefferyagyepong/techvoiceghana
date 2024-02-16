import React from "react";
import Post from "./Post";
import styles from "/sass/Post.module.scss";
const Posts = () => {
  const blogPosts = [
    {
      title: "Learn Web Developement",
      body: "iksum dolot ain font daliat sobrino.iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino.",
      author: "Jeffery Agyepong",
      imgUrl: "",
    },
    {
      title: "Learn Html",
      body: "iksum dolot ain font daliat sobrino.iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino.  iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino.  iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino.  iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino.  iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino.  iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino.  iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino.  iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino.",
      author: "Jeffery Agyepong",
      imgUrl: "",
    },
    {
      title: "Learn css",
      body: "iksum dolot ain font daliat sobrino.iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino.",
      author: "Jeffery Agyepong",
      imgUrl: "",
    },
    {
      title: "Learn JavaScript",
      body: "iksum dolot ain font daliat sobrino.iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino. iksum dolot ain font daliat sobrino.",
      author: "Jeffery Agyepong",
      imgUrl: "",
    },
  ];
  return (
    <div className={styles.post}>
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};
export default Posts;
