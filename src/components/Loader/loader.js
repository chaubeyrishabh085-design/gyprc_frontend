
import React from 'react';
import img from '../../components/assets/images/logdo.png'

export const Loader2 = () => {
  return (
    
     <div className="fixed flex-col top-0 left-0 w-full h-full flex items-center justify-center bg-navbg1 bg-opacity-9 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-700">
      </div>
      <div className='px-3'>
      <img  src={img} alt="Loading..." className=" h-[150px] max-sm:h-[100px]" />

      </div>


    </div>

  );
}

