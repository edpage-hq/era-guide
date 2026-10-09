---
layout: doc
---

# Conservation

Chaque type de document a une **durée de conservation**, réglée dans les
[Types de documents](/guide/gestion-documentaire/types-de-documents). Une
fois cette durée écoulée, ERA **archive** le document de lui-même. Il ne le
**détruit jamais** de lui-même : la destruction est proposée, puis
approuvée par un administrateur.

## Quand un document est archivé

La durée se compte à partir de la **date du document** (celle qu'il
porte), ou, à défaut, du jour où il a été déposé. Par exemple, un dossier
d'inscription daté du 2 septembre 2019 et conservé 5 ans est archivé à
partir du 2 septembre 2024.

ERA vérifie chaque nuit les documents à archiver. Ne sont archivés que les
documents **validés** ou **rejetés** : un document qui attend encore sa
vérification reste où il est. Un type sans durée de conservation garde ses
documents sans limite.

Un document archivé reste dans son dossier, avec l'étiquette **Archivé** :
on l'ouvre comme avant. En revanche, il ne peut plus être supprimé par le
bouton **Supprimer**, même par un administrateur : il ne quitte le dossier
que par une destruction approuvée.

## L'écran Conservation

L'écran **Documents** → **Conservation** est réservé à un administrateur et
au gestionnaire documentaire. Il présente :

- combien de documents seront archivés dans les **90 prochains jours** ;
- la liste **Destruction proposée** : les documents dont quelqu'un a
  proposé la destruction, avec son nom et la date ;
- la liste **Archivés** : les documents archivés, dont personne n'a encore
  proposé la destruction.

Chaque ligne indique le type, la personne concernée, et propose
**Ouvrir** pour relire le document avant de décider.

## Proposer une destruction

1. Dans **Archivés**, cochez les documents à détruire, ou **Tout
   sélectionner**.
2. Cliquez sur **Proposer la destruction**.

Les documents passent dans **Destruction proposée**, avec l'étiquette du
même nom dans leur dossier. Le tableau de bord des administrateurs
rappelle combien de destructions attendent leur approbation.

## Approuver ou refuser une destruction

Seul un administrateur approuve une destruction.

1. Dans **Destruction proposée**, cochez les documents.
2. Cliquez sur **Détruire**, puis confirmez. Les documents et leurs
   fichiers sont supprimés définitivement.

Pour refuser, cliquez sur **Garder** : les documents restent archivés, et
peuvent être proposés de nouveau plus tard. Le gestionnaire documentaire
peut aussi retirer ainsi une proposition qu'il a faite.

Chaque étape (archivage, proposition, destruction, refus) est inscrite au
[journal d'activité](/guide/admin/demo-et-journal), avec la personne qui
l'a faite.
