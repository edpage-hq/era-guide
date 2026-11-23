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
  générale, puis le rang de l'élève dans la classe ; les trois dernières
  lignes, la moyenne de la classe, la plus basse et la plus haute.
- **Une matière** — le relevé de la matière : chaque évaluation de la
  période, la note de chaque élève telle que saisie (sur le barème de
  l'évaluation, avec bonus ou malus, absent ou dispensé), puis sa moyenne
  dans la matière et son rang dans la matière. Seuls les élèves qui suivent
  la matière y figurent ; les types hors moyenne sont signalés.

Les moyennes sont **exactement celles des bulletins** : un récapitulatif ne
peut pas afficher une autre moyenne que le bulletin du même élève. Deux
élèves à la même moyenne (au centième près, telle qu'affichée) partagent le
même rang, « 2e ex æquo », et le rang suivant est sauté (1er, 2e, 2e, 4e).

Chaque écran se télécharge :

- en **PDF**, pour l'imprimer ou le présenter en conseil de classe ;
- en **Excel** (.xlsx), pour le retravailler dans un tableur. Le fichier
  d'une classe a deux feuilles : le récapitulatif, et les **appréciations du
  conseil** à remplir.

Dans le récap de la classe, les icônes à côté du nom d'un élève
téléchargent :

- son **relevé de notes** en PDF : chacune de ses évaluations, matière par
  matière, avec ses moyennes et son rang dans la classe ;
- son **fichier Excel**, toutes matières confondues, à remplir et importer
  (voir ci-dessous).

Le récap de la classe propose aussi, pour la période choisie :

- **Toutes les matières** (PDF ou Excel) : les feuilles de notes de toute la
  classe en un seul fichier, une page ou un onglet par matière. Une matière
  sans évaluation sur la période n'y figure pas. Ce fichier Excel sert à
  lire ou à imprimer, pas à importer : pour importer, utilisez le fichier
  d'une matière ou d'un élève ;
- **Appréciations du conseil** (PDF) : une ligne par élève, avec sa moyenne
  générale, son rang, l'appréciation générale, la conduite, et ses
  distinctions ou avertissements. La même liste se télécharge depuis la page
  de saisie des appréciations du professeur principal.

Ces exports sont réservés à l'administration et au professeur principal.

### Importer des notes et des appréciations depuis Excel {#importer-depuis-excel}

Le fichier Excel téléchargé sert aussi de modèle : on le remplit, puis on le
renvoie avec le bouton **Importer** du même écran.

- **Notes et appréciations d'une matière** — depuis le relevé de la matière.
  Dans chaque colonne d'évaluation, saisissez la note sur le barème de
  l'évaluation (12 ou 12,5), « Absent » (ou « abs ») ou « Dispensé » (ou
  « disp ») ; dans la colonne **Appréciation**, l'appréciation du bulletin
  (une colonne par rubrique si l'établissement a des
  [rubriques d'appréciation](#rubriques-d-appreciation)).
  Les évaluations doivent d'abord être créées dans ERA : l'import remplit
  leurs notes, il n'en crée pas. Un bonus ou un malus déjà donné est
  conservé. Réservé à l'administration, à l'enseignant de la matière et au
  professeur principal de la classe.
- **Notes et appréciations d'un élève, toutes matières** — depuis le récap
  de la classe : l'icône Excel à côté du nom de l'élève télécharge son
  fichier, l'icône d'import le renvoie. Le fichier a deux feuilles :
  « Notes », une ligne par évaluation de la période dans chaque matière
  (saisissez la note dans la colonne **Note**), et « Appréciations », une
  ligne par matière (une colonne par rubrique, s'il y en a). Seul le
  fichier Excel est accepté, pas un CSV. Réservé à l'administration et au
  professeur principal de la classe.
- **Appréciations du conseil** — depuis le récap de la classe, feuille
  « Appréciations du conseil » : appréciation générale, conduite, et un « x »
  pour chaque distinction ou alerte (félicitations, compliments,
  encouragements, alerte travail, alerte conduite). Réservé à
  l'administration et au professeur principal.

Les règles de l'import :

- **une case vide ne change rien** à ce qui est déjà dans ERA : on peut
  réimporter le même fichier après l'avoir complété. Pour les distinctions,
  sur une ligne remplie, une case vide veut dire « non » ;
- **tout ou rien** : le fichier est vérifié en entier avant d'être
  enregistré. S'il contient une erreur (note hors barème, mot non reconnu,
  élève inconnu), rien n'est enregistré et chaque ligne à corriger est
  listée ;
- ne modifiez pas la première colonne (**N° élève**, ou **Référence** dans
  le fichier d'un élève) : c'est elle qui relie chaque ligne à l'élève, à
  l'évaluation ou à la matière. Le fichier d'une autre classe, matière,
  période ou d'un autre élève est refusé, comme tout import dans une
  période clôturée ;
- un fichier CSV enregistré depuis Excel est aussi accepté, tant que ses
  en-têtes de colonnes sont ceux du fichier téléchargé.

## Rubriques d'appréciation {#rubriques-d-appreciation}

Par défaut, l'appréciation d'une matière est un commentaire libre. Vous
pouvez la découper en **rubriques d'appréciation** : par exemple
« Attitude », « Progression » et « Conseils ». À ne pas confondre avec les
rubriques de matières (« Tronc commun », « Sciences »…), qui regroupent les
matières sur le bulletin.

1. Ouvrez **Paramètres de l'application**, section **Bulletins**.
2. Sous **Rubriques des appréciations par matière**, cliquez sur **Ajouter
   une rubrique** et donnez-lui un nom (60 caractères au plus). Six rubriques
   au maximum.
3. Rangez-les avec les flèches, dans l'ordre où le bulletin les affichera,
   puis cliquez sur **Enregistrer les modifications**.

Ensuite :

- les enseignants remplissent chaque rubrique pour chaque élève, sur la
  page des appréciations comme dans le fichier Excel de la matière, qui a
  une colonne par rubrique ;
- le bulletin affiche, dans la case d'appréciation, les rubriques remplies
  l'une après l'autre : « Attitude : … · Progression : … ».

**Renommer** une rubrique garde les textes déjà saisis. **Supprimer** une
rubrique la masque partout, mais ses textes restent enregistrés. Sans
aucune rubrique, l'appréciation redevient un commentaire libre. Un
commentaire libre saisi avant l'ajout des rubriques reste sur le bulletin
tant qu'aucune rubrique n'est remplie pour cet élève.

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
