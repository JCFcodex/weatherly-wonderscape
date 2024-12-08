import sqlite3


def get_db():
    conn = sqlite3.connect("weather.db")
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with get_db() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS weather_cache (
                city TEXT PRIMARY KEY,
                data TEXT,
                timestamp DATETIME
            )
        """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS recent_searches (
                city TEXT,
                timestamp DATETIME,
                PRIMARY KEY (city)
            )
        """
        )
        conn.commit()
