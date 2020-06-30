import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ProjectCard = () => {
  return (
    <motion.article
      className="card"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <header>
        <div className="grids">
          <h2 className="post-title">Testy Boi</h2>
        </div>
      </header>
    </motion.article>
  );
};
export default ProjectCard;
