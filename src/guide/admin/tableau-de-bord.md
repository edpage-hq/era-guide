---
layout: doc
---

# Tableau de bord

Le tableau de bord est la page d'accueil de tout compte connecté, mais son
contenu dépend de votre rôle. Pour un administrateur, il affiche :

- le bloc **À traiter**, qui regroupe tout ce qui attend votre décision :
  candidatures, transferts de site, justificatifs d'absence, dépenses à
  valider, demandes de congé et mutations du personnel ;
- le bloc **Échéances dépassées**, qui liste les familles en retard sur
  leur échéancier (voir
  [Bien démarrer](/guide/prise-en-main#echeances-depassees)) ;
- le **pilotage** : la photographie chiffrée de l'établissement à l'instant
  où vous ouvrez la page.

Le pilotage est un pôle à part entière. S'il n'a pas été licencié pour
votre établissement, vous arrivez bien sur le tableau de bord, mais sans
les indicateurs décrits ci-dessous.

## Sur quoi portent les chiffres

Tous les indicateurs se lisent pour l'**année scolaire courante** — celle
marquée comme actuelle dans
[Structure de l'établissement](/guide/admin/structure-etablissement).

Si aucune année n'est marquée comme courante, le tableau de bord vous le
dit au lieu d'afficher des chiffres, avec un bouton **Définir l'année
courante** qui mène à l'écran concerné : rien ne peut être calculé tant que
l'année de référence n'est pas définie. C'est le premier réflexe à avoir si
la page semble vide en début d'exercice.

## Les indicateurs

Les indicateurs sont regroupés en deux blocs, **Scolarité** et
**Finances**.

| Indicateur             | Ce qu'il mesure                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------ |
| Élèves inscrits        | L'effectif réellement inscrit sur l'année courante                                               |
| Résultats moyens       | La moyenne générale de l'établissement                                                           |
| Taux d'absentéisme     | La part d'absences relevées sur les présences saisies                                            |
| Occupation internat    | Les lits attribués rapportés aux lits existants. Vide — et non 0 % — pour un site sans aucun lit |
| Montant dû             | Le total facturé aux familles sur l'année                                                        |
| Montant encaissé       | Ce qui a réellement été payé                                                                     |
| Taux de recouvrement   | L'encaissé rapporté au dû                                                                        |
| Montant décaissé       | Les dépenses approuvées de l'établissement                                                       |
| Flux de trésorerie net | L'encaissé moins le décaissé                                                                     |

Deux précisions qui évitent les mauvaises lectures :

- Seuls les paiements **confirmés** alimentent le montant encaissé. Un
  paiement mobile money lancé mais pas confirmé par l'opérateur n'y figure
  pas, et ne gonfle donc jamais le taux de recouvrement.
- Le montant décaissé ne compte que les dépenses **approuvées** — une
  dépense en attente de validation n'est pas encore de la trésorerie
  sortie. Voir [Dépenses](/guide/caissier/depenses).

## Lire les chiffres site par site

Si l'établissement compte plusieurs sites, le bloc **Par site** reprend
sous les indicateurs les mêmes mesures pour chacun d'eux, ce qui permet de
comparer deux campus sans changer de page. Avec un seul site, ce bloc
n'apparaît pas : il répéterait les chiffres du dessus.

Sur téléphone, ce tableau s'affiche sous forme d'une fiche par site plutôt
qu'en colonnes, pour rester lisible.

## Exporter les chiffres

Le bouton **Exporter le tableur** télécharge l'ensemble des indicateurs,
détaillés par site, dans un fichier tableur. C'est le format à utiliser
pour un conseil d'administration ou un reporting mensuel : les chiffres
exportés sont exactement ceux affichés à l'écran au moment de l'export.
