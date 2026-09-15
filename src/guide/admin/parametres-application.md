---
layout: doc
---

# Paramètres de l'application

**Paramètres de l'application**, dans le groupe **Administration** du menu
de gauche, regroupe tout
ce qui personnalise votre instance d'ERA : son identité visuelle, ce qui
s'imprime sur les reçus, et deux réglages qui changent réellement le
comportement de l'app pour les autres utilisateurs.

Ces réglages valent pour tout l'établissement, pas pour votre compte. Pour
vos préférences personnelles (thème, langue, sécurité), voir
[Bien démarrer](/guide/prise-en-main).

## Identité

Le **nom de l'application** remplace « ERA » partout dans l'interface, dans
les e-mails et sur les documents générés. C'est ce qui permet à
l'établissement d'afficher son propre nom plutôt que celui du logiciel.

## Couleurs

Une **couleur primaire** et une **couleur secondaire**, appliquées à toute
l'interface. Le bouton **Réinitialiser** ramène aux valeurs par défaut
d'ERA si un essai ne convient pas — utile avant de chercher à corriger une
teinte à la main.

## Logo

Deux logos distincts, et la différence compte :

- Le **logo complet** s'affiche dans le menu déployé et sur la page
  d'accueil. C'est aussi celui qui apparaît sur les bulletins et les reçus
  de paiement des sites qui n'ont pas de logo propre (voir
  [Structure de l'établissement](/guide/admin/structure-etablissement)).
- Le **logo icône** s'affiche dans le menu réduit. Si vous ne le
  renseignez pas, le logo complet est utilisé à sa place — ce qui donne
  souvent un résultat illisible une fois réduit. Prévoyez une version
  carrée.

## Accroche d'accueil

L'accroche et le sous-titre de la page d'accueil ne se modifient plus ici :
ils ont rejoint le reste du contenu de la page, dans
[Page d'accueil](/guide/admin/page-accueil).

## Personnalisation des reçus

Ces champs s'impriment sur **chaque reçu de paiement généré**, en plus du
logo (celui du site de l'élève s'il en a un, sinon le logo complet) :
adresse, téléphone, e-mail, message de remerciement et note de bas de page.
Ces champs sont communs à tous les sites.

C'est ici qu'on met les mentions que la famille doit retrouver sur son
justificatif. Les reçus déjà générés ne sont pas réécrits : le changement
s'applique aux reçus produits ensuite.

## Rattachement libre-service des parents

Ce réglage décide si un parent peut **rechercher un élève déjà inscrit et
se rattacher lui-même** à son dossier.

- **Activé** : le parent effectue la démarche seul depuis son portail (voir
  [Mes enfants et leurs documents](/guide/parent/enfants-et-documents)).
- **Désactivé** : cette possibilité disparaît du portail parent. Le
  rattachement doit alors être fait par l'administration, depuis le dossier
  de l'élève (voir [Élèves et tuteurs](/guide/admin/eleves-tuteurs)).

Vérifiez ce réglage avant de conclure qu'un parent « ne trouve pas » la
fonction : elle peut simplement être désactivée pour l'établissement.

## Notation

Ce réglage décide **comment la moyenne d'une matière combine les notes de
différents types d'évaluation** (devoir, composition, interrogation…).

- **Désactivé** (comportement par défaut) : chaque note pèse selon le poids
  de son type d'évaluation, tel que défini dans
  [Structure de l'établissement](/guide/admin/structure-etablissement).
- **Activé** : chaque type d'évaluation pèse autant, quel que soit le
  nombre de notes qu'il contient. Trois interrogations ne pèsent alors pas
  plus lourd qu'une composition unique.

C'est un choix pédagogique, pas un détail d'affichage : il change les
moyennes calculées, donc les bulletins. Arrêtez-le avant la première
publication de bulletins de l'année, et évitez d'en changer en cours
d'année.
