---
layout: doc
---

# Bulletins

Cette page couvre la publication des bulletins côté administration — une
fois que les enseignants ont saisi leurs notes et appréciations pour une
période donnée (ce qui est leur propre travail, pas le vôtre), c'est vous
qui déclenchez la génération et la mise à disposition des bulletins.

## Publier les bulletins d'une classe

Depuis **Paramétrage scolaire → Classes**, cliquez sur **Bulletins** sur la
ligne de la classe concernée.

Pour publier :

1. Choisissez la **Période scolaire** concernée dans le menu déroulant en
   haut de la page.
2. Cliquez sur **Publier / republier les bulletins**.

Cela génère (ou régénère) le bulletin de chaque élève de la classe pour
cette période, à partir des notes et appréciations déjà saisies.

À la **première** publication, les parents de chaque élève reçoivent un
e-mail et une notification : c'est par le bulletin qu'ils apprennent les
résultats de la période, pas note par note. Republier après une correction
met à jour le bulletin déjà publié — les élèves et parents téléchargent
toujours la dernière version — sans les prévenir une seconde fois.

Si aucune période scolaire n'est configurée pour l'année de cette classe,
un message vous l'indique — allez d'abord créer une période dans
[Structure de l'établissement](/guide/admin/structure-etablissement).

## Suivre et télécharger les bulletins

Le tableau sous le sélecteur de période liste chaque élève de la classe
avec :

- **Statut** — « Non publié », ou la date de publication du bulletin.
- Un bouton de téléchargement (icône), disponible dès qu'un bulletin a été
  généré pour cet élève.

## Récapitulatifs de notes {#recapitulatifs-de-notes}

**Enseignement → Récapitulatifs de notes** liste les classes de l'année et,
pour chacune, deux portes d'entrée. Le bouton **Récap des notes** de la page
des bulletins d'une classe mène au même endroit.

- **Récap des notes** — tous les élèves face à toutes les matières, pour la
  période choisie. Chaque case donne la moyenne de l'élève dans la matière,
  avec dessous le détail par type d'évaluation (D = devoir, C =
  composition…). Un point signale une option que l'élève ne suit pas ; une
  spécialité abandonnée est marquée. La dernière colonne donne la moyenne
  générale ; les trois dernières lignes, la moyenne de la classe, la plus
  basse et la plus haute.
- **Une matière** — le relevé de la matière : chaque évaluation de la
  période, la note de chaque élève telle que saisie (sur le barème de
  l'évaluation, avec bonus ou malus, absent ou dispensé), puis sa moyenne
  dans la matière. Seuls les élèves qui suivent la matière y figurent ; les
  types hors moyenne sont signalés.

Les moyennes sont **exactement celles des bulletins** : un récapitulatif ne
peut pas afficher une autre moyenne que le bulletin du même élève. Il n'y a
pas de rang, comme sur le bulletin.

Chaque écran se télécharge :

- en **PDF**, pour l'imprimer ou le présenter en conseil de classe ;
- en **CSV**, pour l'ouvrir dans un tableur (Excel, LibreOffice) : en
  français, le fichier utilise le point-virgule et la virgule décimale, et
  s'ouvre directement en colonnes.

L'icône à côté du nom d'un élève, dans le récap de la classe, télécharge
son **relevé de notes** en PDF : chacune de ses évaluations, matière par
matière, avec ses moyennes.

## Modèle de bulletin

Le modèle visuel utilisé (Classique, Compact ou Traditionnel à la
française) se choisit par classe, dans le formulaire de la classe — voir
[Structure de l'établissement](/guide/admin/structure-etablissement#classes).
Si aucun modèle n'est choisi pour une classe, le modèle par défaut de
l'établissement s'applique.

Quel que soit le modèle, les matières du bulletin suivent le paramétrage des
[matières par département](/guide/admin/structure-etablissement#matieres-par-departement) :

- elles sont regroupées sous leur **rubrique** (« Tronc commun »,
  « Sciences »…), dans l'**ordre** indiqué ; les matières sans rubrique
  viennent sans intitulé ;
- les **spécialités** forment un bloc à part, « Enseignements de
  spécialité » : d'abord celles que l'élève suit, puis celles qu'il a
  abandonnées, marquées « (abandonnée) ».

Le modèle **Traditionnel** ajoute une colonne par type d'évaluation qui
compte dans la moyenne (la moyenne de l'élève en devoirs, en compositions…)
et une colonne « Moy. × coef. ». Les types
[hors moyenne](/guide/admin/structure-etablissement#types-d-evaluation)
n'y figurent pas.

Un bulletin déjà publié est un document figé : un changement de paramétrage
n'apparaît qu'après avoir republié les bulletins de la classe.
