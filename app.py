from flask import Flask, render_template, send_from_directory   

app = Flask(
    __name__,
    template_folder="templates",
    static_folder="templates/assets"
)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/react.svg')
def favicon():
    return send_from_directory('templates', 'favicon.svg')

