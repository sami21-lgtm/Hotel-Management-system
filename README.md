import os

def check_readme():
    if os.path.isfile('README.md'):
        print("README.md exists.")
    else:
        print("README.md is missing.")

if __name__ == "__main__":
    check_readme()
