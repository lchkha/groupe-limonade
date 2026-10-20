#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Serveur local de prévisualisation - Groupe Limonade (Québec, Canada)
Démarre un serveur HTTP local et ouvre automatiquement la page d'accueil dans le navigateur par défaut.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Affichage propre des requêtes
        sys.stdout.write("[%s] %s\n" % (self.log_date_time_string(), format % args))

def start_server():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}/index.html"
        print("=" * 70)
        print("🍋 GROUPE LIMONADE — SITE OFFICIEL QUÉBEC")
        print("=" * 70)
        print(f"Serveur local actif sur : {url}")
        print("16 Restaurants • Événements Corporatifs • Franchises • Carrières")
        print("Appuyez sur CTRL+C pour arrêter le serveur.")
        print("=" * 70)
        
        try:
            webbrowser.open(url)
        except Exception:
            pass

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nArrêt du serveur. Au revoir !")

if __name__ == "__main__":
    start_server()
