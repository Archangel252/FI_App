from abc import ABC, abstractmethod

class IDatabaseManager(ABC):
    """Interface for database management operations."""

    @abstractmethod
    def connect(self):
        """Establish a connection to the database."""
        pass

    @abstractmethod
    def disconnect(self):
        """Close the database connection."""
        pass

    @abstractmethod
    def execute_query(self, query: str):
        """Execute a given SQL query."""
        pass