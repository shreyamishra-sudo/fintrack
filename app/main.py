from fastapi import FastAPI
from app.db.base import Base
from app.db.session import engine
from app.api.routes import auth

Base.metadata.create_all(bind=engine)

app = FastAPI(title="FinTrack API")

app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "FinTrack backend running"}

from app.api.routes import categories

app.include_router(categories.router)

