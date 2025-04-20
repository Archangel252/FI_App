from database.manager import IDatabaseManager
from supabase import create_client, Client
from dotenv import load_dotenv
import os


class SupabaseManager(IDatabaseManager):
    def __init__(self):
        self.client: Client = None

    def connect(self):
        load_dotenv() # Load .env file from backend directory if it exists (for local runs)

        supabase_url = os.getenv("SUPABASE_URL")
        supabase_key = os.getenv("SUPABASE_KEY")

        if not supabase_url or not supabase_key:
            raise ValueError("SUPABASE_URL and SUPABASE_KEY must be set in the environment.")

        # Use the environment variables to create the client
        self.client = create_client(
            supabase_url=supabase_url,
            supabase_key=supabase_key
        )

    def disconnect(self):
        pass

    def execute_query(self, query: str):
        response = self.client.table("Users").select("*").execute()
        return response.data
