---
layout: doc
---

# Importer des élèves

La page **Importer des élèves**, dans l'espace **Élèves et admissions**,
reprend une liste d'élèves et de leurs parents depuis un fichier Excel, au
lieu de les saisir un par un. Elle sert surtout à la reprise d'un
établissement ou à une grosse inscription de rentrée. Un lien y mène aussi
depuis la page **Élèves**.

Elle est ouverte à l'administration et au secrétariat. L'administration
remplit les classes de tous les sites ; le secrétariat, celles de **son
site** (celui de sa fiche employé).

## Les étapes

1. **Téléchargez le fichier** Excel. Son premier onglet est la liste à
   remplir ; le second donne les classes de l'année en cours que vous
   pouvez utiliser, avec leurs places restantes, et les mots acceptés.
2. **Remplissez-le**, une ligne par élève.
3. **Vérifiez le fichier** : rien n'est enregistré, la page liste les
   lignes à corriger, ou annonce ce que l'import ferait (élèves créés,
   déjà présents, inscriptions, parents rattachés).
4. **Importez**.

## Les colonnes

| Colonne              | À savoir                                                                                                                                                                                       |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nom, Prénom          | Obligatoires.                                                                                                                                                                                  |
| Sexe                 | Masculin ou Féminin. Facultatif.                                                                                                                                                               |
| Date de naissance    | **Obligatoire**, en jour/mois/année (25/03/2010). Elle distingue deux homonymes et permet de réimporter un fichier sans doublon.                                                               |
| Lieu de naissance    | Facultatif.                                                                                                                                                                                    |
| Matricule            | Seulement si l'école utilise le matricule. Il doit être unique.                                                                                                                                |
| Site, Classe         | Facultatifs. La classe est celle de l'année en cours, écrite comme dans ERA. Le site n'est utile que si deux sites ont une classe du même nom. Sans classe, l'élève est créé sans inscription. |
| Parent 1 et Parent 2 | Nom, lien (Père, Mère, Tuteur légal ou Autre), téléphone, e-mail. Un parent a besoin au moins d'un nom.                                                                                        |

Les colonnes sont reconnues par leur **titre** : ne les renommez pas, mais
vous pouvez les déplacer ou en ajouter d'autres, qui sont ignorées.

## Ce que fait l'import

- **Tout ou rien.** Le fichier est vérifié en entier : une date illisible,
  une classe inconnue ou pleine, un doublon dans le fichier, un e-mail
  invalide… et rien n'est importé. Chaque ligne à corriger est listée (les
  trente premières).
- **Les élèves déjà dans ERA** (même nom, même prénom, même date de
  naissance) ne sont ni modifiés ni recréés. Ils sont seulement inscrits
  dans la classe de leur ligne s'ils n'ont pas encore d'inscription cette
  année. Leurs parents ne sont pas touchés.
- **Une classe pleine est refusée**, en comptant les élèves du fichier. Pour
  dépasser une capacité, inscrivez l'élève à la main en indiquant le motif.
- **Les parents** sont retrouvés par leur adresse e-mail, ce qui rattache
  frères et sœurs au même compte. Le premier parent de la ligne est le
  contact principal.
- **Sans e-mail**, le parent reçoit une adresse provisoire, jamais utilisée
  pour écrire. Deux lignes ne partagent un parent sans e-mail que si son nom
  **et** son téléphone sont les mêmes ; sinon, chaque élève a son parent.
  Complétez les adresses ensuite depuis la page [Parents](/guide/secretariat/parents).
- **Aucun e-mail n'est envoyé.** Les invitations se font ensuite, depuis la
  page Parents.
