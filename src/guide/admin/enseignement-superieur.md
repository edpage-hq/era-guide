---
layout: doc
---

# Enseignement supérieur : filières et maquettes

Si votre établissement délivre des diplômes du supérieur (licence, master,
doctorat), ERA organise ses formations selon le système LMD : des
**filières**, enseignées à certains **niveaux** (L1, L2, L3…), dont la
**maquette** répartit les crédits en **unités d'enseignement (UE)**
composées d'**éléments constitutifs (EC)**.

L'espace s'ouvre par **Supérieur → Filières**. Il apparaît si votre licence
comprend l'enseignement supérieur.

## Avant de commencer

Les filières vivent dans un **département de type « Université »**, avec ses
niveaux. Créez-les d'abord dans le paramétrage scolaire :

1. **Paramétrage → Départements** : un département de type _Université_, par
   exemple « Faculté des sciences ».
2. **Paramétrage → Niveaux** : ses niveaux, dans l'ordre (L1, L2, L3, M1,
   M2).

## Créer une filière

Depuis **Filières**, le bouton **Nouvelle filière** demande :

- le **département** et le **nom** de la filière, avec un code facultatif
  (« INFO ») ;
- le **diplôme** : licence, master ou doctorat ;
- le **rythme** : semestriel par défaut, trimestriel ou annuel ;
- les **crédits par an**, 60 par défaut. Ils se répartissent à parts égales
  entre les périodes : 30 par semestre en rythme semestriel ;
- les **niveaux enseignés** : L1 à L3 pour une licence, L3 seule pour une
  licence professionnelle ;
- ses **responsables de filière**.

Le rythme et le département ne changent plus une fois la maquette commencée,
et une filière qui a déjà une maquette ou des promotions ne peut pas être
supprimée.

## Les responsables de filière

Un responsable de filière tient la maquette de **sa** filière, et de
celle-là seulement. Ce n'est pas un rôle à part : un enseignant ou un membre
du personnel garde son rôle habituel et reçoit en plus l'espace
**Supérieur**, limité aux filières dont il a la charge. La création et la
modification des filières restent réservées à l'administrateur.

## Construire la maquette

Le bouton **Maquette** d'une filière ouvre sa maquette pour une année
universitaire, choisie en haut de la page. Elle est présentée niveau par
niveau, puis période par période.

1. **Ajouter une UE** dans la période voulue : un nom, un code facultatif,
   et si elle est **optionnelle** (proposée au choix).
2. Dans l'UE, **Ajouter un EC** : son nom, ses **crédits**, son
   **coefficient** (par défaut égal aux crédits) et son volume horaire en
   CM, TD et TP.

Les crédits sont portés par les EC : ceux d'une UE sont la somme de ses EC,
ils ne peuvent donc jamais se contredire.

::: tip Le compteur de crédits
Chaque période affiche ses crédits face à ce qu'elle doit porter, par
exemple **28 / 30 crédits**. Il passe au vert quand le compte y est. Les UE
optionnelles sont comptées à part : elles s'ajoutent à l'offre sans entrer
dans ce que tout étudiant doit valider.
:::

Les flèches réordonnent les UE d'une période et les EC d'une UE.

## Une maquette par année

Chaque année universitaire a sa propre maquette. Modifier celle de cette
année ne change jamais ce qu'a suivi une promotion précédente.

Une nouvelle année démarre vide. ERA vous propose alors de **reprendre la
maquette de l'année précédente** en un clic : elle est copiée telle quelle,
vous l'ajustez ensuite. L'ancienne reste intacte, et une année qui a déjà
une maquette n'est jamais écrasée.

Quand une année scolaire est **clôturée**, sa maquette l'est aussi : elle
reste consultable mais ne peut plus être modifiée.

## Les promotions

Une **promotion** (par exemple « L1 Informatique 2026-2027 ») est une classe
d'un département universitaire. Lorsque vous créez une classe dans un tel
département, ERA demande la **filière** qu'elle suit, puis son **niveau**,
choisi parmi ceux de la filière.
