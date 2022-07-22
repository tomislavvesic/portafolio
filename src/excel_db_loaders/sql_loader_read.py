import sqlite3
from typing import Optional
import pandas as pandas

from table_blueprints import get_personal_info
from sql_loader_generic import GenericSqlLoader


class SqlLoaderRead(GenericSqlLoader):
    def __init__(self):
        super().__init__()

    def read_all_database(self, table_name):
        self.connect_to_db()
        self.create_cursor()
        statement = f'SELECT * FROM {table_name}'
        print(statement)
        self.sql_cursor.execute(statement)
        output = self.sql_cursor.fetchall()
        for row in output:
            print(row)
        print("Closing cursor")
        self.sql_cursor.close()
        
    
    def retreive_user_info(self):
        self.connect_to_db()
        self.create_cursor()

        statement = f'SELECT * FROM personal_info'
        self.sql_cursor.execute(statement)

        all_executed_data = self.sql_cursor.fetchall()
        for row in all_executed_data:
            query_result = {
                "first_name": row[0],
                "last_name": row[0],
                "email": row[0],
                "birth_date": row[0],
                "state": row[0],
                "city": row[0],
                "title": row[0],
                "linkedin": row[0],
                "github": row[0],
                "description": row[0],
            }
        
        self.sql_cursor.close()
        return query_result
    
    def retreive_programming_languages(self):
        self.connect_to_db()
        self.create_cursor()

        statement = f'SELECT * FROM programming_languages'
        self.sql_cursor.execute(statement)
        
        all_executed_data = self.sql_cursor.fetchall()
        query_result = {}
        for row in all_executed_data:
            query_result[row[0]] = row[1]

        self.sql_cursor.close()
        return query_result
    
    def retreive_other_skills(self):
        self.connect_to_db()
        self.create_cursor()

        statement = f'SELECT * FROM other_skills'
        self.sql_cursor.execute(statement)
        
        all_executed_data = self.sql_cursor.fetchall()
        query_result = {}
        for row in all_executed_data:
            print(row)
            query_result[row[0]] = row[1]

        self.sql_cursor.close()
        return query_result


if __name__ == "__main__":
    excel_sql_loader = SqlLoaderRead()
    # excel_sql_loader.read_all_database('programming_languages')
    user_info = excel_sql_loader.retreive_user_info()
    programming_languages = excel_sql_loader.retreive_programming_languages()
    other_skills = excel_sql_loader.retreive_other_skills()
    print(user_info)
    print(programming_languages)
    print(other_skills)
