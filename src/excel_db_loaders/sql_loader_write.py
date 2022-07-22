import sqlite3
from typing import Optional
import pandas as pandas

from table_blueprints import get_personal_info, get_programming_languages, get_other_skills
from sql_loader_generic import GenericSqlLoader


class SqlLoaderWrite(GenericSqlLoader):
    def __init__(self, sheet_name, sql_path):
        super().__init__()
        self.sheet_name = sheet_name
        self.sql_path = sql_path


    def load_csv_to_db(self, table_name):
        excel_data = pandas.read_excel(self.sql_path, sheet_name=self.sheet_name)
        excel_data.to_sql(name=table_name, con=self.sql_connection, if_exists='replace', index=False)
        self.sql_connection.commit()
        return True

    def sql_loader(self, table_name: str, table_create_query: Optional[str] = None):
        try:
            self.connect_to_db()
            self.create_cursor()
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
    excel_sql_loader = SqlLoaderWrite('programming_languages', 'C:\Ω Carpe Diem\programming\portafolio\src\excel_db_loaders\data.xlsx')
    excel_sql_loader.sql_loader('programming_languages', get_programming_languages())