# backend/src/main.py
from fastapi import FastAPI
from pydantic import BaseModel

# Define a simple Pydantic model for request body
class NumberInput(BaseModel):
    number: int

app = FastAPI(
    title="Numeric AI Bridge API",
    description="API for number analysis by AI",
    version="1.0.0"
)

@app.get("/")
async def root():
    return {"message": "Welcome to the Numeric AI Bridge API!"}

@app.post("/analyze-number")
async def analyze_number(data: NumberInput):
    """
    Endpoint to receive a number and pass it to the AI for analysis.
    For now, just echoes the number.
    """
    # In a real scenario, you'd call your AI module here:
    # from backend.src.ai.number_ai import perform_ai_analysis
    # result = perform_ai_analysis(data.number)
    result = {"received_number": data.number, "analysis": "Placeholder analysis from backend"}
    return result

# To run: uvicorn main:app --reload --port 8080
# The `main` refers to main.py, and `app` refers to the FastAPI instance.