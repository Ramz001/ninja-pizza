import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buttonVarients } from '../../animations/animations.library';
import Loader from '../Loader/Loader';

const Home = () => {
  const homeVarients = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: .35, 
        duration: 1.25
      }
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.div 
      className="home container"
      variants={homeVarients}
      animate='visible'
      initial='hidden'
      exit='exit'
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          whileHover='hover'
          whileTap='tap'
          variants={buttonVarients}
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;