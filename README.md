# Olivierbasquin_7_02082021

Installation de le base de données :
- Démarrez votre server MySQL 
- Importez la base de donnée (/backend/database_backup/groupomania.sql)

Dans le dossier "backend" créez un fichier ".env" avec les informations suivantes :
- DB_HOST=localhost
- DB_USER=<votre user>
- DB_PASS=<votre mot de passe>
- DB_NAME=groupomania
- TOKEN=JAIMELESFRAMBOISES36

Vous disposez d'un accès Administrateur en vous connectant à l'application avec les données suivantes :
- Email: administrateur@administrateur.com
- Mot de passe: Administrateur01

Pour le démarrage du Backend, tapez dans la console les éléments suivants :
- cd backend
- npm install
- nodemon server

Pour le démarrage du Frontend, tapez dans la console les éléments suivants :
- cd frontend
- npm install -g @vue/cli
- npm install
- npm run serve

Bienvenu(e) sur l'application Groupomania !
