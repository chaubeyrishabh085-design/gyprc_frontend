import React, { useEffect, useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { UserRoute } from './Routing/UserRoute';
import { AdminRoute } from './Routing/AdminRout';
import store from './Redux/store';
import { Provider } from 'react-redux';
import { SideButton } from './pages/Home/Home';
import { Loader2 } from './components/Loader/loader';
import { ConsultancyRoute } from './Routing/ConsultancyRoute';

export const App=()=>{

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate content loading with a delay
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      // Clean up timeout on unmount
      return () => clearTimeout(timeout);
    }, []);
    return(
        <>

<div className="relative">
      {/* Loader */}
      {isLoading && <Loader2 />}

      {/* Page content */}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        {/* Your static website content goes here */}
        <div  className='bg-white'>
        <Provider store={store}>
            <BrowserRouter>
          
          <SideButton/>
          
                <ConsultancyRoute/>
                <UserRoute/>
                <AdminRoute/>
            </BrowserRouter>

        </Provider>

 </div>
      </div>
    </div>
   
        </>
    );
};


