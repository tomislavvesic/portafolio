import sqlite3


class GenericSqlLoader():
    def __init__(self):
        self.sql_connection: sqlite3.Connection = None
        self.sql_cursor: sqlite3.Cursor = None
        
    def connect_to_db(self):
        database = 'sql.db'
        print(f"Connecting to {database} database.")
        self.sql_connection = sqlite3.connect(database)

    def create_cursor(self):
        print("Creating cursor for database")
        self.sql_cursor = self.sql_connection.cursor()

    def drop_table_if_exists(self, table_name):
        print(f"Dropping {table_name} table.")
        self.sql_cursor.execute(f"DROP TABLE IF EXISTS {table_name}")
        return True

    def create_table(self, table_creation_query):
        print(f"Creating table with query params {table_creation_query}.")
        self.sql_cursor.execute(table_creation_query)
        return True