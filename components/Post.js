import React from "react";
import Image from "next/image";
import styles from "/sass/Post.module.scss";
const Post = ({ post: { title, body, imgUrl, author }, index }) => {
    return (
        <div className={styles.post}>
            <h1 className={styles.heading}>{title}</h1>
            <Image className={styles.image} src={imgUrl} alt="post" />
            <p>{body}</p>
            <div className={styles.info}>
                <h4>Written by: {author}</h4>
            </div>
        
        </div>
    );
};
export default Post;