import sqlite3
from typing import Optional
import pandas as pandas

from table_blueprints import get_personal_info
from sql_loader_generic import GenericSqlLoader


class SqlLoaderRead(GenericSqlLoader):
    def __init__(self):
        super().__init__()

    def read_all_database(self, table_name):
        self.create_db()
        self.create_cursor()
        statement = f'''SELECT * FROM {table_name}'''
        self.sql_cursor.execute(statement)
        output = self.sql_cursor.fetchall()
        for row in output:
            print(row)


if __name__ == "__main__":
    excel_sql_loader = SqlLoaderRead()
    excel_sql_loader.read_all_database(table_name="mytable")
