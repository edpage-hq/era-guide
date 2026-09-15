---
layout: doc
---

# Démo complète et journal d'activité

Cette page regroupe deux fonctions d'administrateur qui n'ont aucun lien
entre elles : activer une démonstration complète et gratuite d'ERA, et
consulter l'historique des actions effectuées dans l'application.

## Activer la démo complète

**Cette fonction n'apparaît que si votre établissement est un tenant Era
Admission encore en version gratuite** — c'est-à-dire un établissement qui
utilise ERA uniquement pour gérer sa file de candidatures d'admission, sans
avoir encore souscrit de licence pour le reste de l'application. Si votre
établissement a déjà une licence active (ou est déjà en période de démo),
vous ne verrez pas ce bouton.

Quand elle est disponible, l'offre apparaît sur le **Tableau de bord** :

1. Cliquez sur **Activer la démo**.
2. Une boîte de dialogue récapitule la durée (en jours) pendant laquelle
   tous les pôles d'ERA seront débloqués sans engagement.
3. Cliquez sur **Activer la démo** pour confirmer.

Une fois activée, une bannière sur le tableau de bord indique le nombre de
jours restants, puis vous alerte quand la fin approche. Passé le délai,
l'accès repasse en lecture seule jusqu'à l'achat d'une licence.

## Consulter le journal d'activité

**Journal d'activité** (groupe **Administration** du menu) est un historique de qui a créé,
modifié ou supprimé quoi dans l'application, et quand.

Vous pouvez filtrer la liste par :

| Filtre | Détail                                                             |
| ------ | ------------------------------------------------------------------ |
| Acteur | recherche par nom ou e-mail de la personne à l'origine de l'action |
| Entité | type d'enregistrement concerné (élève, classe, paiement...)        |
| Action | Créé, Modifié ou Supprimé                                          |
| Date   | une période « du » / « au »                                        |

Cliquez sur **Voir le détail** sur une ligne pour afficher, dans une boîte
de dialogue, le détail technique des champs modifiés par cette action.

Une limite importante à connaître : les changements de relations
plusieurs-à-plusieurs (par exemple rattacher un tuteur à un élève, ou
attribuer un rôle à un utilisateur) ne sont **pas** capturés dans ce
journal — seules la création, la modification et la suppression directes
d'un enregistrement y apparaissent.
