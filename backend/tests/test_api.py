# backend/tests/test_api.py
from fastapi.testclient import TestClient
from src.main import app # Adjust import path if needed

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to the Numeric AI Bridge API!"}

def test_analyze_number():
    response = client.post("/analyze-number", json={"number": 42})
    assert response.status_code == 200
    assert response.json()["received_number"] == 42
    assert "analysis" in response.json()