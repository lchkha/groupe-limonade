@echo off
title Groupe Limonade - Serveur Local
echo ========================================================
echo  Lancement du site Web Groupe Limonade (Quebec, Canada)
echo ========================================================
echo.

set PYTHON_PATH="C:\Users\utilisateur\AppData\Local\Programs\Python\Python312\python.exe"

if exist %PYTHON_PATH% (
    %PYTHON_PATH% serve.py
) else (
    python serve.py 2>nul || (
        echo Python n'est pas detecte directement dans le PATH.
        echo Ouverture directe du fichier index.html dans votre navigateur...
        start "" "index.html"
    )
)

pause
