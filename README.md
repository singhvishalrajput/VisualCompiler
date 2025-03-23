# 🚀 Visual Compiler  

A **Visual Compiler** that takes high-level language input and provides a step-by-step breakdown of the compilation process with interactive visualizations. This project enhances understanding of compiler theory by displaying **Lexical Analysis, Syntax Parsing, Semantic Analysis, Intermediate Code, Optimization, and Assembly Code Generation**.  

## 🛠️ Features  
✔️ **Lexical Analysis** – Highlights tokens in the input code.  
✔️ **Syntax Analysis** – Generates and visualizes a parse tree.  
✔️ **Semantic Analysis** – Checks type consistency and variable usage.  
✔️ **Intermediate Code Generation** – Displays Three Address Code (TAC).  
✔️ **Code Optimization** – Shows optimized code for efficiency.  
✔️ **Assembly Code Generation** – Converts the code into low-level assembly.  
✔️ **Interactive UI** – Modern design with real-time output visualization.  

## 🚀 Tech Stack  
### **Frontend:**  
- React.js  
- TailwindCSS  
- Framer Motion (for animations)  
- Chart.js (for visual representations)  

### **Backend:**  
- FastAPI (Python)  
- PLY (Python Lex-Yacc for Lexical & Syntax Analysis)  
- AST (Abstract Syntax Tree for Semantic Analysis)  

## 📦 Installation & Setup  
### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```
  
### **2️⃣ Install Dependencies**  
#### 📌 **Frontend Setup**  
```bash
cd frontend
npm install
npm run dev
```

#### 📌 **Backend Setup**  
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## ⚡ Usage  
1️⃣ Enter high-level code in the input section.  
2️⃣ Click **Compile Code** to process the input.  
3️⃣ View the **step-by-step breakdown** of compilation in different sections.  

## 🎯 Future Enhancements  
✅ More visualization features.  
✅ Multi-language support.  
✅ Real-time error detection.  

## 📜 License  
This project is licensed under the **MIT License**.  

---  
**🌟 Contributions & Feedback Welcome!** 🚀  