export const messageVariants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    scale: 0.8,
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};