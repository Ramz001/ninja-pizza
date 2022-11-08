import { motion, useCycle } from "framer-motion";
import { loaderVarients } from "../../animations/animations.library";

const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne","animationTwo")
    return <motion.div 
                variants={loaderVarients} 
                animate={animation} 
                className='loader' 
            />
}

export default Loader
