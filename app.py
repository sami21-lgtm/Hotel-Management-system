import os

def check_main_app():
    if os.path.isfile('app.py'):
        print("app.py exists.")
    elif os.path.isfile('server.js'):
        print("server.js exists.")
    else:
        print("No main app file found (app.py or server.js).")

if __name__ == "__main__":
    check_main_app()
