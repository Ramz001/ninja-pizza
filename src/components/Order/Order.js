import { motion, AnimatePresence } from 'framer-motion';
import { childVarients } from '../../animations/animations.library';
import { useState, useEffect } from 'react';

const Order = ({ pizza, setShowModal }) => {
  const containerVarients = {
    hidden: {
        x: '100vw',
        opacity: 0
    },
    visible:{
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          when: 'beforeChildren',
          mass: .55,
          damping: 7.5,
          staggerChildren: .75
        }
    },
  }

  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000)
  },[])

  return (
    <motion.div className="container order"
      variants={containerVarients}
      initial='hidden'
      animate='visible'
      
    >
      <h2>Thank you for your order :)</h2>
      <motion.p
        variants={childVarients}
      >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={childVarients}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;