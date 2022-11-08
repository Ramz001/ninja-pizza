import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { backdropVarients, modalVarients } from "../../animations/animations.library";

const Modal = ({ showModal }) => {
    return (
        <AnimatePresence>
            {
            showModal &&
            <motion.div 
                className="backdrop"
                variants={backdropVarients}
                initial='hidden'
                animate="visible"
                exit="exit"
            >
                <motion.div 
                    className="modal" 
                    variants={modalVarients}
                >
                    <p>Want to make another pizza?</p>
                    <Link to=''>
                        <button>Start Again</button>
                    </Link>
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>
    )
}

export default Modal