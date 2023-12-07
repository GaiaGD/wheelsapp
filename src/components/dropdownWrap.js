import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DropdownWrap = ({ children, props }) => {

  const myInputRef = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Focus on the input element when the component mounts
    if (myInputRef.current) {
      myInputRef.current.focus();
    }
  }, [])

  // used to hide dropdown if clicked outside
  useEffect(() => {
    if (props.length >= 1){
      setShow(true)
    } else {
      setShow(false)
    }
  }, [props])

  useEffect(() => {
      const handleClickOutside = (event) => {
        // Check if the clicked element is outside the div
        if (myInputRef.current && !myInputRef.current.contains(event.target)) {
          // hide dropdown
          setShow(false)
        }
      };
  
      // Attach the click event listener to the document
      document.addEventListener('mousedown', handleClickOutside);
  
      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
  }, [myInputRef])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="dropdown"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
        >
          <div
            ref={myInputRef}
            style={{ width: 'calc(100% - 3rem)' }}
            className="max-h-96 overflow-auto rounded-[20px] fixed bg-white backdrop-blur-md bg-white-100 shadow-2xl"
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )

}

export default DropdownWrap
