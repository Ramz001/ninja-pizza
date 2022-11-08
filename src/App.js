import { useState } from 'react';

import { Route, Routes, useLocation } from "react-router-dom";

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Base from './components/Base/Base';
import Toppings from './components/Topping/Topping';
import Order from './components/Order/Order';
import Modal from './components/Modal/Modal';

import { AnimatePresence } from 'framer-motion'

function App() {
  let location = useLocation()
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false)

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const handleModal = () => setShowModal(false)

  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
      <Header />
      <Modal showModal={showModal} />
      <AnimatePresence exitBeforeEnter onExitComplete={handleModal}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={ <Home />} />
          <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
          <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} />
          <Route path="/order" element={<Order pizza={pizza} setShowModal={setShowModal} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
