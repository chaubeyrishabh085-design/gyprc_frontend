import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ title, value, urgency, bgColor, textColor, height, path }) => {
  const cardStyle = {
    backgroundColor: bgColor || 'bg-orange-100',
    color: textColor || 'text-gray-900',
    height: height || 'auto',
  };

  const urgencyStyle = {
    backgroundColor: bgColor || 'bg-red-600', // Change this to the desired background color
  };

  return (
    <div className={`card px-2 rounded ${cardStyle.backgroundColor} w-[95%] sm:h-[300px]  xl:min-w-60 py-5 px-5 text-center md:text-center xl:text-center ${cardStyle.color}`} style={{ height: cardStyle.height }}>
      <div>
        <h2 className="text-xl font-medium mb-2">{title}</h2>
        <h1 className="text-2xl font-bold mb-2">{value}</h1>
        <p className=' className={`font-semibold py-2 px-12  bg-green-50 hover:bg-orange-300 rounded pointer px-2 ${urgencyStyle.backgroundColor}`}'>
        {path ? (
            <Link to={path}>{urgency}</Link>
          ) : (
            urgency
          )}
        </p>
          
        
      </div>
    </div>
  );
};
