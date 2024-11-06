from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, 
     supports_credentials=True,
     resources={
         r"/api/*": {
             "origins": ["http://localhost:5173"],
             "methods": ["GET", "POST", "OPTIONS"],
             "allow_headers": ["Content-Type"],
             "expose_headers": ["Content-Type"],
             "supports_credentials": True
         }
     })

@app.route('/api/auth/set', methods=['POST', 'OPTIONS'])
def set_supabase_cookie():
    if request.method == 'OPTIONS':
        response = jsonify({'status': 'ok'})
        return response
        
    body = request.get_json()
    response = jsonify({'status': 'ok'})
    if body and body.get('session'):
        # Set cookie with session data
        response.set_cookie(
            'sb-auth-token',
            body['session']['access_token'],
            httponly=True,
            secure=False,  # Set to True in production
            samesite='Lax',
            max_age=3600 * 24 * 7,  # 1 week
            domain='localhost'
        )
    return response

@app.route('/api/auth/remove', methods=['POST', 'OPTIONS'])
def remove_supabase_cookie():
    if request.method == 'OPTIONS':
        response = jsonify({'status': 'ok'})
        return response
        
    response = jsonify({'status': 'ok'})
    response.delete_cookie('sb-auth-token', domain='localhost')
    return response

if __name__ == '__main__':
    app.run(debug=True)