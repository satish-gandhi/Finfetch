# fetchNews.py

import requests
import json
from flask import Flask

app = Flask(__name__)

@app.route('/api/fetch-news')
def fetch_news():
    API_KEY = "d1da0ac33bda4d1fabcd766208881585"
    url = f"https://newsapi.org/v2/top-headlines?country=us&apiKey={API_KEY}"
    response = requests.get(url)
    data = response.json()
    return json.dumps(data)

if __name__ == '__main__':
    app.run()
