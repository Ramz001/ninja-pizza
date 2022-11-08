export const containerVarients = {
    hidden: {
        x: '100vw',
        opacity: 0
    },
    visible:{
        x: 0,
        opacity: 1,
        transition: {
        delay: .35, type: 'spring'
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}

export const nextVarients = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
        type: 'spring', stiffness: 125
    }
}
}

export const childVarients = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
    }
}

export const buttonVarients = {
    hover: {
      scale: [1.1, 1.25], 
      textShadow: '0px 0px 5px #fff',
      boxShadow: '0px 0px 5px #fff',
      transition: {
        yoyo: Infinity,
        duration: .5
      }
    },
    tap: {
      scale: .95, 
    }
}

export const backdropVarients = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

export const modalVarients = {
    hidden: {
        opacity: 0,
        y: '-100vh'
    },
    visible: {
        opacity: 1,
        y: '40%',
        transition: {
            delay: .5
        }
    },
    exit: {
        opacity: 0,
        y: '100vh',
        transition: {
            delay: .25,
            ease: 'easeInOut'
        }
    }
}

export const svgVarients = {
    hidden: {
        rotate: -180
    },
    visible: {
        rotate: 0,
        transition: {
            duration: 1
        }
    }
}

export const pathVarients = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

export const loaderVarients = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: .5
            },
            y: {
                yoyo: Infinity,
                duration: .25,
                ease: 'easeOut'
            }
        }
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                yoyo: Infinity,
                duration: .25,
                ease: 'easeOut'
            }
        }
    }
}
