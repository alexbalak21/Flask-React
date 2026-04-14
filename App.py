from flask import Flask, send_from_directory, request

app = Flask(__name__, static_folder="frontend", static_url_path="")

# REACT APP - FRONTEND
@app.route("/")
def serve_index():
    return send_from_directory(app.static_folder, "index.html")

# GET DATA
@app.route("/api/data")
def get_data():
    return {"message": "Hello from the API!"}

@app.route("/api/data", methods=["POST"])
def post_data():
    data = request.get_json()
    print(f"Received data: {data}")
    return {
        "message": f"Data received: {data['value']}"
    }
