import React, { useState } from 'react';

const Questions = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div onClick={() => setIsActive(!isActive)}>
        <div className="ml-52 cursor-pointer font-semibold text-gray-200 cursor-pointer hover:scale-x-105
                        transition duration-500 hover:text-transparent
                        hover:bg-clip-text 
                        bg-gradient-to-r hover:from-emerald-300 
                        hover:to-blue-300">
              {title} {isActive ? '(Click to show less)' : ''}</div>
      </div>
      {isActive && <div className="ml-52 mr-52 text-gray-400 text-justify">{content}</div>}
    </div>
  );
};

export default Questions;