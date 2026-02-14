from fastapi import FastAPI
import requests
import pandas as pd

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}
