---
layout: doc
---

# Pilotage

La page **Pilotage** donne les chiffres de l'établissement — effectifs,
résultats, assiduité, finances — et permet de les regarder d'aussi près que
nécessaire : un site, un niveau, une classe. Elle s'ouvre depuis l'espace
**Direction** du menu, ou depuis **Accueil** pour un administrateur.

Elle fait partie du module **Pilotage**, comme les profils de
[direction](/guide/direction/).

## Choisir ce que l'on regarde

L'**année** est celle choisie dans l'en-tête de l'application, comme sur les
autres écrans de consultation. La page ajoute trois filtres, du plus large au
plus fin :

1. le **site** ;
2. le **niveau** (6e, 5e…) ;
3. la **classe**.

Changer un filtre remet à zéro ceux qui sont plus fins que lui : choisir un
autre site efface le niveau et la classe.

::: info Direction de site
Une direction de site ne voit que ses sites. Si elle n'en dirige qu'un, il
est déjà choisi et le filtre de site n'apparaît pas ; son nom figure sous le
titre. Si elle en dirige plusieurs, elle les voit ensemble, puis site par
site.
:::

## Les chiffres

| Scolarité           | Finances               |
| ------------------- | ---------------------- |
| Élèves inscrits     | Montant dû             |
| Résultats moyens    | Montant encaissé       |
| Taux d'absentéisme  | Taux de recouvrement   |
| Occupation internat | Montant décaissé       |
|                     | Flux de trésorerie net |

Ce sont les mêmes indicateurs que sur le
[tableau de bord](/guide/admin/tableau-de-bord), calculés de la même façon.

Les **dépenses** et l'**internat** appartiennent à un site, pas à un niveau ni
à une classe : dès qu'un niveau ou une classe est choisi, ces chiffres
affichent « — », et une ligne sous les indicateurs le rappelle.

## Descendre d'un cran

Le tableau sous les chiffres détaille le périmètre choisi un cran plus
finement :

- tout l'établissement → **par site** ;
- un site → **par niveau** ;
- un niveau → **par classe**.

Cliquez sur le nom d'une ligne pour descendre : le filtre se met à jour et le
tableau détaille le cran suivant. Pour une classe seule, il n'y a plus rien à
détailler.

## Mois par mois

Deux graphiques suivent l'année depuis la rentrée jusqu'au mois en cours :

- **encaissements et décaissements** de chaque mois — les décaissements
  disparaissent sous le site, pour la même raison que plus haut ;
- **taux d'absentéisme** de chaque mois, à partir des appels faits.

Un graphique sans aucune donnée (par exemple avant les premiers appels)
l'indique simplement.

## Classes en sureffectif

La dernière section liste les élèves affectés à une classe déjà pleine, dans
le périmètre choisi : la classe et son site, l'effectif atteint
(`31/30`), s'il s'agissait d'une admission ou d'une mobilité, le **motif**
saisi, l'élève, la personne qui a forcé l'affectation et la date. Voir
[Direction → Classes en sureffectif](/guide/direction/#classes-en-sureffectif).

## Exporter

**Exporter le tableur** télécharge un fichier CSV avec le tableau affiché et
la ligne **Total** du périmètre choisi — les mêmes filtres que la page.
