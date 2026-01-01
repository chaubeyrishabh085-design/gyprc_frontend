import React from "react";

export const Thanks = () =>{
    return(
        <>
    <div className="py-10 bg-orange-50" >
        <div className="flex justify-center ">
    <div class="container d-flex justify-content-center align-items-center   mt-[100px]  ">
     <div class="">
        <header class="text-center py-4">
            <h1 class="mb-0 text-2xl text-green-500 text-success">Form submitted successfully!            </h1>
        </header>
        <div class=" p-8 rounded-lg  text-center">
    <svg class="mx-auto mb-4 w-24 h-24 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
    </svg>
    <h2 class="text-2xl font-bold mb-2">Thank You!</h2>
    <p class="text-gray-600 mb-4">Your submission has been received. We will get back to you soon.</p>
    <a href="/" class="inline-block px-6 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-400">Go to Homepage</a>
  </div>

    
     </div>
    </div>
    </div>
    </div>

        </>
    )

}