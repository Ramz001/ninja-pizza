import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { containerVarients, buttonVarients } from '../../animations/animations.library';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={containerVarients}
      initial='hidden'
      exit='exit'
      animate='visible'
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.25,originX: 0, color: '#f8e112' }}
              whileTap={{ scale: .95, }}
              transition={{
                type: 'spring',
                stiffness: 150
              }}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
         variants={buttonVarients}
         whileHover='hover'
         whileTap='tap'
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;