import React from "react";
import { motion } from "framer-motion";

const InputSection = ({ code, setCode, onCompile }) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center w-full py-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-indigo-700 mb-3">Enter Your Code</h2>
      <div className="w-full max-w-4xl relative">
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-t-lg flex items-center px-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-white text-sm font-medium">code</span>
        </div>
        <textarea
          className="w-full h-64 p-4 pt-14 border-0 rounded-lg bg-gray-900 text-gray-100 font-mono text-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="// Write your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck="false"
        />
      </div>
      
      <motion.button
        className="mt-6 px-10 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl font-semibold text-lg flex items-center space-x-2 transition-all duration-300"
        onClick={onCompile}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
        <span>Compile Code</span>
      </motion.button>
      
      <p className="mt-4 text-gray-500 text-sm italic">Press the button above to see the compilation process</p>
    </motion.div>
  );
};

export default InputSection;