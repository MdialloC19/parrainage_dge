# parrainage_dge

Dans le cadre de la numérisation des procédures administratives couvrant la gestion des élections au Sénégal, une des étapes fastidieuses porte sur la gestion des parrainages. Actuellement effectuée par le remplissage de feuilles portant les informations de la carte d’identité du citoyen ainsi que sa signature, on souhaite digitaliser le processus.

# Gestion des Parrainages de Candidature d’Élections Présidentielles pour le Sénégal

Dans le cadre de la numérisation des procédures administratives couvrant la gestion des élections au Sénégal, une des étapes fastidieuses porte sur la gestion des parrainages. Actuellement faites par le remplissage de feuilles portant les informations de la carte d’identité du citoyen ainsi que sa signature, on souhaite digitaliser le process.

## Objectif

Le projet consiste à développer une application web permettant de gérer les parrainages des candidatures aux élections présidentielles au Sénégal. Cette application permettra d'automatiser plusieurs étapes du processus, facilitant ainsi le travail des autorités électorales.

## Phases du Projet

### 1. Chargement de la liste des électeurs

- Une interface web permettra d'importer le fichier électoral au format CSV.
- Le contenu du fichier sera vérifié et stocké dans une table temporaire en attendant validation.
- Contrôle du fichier électoral pour vérifier l'empreinte et la validité des données des électeurs.
- En cas d'erreur, les données seront enregistrées dans une table d'historisation et une table temporaire spécifique.

### 2. Saisie de la liste des candidats

- Une interface permettra de saisir et de contrôler les informations des candidats.
- Vérification de la présence du candidat dans le fichier électoral avant l'enregistrement.
- Saisie des informations complémentaires du candidat et enregistrement de sa candidature.
- Affichage de la liste des candidats enregistrés avec possibilité de visualiser les détails de chaque candidature.

### 3. Ouverture de la période de parrainage

- Enregistrement de la date de début et de fin des parrainages avec vérification de cohérence.
- Activation automatique des interfaces d'enregistrement et de parrainage en ligne selon les dates définies.

### 4. Enregistrement du profil du parrain

- Création d'un compte en ligne pour chaque électeur désirant parrainer un candidat.
- Saisie des informations d'authentification et vérification de leur cohérence.
- Envoi d'un code d'authentification sur le téléphone et l'e-mail du parrain.

### 5. Enregistrement d'un parrainage

- Chaque électeur pourra enregistrer son parrainage en ligne en saisissant son numéro de carte d'électeur et d'identité nationale.
- Vérification de la validité des informations avant l'enregistrement du parrainage.
- Sélection d'un candidat à parrainer et validation du choix avec envoi d'un code de vérification.

### 6. Suivi des parrainages

- Interface permettant à chaque candidat de suivre l'évolution quotidienne de ses parrainages.
- Accès sécurisé grâce au code d'authentification envoyé lors de l'enregistrement.

## Recommandations Techniques

- Utilisation d'une méthode agile pour la conception et le suivi du projet.
- Base de données ORACLE déployée en Cloud.
- Interface FrontOFFICE mobile/web-mobile pour les électeurs.
- Interface FrontOFFICE APEX pour les candidats.
- Interface BackOFFICE développée en Angular pour le personnel de la DGE.

## Livrables

- Rapport technique détaillé comprenant l'organisation de l'équipe, le planning de réalisation, l'architecture technique, les modèles conceptuels UML et une description des fonctionnalités avec captures d'écran.
- Présentation PowerPoint de la solution.
- Liens vers les interfaces APEX et React fonctionnelles.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
