import subprocess
import os


REACT_DIR = "./react"

print("Building React frontend...")
subprocess.run(["npm", "run", "build"], cwd=REACT_DIR)

print("Starting Flask server...")
os.system("flask run")
