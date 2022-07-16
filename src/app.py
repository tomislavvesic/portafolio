from flask import Flask, jsonify

app = Flask("__main__")


@app.route('/portofolio', methods=['GET'])
def get_exams():
    response = jsonify({"Test": "test"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == "__main__":
    app.run()
