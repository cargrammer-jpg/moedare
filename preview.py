#!/usr/bin/env python3
"""Local preview. python3 preview.py  then open http://127.0.0.1:4173"""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
print("MOEDARE  http://127.0.0.1:4173")
ThreadingHTTPServer(("127.0.0.1", 4173), SimpleHTTPRequestHandler).serve_forever()
