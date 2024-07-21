import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
    <div className='w-[100vw] h-[100vh] flex items-center justify-center bg-[black] text-white text-[24px]'>
        {loading}%
    </div>
  )
}

export default LoadingPage