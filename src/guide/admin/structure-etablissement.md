---
layout: doc
---

# Structure de l'établissement

Cette section regroupe toute la configuration de base d'ERA : c'est ce que
vous mettez en place en début d'année, avant que le personnel et les élèves
puissent commencer à travailler dans l'app. L'ordre logique est
généralement : année scolaire → sites → départements → classes → matières →
matières par département → types d'évaluation → périodes scolaires →
compétences (si besoin).

## Années scolaires

**Structure scolaire → Années scolaires** liste les années scolaires de
votre instance, avec le nombre de classes de chacune. Une seule année est
« En cours » à la fois — c'est celle qui apparaît par défaut dans le tableau
de bord et sur les nouveaux formulaires.

Pour créer une année scolaire :

1. Cliquez sur **Nouvelle année scolaire**.
2. Renseignez les champs ci-dessous.
3. Cliquez sur **Enregistrer**.

| Champ         | Détail            |
| ------------- | ----------------- |
| Libellé       | ex. « 2025-2026 » |
| Date de début | —                 |
| Date de fin   | —                 |

Depuis la liste, le bouton **Définir comme actuelle** bascule l'année en
cours. Supprimer une année scolaire est définitif et irréversible.

## Sites

Si votre établissement a plusieurs campus, **Structure scolaire → Sites**
vous permet de les gérer. Un site n'a que deux champs : **Nom** et
**Adresse**. Chaque département, classe, grille de frais et employé est
ensuite rattaché à un site — si vous n'avez qu'un seul campus, créez un
unique site et rattachez-y tout le reste.

Pour créer un site : allez dans **Structure scolaire → Sites**, cliquez sur
**Nouveau site**, renseignez le nom (et l'adresse, facultative), puis
**Enregistrer**.

## Départements

Un département correspond à un niveau ou une filière (ex. « Maternelle »,
« Collège », « Terminale BI »). **Structure scolaire → Départements** liste
les départements de l'instance avec les sites où chacun est actif.

Pour créer un département :

1. Cliquez sur **Nouveau département**.
2. Renseignez les champs ci-dessous.
3. Cliquez sur **Enregistrer**.

| Champ          | Détail                                                                              |
| -------------- | ----------------------------------------------------------------------------------- |
| Nom            | —                                                                                   |
| Type           | Crèche, Maternelle, Élémentaire, Collège, Lycée, BI ou Université                   |
| Référentiel    | Français ou Togolais — détermine les règles de notation appliquées à ce département |
| Disponible sur | cochez un ou plusieurs sites où ce département est actif                            |

## Classes

**Structure scolaire → Classes** liste les classes, avec des filtres par
site, département et année scolaire, et le nombre d'élèves inscrits (sur
l'effectif maximum si vous en avez défini un).

Pour créer une classe :

1. Cliquez sur **Nouvelle classe**.
2. Renseignez les champs de la section « Structure » ci-dessous.
3. Renseignez, si besoin, les champs de la section « Options » ci-dessous.
4. Cliquez sur **Enregistrer**.

Section « Structure » :

| Champ          | Détail |
| -------------- | ------ |
| Nom            | —      |
| Site           | —      |
| Département    | —      |
| Année scolaire | —      |

Section « Options » (facultatifs) :

| Champ                | Détail                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Effectif             | limite de places ; laissez vide pour « Pas de limite »                                                              |
| Professeur principal | choisi parmi les enseignants existants                                                                              |
| Modèle de bulletin   | Classique, Compact ou Traditionnel (à la française) ; laissez vide pour utiliser le modèle par défaut de l'instance |

Depuis la liste des classes, chaque ligne propose aussi des accès rapides
vers **Emploi du temps** et **Bulletins** de cette classe (voir les guides
dédiés) — pas besoin de repasser par le menu.

## Matières

**Notes → Matières** est le catalogue global des matières de l'instance
(ex. « Mathématiques », « Anglais »). Une matière n'a qu'un nom ; c'est son
rattachement à un département (voir ci-dessous) qui définit son coefficient
et son barème.

Pour créer une matière : **Notes → Matières**, **Nouvelle matière**,
renseignez le nom, **Enregistrer**.

## Matières par département

**Notes → Matières par département** rattache une matière du catalogue à un
département, avec les règles de notation propres à ce département.

Pour créer un rattachement :

1. Cliquez sur **Nouvelle affectation**.
2. Renseignez les champs ci-dessous.
3. Cliquez sur **Enregistrer**.

| Champ                                     | Détail                                                                                                                                                                                                                                                 |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Département                               | —                                                                                                                                                                                                                                                      |
| Matière                                   | —                                                                                                                                                                                                                                                      |
| Coefficient                               | —                                                                                                                                                                                                                                                      |
| Barème                                    | note maximale possible ; 20 par défaut                                                                                                                                                                                                                 |
| Matière de spécialité (choisie par élève) | cochez si cette matière n'est pas suivie par tous les élèves du département mais choisie individuellement (voir [Élèves et tuteurs](/guide/admin/eleves-tuteurs)) ; laissez décoché pour une matière de tronc commun, appliquée automatiquement à tous |

## Types d'évaluation

**Notes → Types d'évaluation** définit les catégories d'évaluation
utilisées par les enseignants (devoir, composition, interrogation...) et le
poids de chacune dans le calcul de la moyenne d'une matière.

Pour créer un type : **Notes → Types d'évaluation**, **Nouveau type
d'évaluation**, renseignez le **Nom** et le **Poids** (ex. 1 pour un devoir,
2 pour une composition), **Enregistrer**.

## Périodes scolaires

**Notes → Périodes scolaires** définit les périodes de notation
(trimestres, semestres...) d'une année scolaire — elles servent à la fois
à la saisie des notes par les enseignants et à la publication des
bulletins.

Pour créer une période :

1. Cliquez sur **Nouvelle période**.
2. Renseignez les champs ci-dessous.
3. Cliquez sur **Enregistrer**.

| Champ          | Détail                                                      |
| -------------- | ----------------------------------------------------------- |
| Année scolaire | —                                                           |
| Nom            | ex. « Trimestre 1 »                                         |
| Date de début  | —                                                           |
| Date de fin    | —                                                           |
| Ordre          | position de cette période parmi les autres de la même année |

## Compétences

**Notes → Compétences** ne concerne que les départements qualitatifs
(crèche, maternelle) : au lieu de notes chiffrées, les enseignants y
observent des compétences (ex. « Reconnaît les couleurs »).

Pour créer une compétence : **Notes → Compétences**, **Nouvelle
compétence**, choisissez le **Département** qualitatif concerné, renseignez
le **Nom**, **Enregistrer**.
