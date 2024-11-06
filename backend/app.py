from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:5173"],
        "supports_credentials": True
    }
})

@app.route('/api/auth/set', methods=['POST'])
def set_supabase_cookie():
    body = request.get_json()
    response = jsonify({'status': 'ok'})
    if body and body.get('session'):
        # Set cookie with session data
        response.set_cookie(
            'sb-auth-token',
            body['session']['access_token'],
            httponly=True,
            secure=True,
            samesite='Lax',
            max_age=3600 * 24 * 7  # 1 week
        )
    return response

@app.route('/api/auth/remove', methods=['POST'])
def remove_supabase_cookie():
    response = jsonify({'status': 'ok'})
    response.delete_cookie('sb-auth-token')
    return response

if __name__ == '__main__':
    app.run(debug=True)