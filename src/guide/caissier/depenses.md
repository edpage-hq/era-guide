---
layout: doc
---

# Dépenses

La page **Dépenses** vous permet de soumettre une demande de dépense pour
l'établissement — par exemple un achat de matériel — et de suivre son
état jusqu'à la décision d'un administrateur.

## Enregistrer une dépense

1. Cliquez sur **Nouvelle dépense** en haut de la page **Dépenses**.
2. Choisissez le **Site** concerné par la dépense.
3. Indiquez le **Montant**.
4. Décrivez la dépense dans le champ **Description**.
5. Cliquez sur **Soumettre la demande**.

Dès la soumission, les administrateurs de l'établissement sont notifiés
automatiquement qu'une dépense attend leur décision — vous n'avez rien
d'autre à faire.

::: info
Soumettre une dépense enregistre uniquement une demande de validation :
cela ne débite aucun compte et n'est pas relié à un dossier de
facturation en particulier.
:::

## Suivre l'état d'une dépense

La liste de la page **Dépenses** affiche, pour chaque demande, le site,
la description, le montant, qui l'a demandée et son statut :

| Statut     | Signification                                                |
| ---------- | ------------------------------------------------------------ |
| En attente | La demande n'a pas encore été examinée par un administrateur |
| Approuvé   | La dépense a été approuvée                                   |
| Refusé     | La dépense a été refusée, avec un motif consigné             |

Vous pouvez filtrer cette liste par statut pour retrouver rapidement une
dépense en attente ou déjà décidée. La décision elle-même (approuver ou
refuser) est réservée aux comptes administrateur — vous ne verrez donc
pas de bouton d'action sur vos propres demandes ni sur celles de vos
collègues.

Une fois une dépense **approuvée**, elle apparaît automatiquement comme
décaissement dans l'[export comptable SYSCOHADA](/guide/caissier/export-comptable).
