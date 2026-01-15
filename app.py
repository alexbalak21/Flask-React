from flask import Flask, render_template, send_from_directory, request 

app = Flask(
    __name__,
    template_folder="templates",
    static_folder="templates/assets"
)

@app.route('/react.svg')
def favicon():
    return send_from_directory('templates', 'favicon.svg')


@app.route("/")
def index():
    return render_template("index.html")

@app.get("/api/message")
def get_data():
    return {"message": "Hello from the API"}

@app.post("/api/message")
def post_data():
    data = request.get_json()
    message = data.get("message", "No massage received")
    return {"message": message}