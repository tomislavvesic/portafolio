import sqlite3
from typing import Optional
import pandas as pandas

from table_blueprints import get_personal_info


class GenericSqlLoader():
    def __init__(self):
        self.sql_connection: sqlite3.Connection = None
        self.sql_cursor: sqlite3.Cursor = None
        self.sheet_name = 'Sheet1'
        self.sql_path = 'C:\Ω Carpe Diem\programming\portafolio\src\db_loaders\data.xlsx'

    def create_db(self):
        self.sql_connection = sqlite3.connect('sql.db')

    def create_cursor(self):
        self.sql_cursor = self.sql_connection.cursor()

    def drop_table_if_exists(self, table_name):
        self.sql_cursor.execute(f"DROP TABLE IF EXISTS {table_name}")
        return True

    def create_table(self, table_name, *args):
        table = f"CREATE {table_name}"
        for arg in args:
            table += arg

        self.sql_cursor.execute(table)
        return True

    def load_csv_to_db(self, table_name):
        excel_data = pandas.read_excel(
            self.sql_path, sheet_name=self.sheet_name
        )
        excel_data.to_sql(
            name=table_name, con=self.sql_connection, if_exists='replace', index=False
        )
        self.sql_connection.commit()
        return True

    def sql_loader(self, table_name: str, table_create_query: Optional[str] = None):
        try:
            self.create_db()
            self.create_cursor()
            self.drop_table_if_exists(table_name)
            self.create_table(table_name, table_create_query)
            self.load_csv_to_db(table_name)

            self.sql_cursor.close()
        except sqlite3.Error as error:
            print('Error occured - ', error)
        finally:
            if self.sql_connection:
                self.sql_connection.close()
                print('SQLite Connection closed')

    def test(self):
        self.create_db()
        self.create_cursor()
        statement = '''SELECT * FROM mytable'''
        self.sql_cursor.execute(statement)
        output = self.sql_cursor.fetchall()
        for row in output:
            print(row)


if __name__ == "__main__":
    excel_sql_loader = ExcelSqlLoader()
    excel_sql_loader.test()
    # excel_sql_loader.sql_loader('personal_info', get_personal_info('personal_info'))
