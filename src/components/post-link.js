import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const PostLink = ({ post }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <article className="card ">
      <Link to={post.frontmatter.path}>
        {!!post.frontmatter.thumbnail && (
          <img
            src={post.frontmatter.thumbnail}
            alt={post.frontmatter.title + '- Featured Shot'}
          />
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
    </article>
  </motion.div>
);
export default PostLink;
