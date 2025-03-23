from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict
from fastapi.middleware.cors import CORSMiddleware
import traceback

app = FastAPI()

# Add CORS middleware to allow frontend to communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CodeInput(BaseModel):
    code: str  # Code from frontend


def lexical_analysis(code):
    """Extract tokens from the input code."""
    # Simple token extraction - split by whitespace and punctuation
    import re
    tokens = re.findall(r'[a-zA-Z_][a-zA-Z0-9_]*|[0-9]+|\S', code)
    return ", ".join(tokens)


def syntax_analysis(code):
    """Generate a simple parse tree representation."""
    tree_structure = "Program\n"
    
    lines = code.strip().split('\n')
    for i, line in enumerate(lines):
        if line.strip():
            tree_structure += f"└── Statement{i+1}\n"
            if "=" in line:
                tree_structure += f"    └── Assignment\n"
                var_name = line.split('=')[0].strip()
                expression = line.split('=')[1].strip()
                tree_structure += f"        ├── Variable: {var_name}\n"
                tree_structure += f"        └── Expression: {expression}\n"
            else:
                tree_structure += f"    └── Expression: {line.strip()}\n"
    
    return tree_structure


def semantic_analysis(code):
    """Mock type checking (Replace with real type checks)."""
    analysis = "No type errors detected.\n\n"
    
    # Simple variable tracking
    variables = {}
    lines = code.strip().split('\n')
    
    for line in lines:
        if "=" in line:
            var_name = line.split('=')[0].strip()
            variables[var_name] = "variable"
            analysis += f"Variable '{var_name}' declared.\n"
    
    return analysis


def intermediate_code_generation(code):
    """Convert high-level code to Three Address Code (TAC)."""
    result = ""
    lines = code.strip().split('\n')
    temp_var = 1
    
    for line in lines:
        if "=" in line:
            var_name = line.split('=')[0].strip()
            expression = line.split('=')[1].strip()
            
            # Simple expression handling
            if "+" in expression:
                operands = expression.split('+')
                result += f"T{temp_var} = {operands[0].strip()}\n"
                result += f"T{temp_var} = T{temp_var} + {operands[1].strip()}\n"
                result += f"{var_name} = T{temp_var}\n"
                temp_var += 1
            elif "*" in expression:
                operands = expression.split('*')
                result += f"T{temp_var} = {operands[0].strip()}\n"
                result += f"T{temp_var} = T{temp_var} * {operands[1].strip()}\n"
                result += f"{var_name} = T{temp_var}\n"
                temp_var += 1
            else:
                result += f"{var_name} = {expression}\n"
    
    return result or "No intermediate code generated."


def code_optimization(code):
    """Optimize Three Address Code."""
    # Simple constant folding
    result = "Optimized code:\n"
    lines = code.strip().split('\n')
    
    for line in lines:
        if "=" in line:
            var_name = line.split('=')[0].strip()
            expression = line.split('=')[1].strip()
            
            # Check if we can optimize simple numeric operations
            if "+" in expression or "*" in expression or "-" in expression or "/" in expression:
                # For demo purposes, just note that we'd optimize this
                result += f"{line} /* Could be optimized */\n"
            else:
                result += f"{line}\n"
    
    return result


def assembly_code_generation(code):
    """Convert to simple assembly-like code."""
    result = ""
    lines = code.strip().split('\n')
    
    for line in lines:
        if "=" in line:
            var_name = line.split('=')[0].strip()
            expression = line.split('=')[1].strip()
            
            # Simple expression handling
            if "+" in expression:
                operands = expression.split('+')
                result += f"MOV R1, {operands[0].strip()}\n"
                result += f"ADD R1, {operands[1].strip()}\n"
                result += f"MOV {var_name}, R1\n"
            elif "*" in expression:
                operands = expression.split('*')
                result += f"MOV R1, {operands[0].strip()}\n"
                result += f"MUL R1, {operands[1].strip()}\n"
                result += f"MOV {var_name}, R1\n"
            else:
                result += f"MOV {var_name}, {expression}\n"
    
    return result or "No assembly code generated."


@app.post("/compile/")
async def compile_code(data: CodeInput) -> Dict:
    if not data.code.strip():
        raise HTTPException(status_code=400, detail="Code input cannot be empty.")

    try:
        print(f"Received code: {data.code}")
        
        lexical = lexical_analysis(data.code)
        syntax = syntax_analysis(data.code)
        semantic = semantic_analysis(data.code)
        intermediate = intermediate_code_generation(data.code)
        optimized = code_optimization(data.code)
        assembly = assembly_code_generation(data.code)

        # Match the response structure to what the frontend expects
        return {
            "lexical": lexical,
            "syntax": syntax,
            "semantic": semantic,
            "intermediate": intermediate,
            "optimized": optimized,
            "assembly": assembly
        }
    except Exception as e:
        print(f"Error during compilation: {str(e)}")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))