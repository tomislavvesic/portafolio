from flask import jsonify
import importlib
from excel_db_loaders.sql_loader_read import SqlLoaderRead


class GetRoutes:
    def __init__(self):
        self.sql_reader = SqlLoaderRead()

    def get_personal_info(self):
        personal_info = self.sql_reader.retreive_user_info()
        response = jsonify(personal_info)
        return response

    def get_programming_languages(self):
        programming_languages = self.sql_reader.retreive_programming_languages()
        response = jsonify(programming_languages)
        return response

    def get_other_skills(self):
        other_skills = self.sql_reader.retreive_other_skills()
        response = jsonify(other_skills)
        return response
