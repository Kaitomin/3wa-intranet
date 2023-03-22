CSS, MUI, styled-component,

data : fichier json

-Page connexion
L'utilisateur doit pouvoir se connecter au système via son login et mot de passe, proposez un système pour se connecter/déconnecter.
Bouton : connexion
2 champs type email, password
dispatch : vérification au submit
useState: si vérification contient une erreur
--Page d'accueil
Une fois connecté, l'utilisateur arrive sur la page d'accueil qui lui présente un de ses collaborateurs au hasard :
H1, p, p, card
firstname
récupérer l'utilisateur connecté
(Facultatif) Le bouton "Dire bonjour à quelqu'un d'autre" doit permettre d'afficher un autre collaborateur au hasard.
dispatch, envoyer un id aléatoire entre 1 et 42, async
bouton liste, nav
se connecter et admin
--- Liste d'utilisateurs
Les collaborateurs s'affichent sous forme de card, avec toutes leurs caractéristiques :
formulaire
h1
input
2 selectbox avec par nom, par catégorie
Cette page doit également permettre un affichage avec un système de filtres par nom, localisation et catégorie :

La liste doit se rafraîchir instantanément.
useState
---- Modifier mon profil (formulaire)
L'utilisateur doit également pouvoir accéder à une page de modification de ses informations personnelles (incluant le login/mot de passe) en cliquant sur son image de profil dans le header :
Enfin, l'utilisateur doit pouvoir se déconnecter. Après déconnexion, aucune des pages précédentes (home, listing) ne sont accessibles.
local storage
Enfin, l'utilisateur doit pouvoir se déconnecter. Après déconnexion, aucune des pages précédentes (home, listing) ne sont accessibles.

B. Administrateur
----- Créer l'utilisateurs

L'administrateur est un utilisateur standard, disposant de privilèges supplémentaires. Il peut :

Ajouter un nouveau collaborateur.
Supprimer un collaborateur existant.
Dans sa barre de menu, il a accès à un lien pour "Ajouter" un nouveau collaborateur.

L'affichage d'une card d'un utilisateur lui propose aussi 2 boutons supplémentaires "Éditer" et "Supprimer" :

Ajouter un nouveau collaborateur.
bouton Ajouter
Supprimer un collaborateur existant.
pour chaque card, deux boutons (éditer, supprimer)

La page d'ajout est un simple formulaire pour créer un nouveau collaborateur :
Mot de passe
form
Dai
-page de connexion
-composant form (modifier mon profil)
Dom
-page d'accueil
- page de listing