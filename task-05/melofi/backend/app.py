from flask import Flask, jsonify
from flask_cors import CORS
import requests;
app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])


@app.route("/songdata")
def songdata(): #the main cards detail fetching top
    url = "https://itunes.apple.com/search"
    params = {
        "term": "POCKER+FACE",
        "entity": "song",
        "limit": 39
    }
    res = requests.get(url,params=params)
    songs_json=res.json()
    songdata = songs_json["results"]

    return jsonify(songdata)
    
if __name__ == "__main__":
    app.run(port=5000, debug=True)


