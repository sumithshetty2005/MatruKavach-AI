from database import create_db_and_tables, engine
from sqlmodel import SQLModel
import models
import os

print("Deleting DB...")
if os.path.exists("matrukavach.db"):
    os.remove("matrukavach.db")

print("Recreating tables...")
create_db_and_tables()
print("Done!")
