---
layout: doc
---

# Sauvegardes

Une sauvegarde est une copie de tout ce que votre établissement a
enregistré dans ERA : élèves, familles, notes, paiements, présences,
passages à l'infirmerie. Elle sert à revenir en arrière si quelque chose
tourne mal.

La page s'ouvre par **Admin → Sauvegardes**. Elle n'est visible que par les
administrateurs.

::: info Elle n'apparaît pas chez vous ?
Cette page n'existe que si votre établissement est seul sur son
installation. Les écoles hébergées par edPage partagent un même serveur,
où une sauvegarde couvrirait les données de toutes les écoles : elle est
donc faite par edPage, pas depuis votre espace.
:::

## Chaque nuit, sans rien faire

ERA prend une sauvegarde automatique toutes les nuits. Les plus récentes
sont conservées, les plus anciennes disparaissent d'elles-mêmes pour ne
pas saturer le serveur. Le nombre conservé est indiqué en haut de la page.

C'est cette sauvegarde-là qui compte le plus : elle couvre les cas où
personne n'a pensé à en demander une.

## En demander une vous-même

Le bouton **Sauvegarder maintenant** en prend une tout de suite. C'est le
réflexe à avoir **avant une opération délicate** : préparer une nouvelle
année scolaire, une réinscription en masse, une suppression importante.

La sauvegarde se prépare en arrière-plan et apparaît dans la liste dès
qu'elle est prête, en général en moins d'une minute — la page se met à
jour toute seule, inutile de la recharger.

Deux refus possibles, tous deux normaux :

- **Une sauvegarde est déjà en préparation.** Attendez qu'elle finisse.
- **Une sauvegarde a été faite il y a moins de quinze minutes.** Elle est
  encore valable : reprenez celle-là.

## La télécharger

Le lien **Télécharger** vous remet le fichier. ERA vous **redemande votre
mot de passe** avant : ce fichier contient toutes les données de
l'établissement, et une session laissée ouverte ne suffit pas à l'obtenir.

Chaque téléchargement est inscrit au journal d'activité, avec qui l'a fait
et quand. La date du dernier téléchargement est également affichée dans la
liste.

::: warning Ce fichier se protège comme le reste
Une fois sur votre ordinateur, il n'est plus protégé par les mots de passe
d'ERA. Rangez-le comme vous rangeriez le registre papier de
l'établissement : pas dans les téléchargements, pas sur une clé USB qui
traîne, pas en pièce jointe d'un courriel.
:::

## Ce que l'archive contient — et ne contient pas

Elle contient **vos données** : toutes les informations saisies dans ERA.

Elle ne contient **pas les clés techniques de l'application**, qui restent
sur le serveur. C'est volontaire : ces clés et vos données réunies dans un
même fichier téléchargeable seraient bien plus dangereuses en cas de perte
du fichier.

Conséquence pratique : si votre serveur était perdu et qu'il fallait tout
remonter à partir d'une archive téléchargée, quelques réglages techniques
seraient à refaire — notamment la double authentification, à reconfigurer
par les personnes qui l'utilisaient. Vos données, elles, seraient intactes.

## Restaurer

**La restauration ne se fait pas depuis cette page**, volontairement : on
ne remplace pas une base de données pendant que l'application tourne
dessus, et si l'opération échouait, l'outil qui devrait vous prévenir
serait justement celui que vous venez d'interrompre.

Si vous devez revenir à une sauvegarde, contactez edPage avec la date de
celle que vous voulez remettre. L'opération se fait sur le serveur, site
fermé le temps nécessaire.

## Supprimer une sauvegarde

**Supprimer** efface l'archive du serveur, définitivement. En temps normal
il n'y a rien à faire : les plus anciennes partent toutes seules.
