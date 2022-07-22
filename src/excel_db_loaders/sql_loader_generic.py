import sqlite3
from typing import Optional
import pandas as pandas

from table_blueprints import get_personal_info


class GenericSqlLoader():
    def __init__(self):
        self.sql_connection: sqlite3.Connection = None
        self.sql_cursor: sqlite3.Cursor = None
        
    def connect_to_db(self):
        self.sql_connection = sqlite3.connect('sql.db')

    def create_cursor(self):
        self.sql_cursor = self.sql_connection.cursor()

    def drop_table_if_exists(self, table_name):
        self.sql_cursor.execute(f"DROP TABLE IF EXISTS {table_name}")
        return True

    def create_table(self, table_creation_query):
        self.sql_cursor.execute(table_creation_query)
        return True