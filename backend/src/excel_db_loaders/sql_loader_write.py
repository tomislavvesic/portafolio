import sqlite3
from typing import Optional
import pandas as pandas

from table_blueprints import *
from sql_loader_generic import GenericSqlLoader


class SqlLoaderWrite(GenericSqlLoader):
    def __init__(self, sheet_name, sql_path):
        super().__init__()
        self.sheet_name = sheet_name
        self.sql_path = sql_path
        self.connect_to_db()
        self.create_cursor()


    def load_csv_to_db(self, table_name):
        excel_data = pandas.read_excel(self.sql_path, sheet_name=self.sheet_name)
        excel_data.to_sql(name=table_name, con=self.sql_connection, if_exists='replace', index=False)
        self.sql_connection.commit()
        return True

    def sql_loader(self, table_name: str, table_create_query: Optional[str] = None):
        try:
            self.drop_table_if_exists(table_name)
            self.create_table(table_create_query)
            self.load_csv_to_db(table_name)

            self.sql_cursor.close()
        except sqlite3.Error as error:
            print('Error occured - ', error)
        finally:
            if self.sql_connection:
                self.sql_connection.close()
                print('SQLite Connection closed')


if __name__ == "__main__":
    # personal_info, programming_languages, other_skills
    excel_path = 'C:\\Ω Carpe Diem\\programming\portafolio\\backend\\src\\excel_db_loaders\\data.xlsx'
    table_exctractor = 'programming_languages'
    
    excel_sql_loader = SqlLoaderWrite(table_exctractor, excel_path)
    excel_sql_loader.sql_loader(table_exctractor, table_blueprints[table_exctractor]())