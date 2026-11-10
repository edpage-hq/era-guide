---
layout: doc
---

# Frais et tarification

Cette section couvre la définition des montants dus par les familles
(grilles de frais) et les remises que vous pouvez accorder au cas par cas.
L'encaissement des paiements eux-mêmes est le travail quotidien de la
caisse — vous n'intervenez ici que sur la tarification et les remises.

## Grilles de frais

**Paramétrage scolaire → Grilles de frais** définit la liste des frais dus
par les élèves d'un site, pour une année scolaire. Une grille s'applique à
l'un de ces trois choix (**S'applique à**) :

- **Tout le département** : toutes les classes du département sur ce site ;
- **Un niveau** : toutes les classes de ce niveau (par exemple la 6e) ;
- **Une classe** : une seule classe (par exemple la 6e A).

La grille la plus précise l'emporte : un élève est facturé selon la grille de
sa classe, à défaut celle de son niveau, à défaut celle de son département.
Vous pouvez donc garder une grille de département pour le cas général et
n'ajouter une grille de niveau ou de classe que là où les montants diffèrent.
Un élève sans aucune grille correspondante n'a aucun montant calculé.

Pour créer une grille de frais :

1. Cliquez sur **Nouvelle grille de frais**.
2. Choisissez le **Site**, le **Département** et l'**Année scolaire**.
3. Dans **S'applique à**, choisissez tout le département, un niveau ou une
   classe, puis le niveau ou la classe concernés.
4. Ajoutez un ou plusieurs articles de frais avec **Ajouter un article**,
   en renseignant pour chacun les champs ci-dessous.
5. Cliquez sur **Enregistrer**.

| Champ     | Détail                                                                                                                                  |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Libellé   | ex. « Frais de scolarité », « Cantine »                                                                                                 |
| Montant   | —                                                                                                                                       |
| Optionnel | cochez pour un service au choix (cantine, transport…) : le parent le coche depuis son espace, ou la caisse depuis le dossier de l'élève |
| Catégorie | Générale, Cantine ou Transport                                                                                                          |

Modifier une grille existante permet d'ajouter, changer ou retirer des
articles de frais. Une grille déjà utilisée (un paiement ou un service choisi)
ne peut plus changer de site, de département, d'année ni de cible : créez-en
une nouvelle. Supprimer une grille supprime aussi définitivement tous ses
articles.

::: info Services optionnels
Quand une grille de niveau ou de classe prend le relais d'une grille de
département, les services optionnels déjà choisis par les élèves concernés
passent sur la nouvelle grille s'il y figure un service équivalent (même
catégorie et même libellé). Un service absent de la nouvelle grille est
retiré.
:::

À la préparation d'une nouvelle année, les grilles de niveau et de classe
sont copiées comme les autres ; une grille de classe va à la classe du même
nom sur le même site, et n'est pas copiée si cette classe n'existe pas
encore.

## Remises

Les remises se gèrent non pas sur la grille de frais elle-même, mais sur la
facturation d'un élève précis : **Finances → Facturation**, recherchez
l'élève, cliquez sur **Voir** pour ouvrir son dossier de facturation.

Sur cet écran, vous seul (en tant qu'administrateur — la caisse ne peut
qu'encaisser des paiements) pouvez accorder ou retirer une remise :

Pour accorder une remise :

1. Dans la section « Remises », renseignez le **Libellé** de la remise.
2. Choisissez le **Type** : Montant fixe ou Pourcentage.
3. Renseignez la **Valeur** correspondante et, facultativement, un
   **Motif**.
4. Cliquez sur **Accorder la remise**.

Chaque remise accordée s'affiche avec le nom de l'administrateur qui l'a
créée. Le bouton **Retirer cette remise** (dans la liste des remises) la
supprime définitivement — le **Solde** de l'élève est recalculé
immédiatement.
