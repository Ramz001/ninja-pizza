import React from 'react';
import { motion } from 'framer-motion';
import { svgVarients, pathVarients } from '../../animations/animations.library';

const Header = () => {
  return (
    <header>
      <motion.div 
        className="logo"
        drag
        dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
        dragElastic={.75}
      >
        <motion.svg 
          className="pizza-svg" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100"
          variants={svgVarients}
          initial='hidden'
          animate="visible"
        >
          <motion.path
            variants={pathVarients}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVarients}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div 
        className="title"
        animate={{ y: 0, }}
        initial={{ y: '-100vh' }}
        transition={{ delay: .2, type: 'spring', stiffness: 55 }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;