import React from "react";
import { motion } from "framer-motion";

const OutputSection = ({ output, loading, error }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Function to determine if a section has content
  const hasContent = (section) => {
    return section && section !== "No data available.";
  };

  return (
    <motion.div 
      className="w-full bg-white p-8 rounded-lg shadow-xl mt-8 border border-gray-200"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Compilation Results</h2>

      {loading && (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-indigo-600 font-medium">Processing your code...</p>
        </div>
      )}

      {error && (
        <motion.div 
          className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 flex items-start"
          variants={itemVariants}
        >
          <div className="bg-red-100 p-2 rounded-full mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-700">Compilation Error</h3>
            <p className="text-red-600 mt-1">{error}</p>
          </div>
        </motion.div>
      )}

      {!loading && !error && output && (
        <div className="space-y-6">
          {/* Lexical Analysis */}
          {hasContent(output.lexical) && (
            <motion.div 
              className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <div className="flex items-center mb-3">
                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-indigo-700">Lexical Analysis</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border border-indigo-100 overflow-x-auto">
                <pre className="text-gray-800 font-mono text-sm">{output.lexical}</pre>
              </div>
            </motion.div>
          )}

          {/* Syntax Analysis */}
          {hasContent(output.syntax) && (
            <motion.div 
              className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-700">Syntax Analysis</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-100 overflow-x-auto">
                <pre className="text-gray-800 font-mono text-sm">{output.syntax}</pre>
              </div>
            </motion.div>
          )}

          {/* Semantic Analysis */}
          {hasContent(output.semantic) && (
            <motion.div 
              className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <div className="flex items-center mb-3">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-700">Semantic Analysis</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-100 overflow-x-auto">
                <pre className="text-gray-800 font-mono text-sm">{output.semantic}</pre>
              </div>
            </motion.div>
          )}

          {/* Intermediate Code Generation */}
          {hasContent(output.intermediate) && (
            <motion.div 
              className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <div className="flex items-center mb-3">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-yellow-700">Intermediate Code</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border border-yellow-100 overflow-x-auto">
                <pre className="text-gray-800 font-mono text-sm">{output.intermediate}</pre>
              </div>
            </motion.div>
          )}

          {/* Code Optimization */}
          {hasContent(output.optimized) && (
            <motion.div 
              className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <div className="flex items-center mb-3">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-700">Code Optimization</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border border-red-100 overflow-x-auto">
                <pre className="text-gray-800 font-mono text-sm">{output.optimized}</pre>
              </div>
            </motion.div>
          )}

          {/* Assembly Code Generation */}
          {hasContent(output.assembly) && (
            <motion.div 
              className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <div className="flex items-center mb-3">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-700">Assembly Code</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-100 overflow-x-auto">
                <pre className="text-gray-800 font-mono text-sm">{output.assembly}</pre>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default OutputSection;