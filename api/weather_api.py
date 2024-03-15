from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/weather/<city>')

def get_weather(city):
  weather_data = {
    'city': city,
    'temperature': '25 Celsius',
    'description': 'Sunny'

  }

  return jsonify(weather_data)

if __name__ == '__main__':
  app.run(debug=True)