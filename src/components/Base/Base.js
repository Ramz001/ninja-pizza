import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { containerVarients, nextVarients, buttonVarients } from '../../animations/animations.library';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div 
      className="base container"
      variants={containerVarients}
      animate='visible'
      initial='hidden'
      exit='exit'
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{ scale: 1.25,originX: 0, color: '#f8e112' }}
              whileTap={{ scale: .95, }}
              transition={{
                type: 'spring',
                stiffness: 150
              }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div 
          className="next"
          variants={nextVarients}
        >
          <Link to="/toppings">
            <motion.button
             variants={buttonVarients}
             whileHover='hover'
             whileTap='tap'
            >Next</motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Base;