from flask import jsonify
import importlib
from excel_db_loaders.sql_loader_read import SqlLoaderRead

def get_personal_info():
    module = importlib.import_module('excel_db_loaders.sql_loader_read', ".")
    class_ = getattr(module, "SqlLoaderRead")
    instance = class_()
    print(instance.__dict__)

    # response = jsonify({"Test": "test"})
    # response.headers.add('Access-Control-Allow-Origin', '*')
    # return response

def get_programming_languages():
    response = jsonify({"Test": "test"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

def get_other_skills():
    response = jsonify({"Test": "test"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

get_personal_info()