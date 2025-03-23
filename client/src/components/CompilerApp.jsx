import React, { useState } from "react";
import { motion } from "framer-motion";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";

const CompilerApp = () => {
  const [code, setCode] = useState("x = 5\ny = 10\nresult = x + y");  // Default example code
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCompile = async () => {
    if (!code.trim()) {
      alert("Please enter some code.");
      return;
    }
  
    setLoading(true);
    setError(null);
  
    try {
      console.log("Sending code to backend:", code);
      
      const response = await fetch("http://127.0.0.1:8000/compile/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
  
      console.log("Response status:", response.status);
      
      // Get the response text for debugging
      const responseText = await response.text();
      console.log("Response text:", responseText);
      
      // Try to parse as JSON
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
        throw new Error("Invalid response format from server");
      }
  
      console.log("Parsed data:", data);
      setOutput(data);
    } catch (err) {
      console.error("Compilation error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Compiler" className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-2">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-8 px-8">
            <h1 className="text-4xl font-extrabold text-white mb-2">Interactive Compiler</h1>
            <p className="text-indigo-100 max-w-2xl">
              Enter your code below to visualize each stage of the compilation process
            </p>
          </div>
          <div className="p-6">
            <InputSection code={code} setCode={setCode} onCompile={handleCompile} />
          </div>
        </div>
        
        {(loading || error || output) && <OutputSection output={output} loading={loading} error={error} />}
      </motion.div>
    </section>
  );
};

export default CompilerApp;