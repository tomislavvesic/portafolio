from flask import Flask
from flask_cors import CORS
from routes.get_routes import GetRoutes

app = Flask(__name__)
CORS(app)

get_routes = GetRoutes()
app.add_url_rule('/personal_info', view_func=get_routes.get_personal_info)
app.add_url_rule('/programming_languages', view_func=get_routes.get_programming_languages)
app.add_url_rule('/other_skills', view_func=get_routes.get_other_skills)

if __name__ == "__main__":
    app.run(host='0.0.0.0')
    
