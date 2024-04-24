import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-2">
      <button 
        onClick={toggle} 
        className="flex justify-between items-center w-full text-left text-2xl font-semibold text-gray-800 py-2"
      >
        {title}
        {isOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
      </button>
      {isOpen && <div className="text-gray-600 p-2">{children}</div>}
    </div>
  );
};

export default Collapsible;