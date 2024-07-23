import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function LoadingPage() {
    const nav = useNavigate();
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    function startLoading() {
        setTimeout(() => {
            setLoading(loading+25);
        }, 1000);
        if (loading === 100) {
            setTimeout(() => {
                nav('/dashboard');
            }, 500)
        }
    }
    startLoading()
  }, [loading]);
    return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='w-[100vw] h-[100vh] flex items-center justify-center bg-[black] text-white text-[24px]'>
        {loading}%
    </motion.div>
  )
}

export default LoadingPage