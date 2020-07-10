import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const PostLink = ({ post }) => (
  <motion.article
    className="card"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.9 }}
    initial="hidden"
    animate="visible"
    variants={variants}
  >
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title} />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="post-meta">{post.frontmatter.date}</div>
    </header>
  </motion.article>
);
export default PostLink;
