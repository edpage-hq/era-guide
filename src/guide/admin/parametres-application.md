---
layout: doc
---

# Paramètres de l'application

**Paramètres de l'application**, dans l'espace **Administration**, regroupe tout
ce qui personnalise votre espace ERA : son identité visuelle, ce qui
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

- Le **logo complet** s'affiche sur la page d'accueil et sur les pages de
  connexion. C'est aussi celui qui apparaît sur les bulletins et les reçus
  de paiement des sites qui n'ont pas de logo propre (voir
  [Structure de l'établissement](/guide/admin/structure-etablissement)).
- Le **logo icône** s'affiche en haut de la colonne des espaces, sur fond
  bleu foncé. Si vous ne le renseignez pas, le logo complet est utilisé à
  sa place — ce qui donne souvent un résultat illisible une fois réduit.
  Prévoyez une version carrée, lisible sur fond sombre.

Le logo sert aussi d'**icône de l'application** : celle de l'onglet du
navigateur, celle qui apparaît sur l'écran d'accueil d'un téléphone quand
un utilisateur y ajoute ERA, et celle des notifications. Ces icônes sont
créées automatiquement à partir du logo icône (ou, à défaut, du logo
complet) dès que vous l'enregistrez, et retirées si vous le supprimez. Sans
logo, ce sont celles d'ERA.

Pour ce rôle, un logo **PNG, JPG ou WebP** donne le meilleur résultat. Un
logo SVG est utilisé tel quel dans l'onglet, mais les iPhone ne savent pas
l'afficher sur leur écran d'accueil. Et plus le logo est détaillé, moins il
reste lisible à la taille d'une icône d'onglet : un emblème simple s'y prête
mieux qu'une photo.

## Pages de connexion

La section **Pages de connexion** règle ce que voient les familles et le
personnel avant de saisir quoi que ce soit.

- **Image de fond** — une photo de l'établissement, affichée derrière le
  panneau bleu foncé sur ordinateur, et en bandeau au-dessus du formulaire
  sur téléphone. Formats JPG, PNG ou WebP, 4 Mo au maximum. ERA la recouvre
  d'un voile bleu pour que le texte reste lisible quelle que soit la photo.
  Sans image, le panneau reste uni. **Supprimer** la retire.
- **Afficher le logo dans une pastille blanche** — à activer si votre logo
  se confond avec le bleu foncé du cadre : il s'affiche alors sur une petite
  tuile blanche, sur les pages de connexion comme dans l'application. Ce
  réglage ne s'applique qu'à **votre** logo : celui d'ERA est recoloré
  automatiquement et reste affiché nu.

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
