from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database.managers.supabase import SupabaseManager
app = FastAPI()

# Allow CORS for the frontend
origins = [
    "http://localhost:3000",  # Allow frontend origin during development
    "http://frontend:3000"   # Allow frontend service name within Docker network
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/message")
def read_root():
    supabase_manager = SupabaseManager()
    supabase_manager.connect()
    results =   supabase_manager.execute_query("SELECT * FROM messages")
    return {"message": f"Hello from FastAPI Backend! {results}", "results": results} 