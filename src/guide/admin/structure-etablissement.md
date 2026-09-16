---
layout: doc
---

# Structure de l'établissement

Cette section regroupe toute la configuration de base d'ERA : c'est ce que
vous mettez en place en début d'année, avant que le personnel et les élèves
puissent commencer à travailler dans l'app. L'ordre logique est
généralement : année scolaire → sites → départements → niveaux → classes →
matières → matières par département → types d'évaluation → périodes scolaires →
compétences (si besoin).

## Années scolaires

**Paramétrage scolaire → Années scolaires** liste les années scolaires de
votre établissement, avec le nombre de classes de chacune. Une seule année est
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

### Clôturer une année ou une période

Une fois l'année ou le trimestre terminé, clôturez-le pour éviter les
saisies par inadvertance : un enseignant qui rouvre un vieux lien ne
modifiera plus les notes d'un trimestre déjà remis aux familles.

La colonne **État** de **Années scolaires** et de **Périodes scolaires**
porte les actions :

- **Clôturer** — disponible une fois la date de fin passée. Les notes,
  présences, bulletins, cahiers de textes, observations de compétences et
  incidents de la période passent en lecture seule, pour tout le monde.
  Les écrans concernés affichent un message et leur bouton
  **Enregistrer** est désactivé.
- **Rouvrir** — pour une correction ponctuelle. Vous indiquez un motif et
  une durée (48 heures par défaut, une semaine au maximum) : la période se
  referme toute seule à l'échéance, personne n'a à y penser. Le motif et
  l'auteur sont enregistrés dans le [journal d'activité](/guide/admin/demo-et-journal).
- **Annuler la clôture** — si la clôture a été faite par erreur. La
  période redevient modifiable sans limite de temps.

Clôturer une année clôt tout ce qu'elle contient, y compris les jours
situés entre deux trimestres (vacances, rattrapages). Une période rouverte
reste modifiable même si son année est close.

::: tip La caisse n'est jamais gelée
La clôture ne concerne que le pédagogique. Les paiements, les remises et
les dépenses restent possibles sur une année close : un établissement
encaisse presque toujours des arriérés après la fin des cours.
:::

### Préparer l'année suivante

Avant la rentrée, inutile de recréer toutes les classes et les grilles de
frais à la main : reprenez-les d'une année précédente.

1. Créez la nouvelle année scolaire (ex. « 2027-2028 »), sans la définir
   comme actuelle.
2. Sur sa ligne, cliquez sur **Préparer**.
3. Dans **Reprendre depuis**, choisissez l'année à copier : l'année
   précédente est proposée par défaut.
4. Vérifiez l'aperçu des classes et des grilles de frais, cochez ce que
   vous voulez copier.
5. Cliquez sur **Copier dans 2027-2028**.

Sont copiés : le nom, le site, le département, le niveau, la série,
l'effectif et le modèle de bulletin de chaque classe, et les grilles de
frais avec tous leurs frais. Vous ajustez ensuite les montants ou les
classes qui changent.

Ne sont **pas** copiés : les élèves, les professeurs principaux, les
affectations d'enseignants et les emplois du temps, qui changent d'une
année à l'autre.

Ce que la nouvelle année contient déjà est laissé tel quel et marqué
**Déjà présente** : une classe du même nom sur le même site, une grille de
frais pour le même site et le même département. Vous pouvez donc relancer
la copie sans créer de doublon. L'année en cours ne change pas : c'est vous
qui basculez avec **Définir comme actuelle** le moment venu. Une année
clôturée ne peut pas être préparée.

## Sites

Si votre établissement a plusieurs campus, **Paramétrage scolaire → Sites**
vous permet de les gérer. Un site a deux champs : **Nom** et
**Adresse**. Chaque département, classe, grille de frais et employé est
ensuite rattaché à un site — si vous n'avez qu'un seul campus, créez un
unique site et rattachez-y tout le reste.

Pour créer un site : allez dans **Paramétrage scolaire → Sites**, cliquez sur
**Nouveau site**, renseignez le nom (et l'adresse, facultative), puis
**Enregistrer**.

### Logo du site

Une fois le site créé, sa page **Modifier** propose un **logo du site**,
sous le formulaire nom/adresse. Ce logo s'imprime, à la place du logo de
l'établissement, sur :

- les **bulletins** des classes rattachées à ce site ;
- les **reçus de paiement** des élèves inscrits dans une classe de ce site.

Les sites qui n'ont pas de logo propre continuent d'utiliser celui des
[paramètres de l'application](/guide/admin/parametres-application) — vous
n'avez donc rien à faire si tous vos campus partagent la même identité.

Seul le logo change : le menu et la page d'accueil publique gardent le logo
de l'établissement, et l'adresse, le téléphone et l'e-mail imprimés sur les
reçus restent ceux des paramètres de l'application.

Formats acceptés : PNG, JPG, WebP ou SVG, 2 Mo maximum. Le bouton
**Retirer** supprime le logo du site et ramène celui de l'établissement.
Les bulletins et reçus déjà générés ne sont pas réécrits : le changement
s'applique aux documents produits ensuite.

## Départements

Un département correspond à un niveau ou une filière (ex. « Maternelle »,
« Collège », « Terminale BI »). **Paramétrage scolaire → Départements** liste
les départements de l'établissement avec les sites où chacun est actif.

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

## Niveaux

Un niveau, c'est ce qu'une classe enseigne, quelle que soit l'année : « 6e »,
« 1ère », « Terminale ». Plusieurs classes parallèles partagent le même niveau
(1ère C et 1ère D sont toutes deux en « 1ère »). Les niveaux préparent le
passage en classe supérieure : ils disent où vont les élèves admis.

**Paramétrage scolaire → Niveaux** présente les niveaux département par
département, dans leur ordre. Les flèches **↑** et **↓** changent cet ordre.
Chaque niveau affiche son niveau suivant et le nombre de classes qui
l'utilisent.

Pour créer un niveau :

1. Cliquez sur **Nouveau niveau**.
2. Renseignez les champs ci-dessous.
3. Cliquez sur **Enregistrer**. Le niveau s'ajoute à la fin de son département.

| Champ                             | Détail                                                                                                  |
| --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Département                       | —                                                                                                       |
| Nom                               | ex. « 6e », « 1ère », « Terminale » ; unique dans le département                                        |
| Niveau suivant                    | le niveau où vont les élèves admis ; il peut être dans un autre département (3e → Lycée · 2nde)         |
| Dernier niveau de l'établissement | les élèves admis quittent l'établissement après ce niveau ; il n'a donc pas de niveau suivant           |
| Année d'examen                    | le passage dépend d'un examen national (CM2, 3e, Terminale) : aucune décision ne sera proposée d'office |

Un niveau sans niveau suivant et qui n'est pas le dernier affiche
**Niveau suivant non défini** : pensez à le compléter. Un niveau utilisé par
des classes ne peut être ni supprimé, ni déplacé dans un autre département.

::: tip Créez les niveaux dans n'importe quel ordre
Le niveau suivant se choisit parmi les niveaux existants : commencez par le
plus haut (Terminale, puis 1ère, puis 2nde) pour pouvoir relier chacun au
suivant au fur et à mesure, puis rangez-les avec les flèches.
:::

## Classes

**Paramétrage scolaire → Classes** liste les classes, avec des filtres par
site, département et année scolaire, et le nombre d'élèves inscrits (sur
l'effectif maximum si vous en avez défini un).

Pour créer une classe :

1. Cliquez sur **Nouvelle classe**.
2. Renseignez les champs de la section « Structure » ci-dessous.
3. Renseignez, si besoin, les champs de la section « Options » ci-dessous.
4. Cliquez sur **Enregistrer**.

Section « Structure » :

| Champ          | Détail                                                                            |
| -------------- | --------------------------------------------------------------------------------- |
| Nom            | —                                                                                 |
| Site           | —                                                                                 |
| Département    | —                                                                                 |
| Niveau         | facultatif ; au choix parmi les niveaux du département, voir [Niveaux](#niveaux)  |
| Série          | facultatif ; ex. « C », « D », « A4 », pour distinguer des classes du même niveau |
| Année scolaire | —                                                                                 |

Section « Options » (facultatifs) :

| Champ                | Détail                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Effectif             | limite de places ; laissez vide pour « Pas de limite »                                                                   |
| Professeur principal | choisi parmi les enseignants existants                                                                                   |
| Modèle de bulletin   | Classique, Compact ou Traditionnel (à la française) ; laissez vide pour utiliser le modèle par défaut de l'établissement |

Depuis la liste des classes, chaque ligne propose aussi des accès rapides
vers **Emploi du temps** et **Bulletins** de cette classe (voir les guides
dédiés) — pas besoin de repasser par le menu.

## Matières

**Paramétrage scolaire → Matières** est le catalogue global des matières de l'établissement
(ex. « Mathématiques », « Anglais »). Une matière n'a qu'un nom ; c'est son
rattachement à un département (voir ci-dessous) qui définit son coefficient
et son barème.

Pour créer une matière : **Paramétrage scolaire → Matières**, **Nouvelle matière**,
renseignez le nom, **Enregistrer**.

## Matières par département

**Paramétrage scolaire → Matières par département** rattache une matière du catalogue à un
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

**Paramétrage scolaire → Types d'évaluation** définit les catégories d'évaluation
utilisées par les enseignants (devoir, composition, interrogation...) et le
poids de chacune dans le calcul de la moyenne d'une matière.

Pour créer un type : **Paramétrage scolaire → Types d'évaluation**, **Nouveau type
d'évaluation**, renseignez le **Nom** et le **Poids** (ex. 1 pour un devoir,
2 pour une composition), **Enregistrer**.

## Périodes scolaires

**Paramétrage scolaire → Périodes scolaires** définit les périodes de notation
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

**Paramétrage scolaire → Compétences** ne concerne que les départements qualitatifs
(crèche, maternelle) : au lieu de notes chiffrées, les enseignants y
observent des compétences (ex. « Reconnaît les couleurs »).

Pour créer une compétence : **Paramétrage scolaire → Compétences**, **Nouvelle
compétence**, choisissez le **Département** qualitatif concerné, renseignez
le **Nom**, **Enregistrer**.
