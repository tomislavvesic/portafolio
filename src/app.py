from flask import Flask
from flask_cors import CORS
from routes import get_routes

app = Flask("__main__")
CORS(app)


app.add_url_rule('/personal_info', view_func=get_routes.get_personal_info)
app.add_url_rule('/programming_languages', view_func=get_routes.get_programming_languages)
app.add_url_rule('/other_skills', view_func=get_routes.get_other_skills)

if __name__ == "__main__":
    app.run(debug=True, use_reloader=True)
