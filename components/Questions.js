import React, { useState } from 'react';

const Questions = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div onClick={() => setIsActive(!isActive)}>
        <div className="translate-x-36 overflow-x-autot cursor-pointer text-gray-200 cursor-pointer hover:scale-105
                        transition duration-500 hover:text-transparent
                        hover:bg-clip-text 
                        bg-gradient-to-r hover:from-emerald-300 
                        hover:to-blue-300">
              {title} {isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="text-gray-400 text-justify transformation-none">{content}</div>}
    </div>
  );
};

export default Questions;