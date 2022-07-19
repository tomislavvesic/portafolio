from flask import Flask, jsonify
from flask_cors import CORS

app = Flask("__main__")
CORS(app)


@app.route('/portofolio', methods=['GET'])
def get_exams():
    response = jsonify({"Test": "test"})
    # response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == "__main__":
    app.run()
