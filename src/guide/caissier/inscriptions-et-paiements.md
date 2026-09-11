---
layout: doc
---

# Inscriptions et paiements

Cette page couvre les deux moments où la caisse intervient dans le
parcours d'un élève : la saisie d'un nouveau dossier pour une famille
présente sur site, et le suivi financier d'un élève déjà inscrit — frais,
paiements, remises et échéancier — depuis **Facturation**.

## Saisir un dossier pour une famille sur site

Quand une famille se présente directement à la caisse plutôt que de
remplir le formulaire en ligne, c'est vous qui déposez son dossier de
candidature.

1. Ouvrez **Nouveau dossier** dans le menu de gauche.
2. Renseignez le **Prénom**, le **Nom** et la **Date de naissance** de
   l'élève, puis le **Site** et le **Département** souhaités.
3. Ajoutez au moins un **Parent / tuteur** : prénom, nom, e-mail,
   téléphone (facultatif) et lien de parenté (**Père**, **Mère**,
   **Tuteur légal** ou **Autre**). Cochez **Contact principal** pour la
   personne à contacter en priorité. Utilisez **Ajouter un tuteur** pour
   en saisir plusieurs.
4. Cliquez sur **Envoyer le dossier**.

Ce dossier rejoint la même file d'attente que les candidatures reçues en
ligne, avec le canal **Caisse** — c'est le secrétariat qui l'examine et
décide de l'affecter à une classe. Voir
[Candidatures](/guide/secretariat/candidatures).

::: tip Mode hors ligne
Si votre poste n'a pas de connexion au moment de la saisie, le formulaire
reste utilisable : le dossier est mis en attente et envoyé automatiquement
au retour de la connexion. Vous ne pouvez toutefois pas joindre de
documents hors ligne — ajoutez-les une fois reconnecté. Un bandeau en
haut de la page indique le nombre de dossiers en attente de
synchronisation, avec un bouton **Synchroniser maintenant** dès que vous
êtes de nouveau en ligne.
:::

## Suivre les frais et paiements d'un élève

Une fois qu'un dossier est validé par le secrétariat, l'élève apparaît
dans **Facturation**. La liste est filtrable par nom d'élève et par
année scolaire, et affiche pour chacun le total dû, le total payé et le
solde restant. Cliquez sur **Voir** pour ouvrir le dossier financier
complet d'un élève.

La page de détail affiche quatre chiffres clés : **Total dû**,
**Remise**, **Total payé** et **Solde**.

### Définir les frais dus

Si une grille de frais existe pour le site, le département et l'année
scolaire de l'élève, elle apparaît sous **Articles de frais** : les
articles obligatoires sont listés directement, et les articles
optionnels (par exemple la cantine ou le transport) sont proposés sous
forme de cases à cocher — cochez celles qui s'appliquent à cet élève,
puis cliquez sur **Enregistrer les modifications**.

Si aucune grille de frais n'est configurée pour ce site, ce département
et cette année scolaire, la page vous l'indique — dans ce cas, demandez à
un administrateur de la créer avant de pouvoir facturer l'élève.

### Encaisser un paiement

1. Dans le formulaire **Enregistrer un paiement**, saisissez le
   **Montant**.
2. Choisissez la **Méthode** : Mixx by Yass, Flooz, T-Money, Carte
   bancaire ou Dépôt bancaire.
3. Si une grille de frais existe, indiquez à quel **Article de frais**
   se rattache ce paiement, ou laissez le choix **Somme globale (non
   liée à un article)** pour un versement qui ne correspond à aucun
   article précis.
4. Renseignez la **Référence** (numéro de transaction, de chèque, etc.)
   si vous en avez une, la date à laquelle le paiement a été **payé**, et
   d'éventuelles **Notes**.
5. Cliquez sur **Enregistrer le paiement**.

Le paiement apparaît dans la liste **Paiements** de l'élève, avec un reçu
généré automatiquement — cliquez sur **Télécharger le reçu** sur la ligne
du paiement pour l'imprimer ou le remettre à la famille. Les parents ou
tuteurs de l'élève reçoivent aussi une notification les informant du
paiement et du solde restant.

Pour supprimer un paiement saisi par erreur, cliquez sur **Supprimer**
sur sa ligne puis confirmez — cette action est définitive.

::: tip Mode hors ligne
Un paiement peut être encaissé même sans connexion : il apparaît dans une
section **En attente de synchronisation** jusqu'au retour de la
connexion, puis se synchronise automatiquement (ou via **Synchroniser
maintenant**).
:::

### Mettre en place un échéancier de paiement

Pour étaler les frais d'un élève sur plusieurs versements plutôt que
d'attendre un paiement unique :

1. Dans le bloc **Plan de paiement**, cliquez sur **Ajouter une tranche**
   pour chaque échéance souhaitée.
2. Pour chaque tranche, renseignez un **Libellé** (par exemple « 1ère
   tranche »), un **Montant** et une **Date d'échéance**.
3. Cliquez sur **Enregistrer le plan de paiement**.

Chaque tranche affiche ensuite un statut : **À venir**, **Payée** ou
**En retard**, selon la date d'échéance et les paiements déjà reçus.
Mettre en place un nouveau plan remplace automatiquement l'ancien s'il en
existait un. Pour supprimer un plan sans le remplacer, cliquez sur
**Supprimer** au-dessus du tableau des tranches et confirmez.

### Consulter et appliquer une remise

Les remises accordées à un élève (libellé, montant fixe ou pourcentage,
motif, et qui l'a accordée) sont visibles par tous dans le bloc
**Remises** du dossier financier.

::: warning
Accorder ou retirer une remise est réservé aux comptes administrateur.
Si vous êtes connecté en tant que caisse, vous voyez les remises
existantes mais pas le formulaire **Accorder une remise** — demandez à un
administrateur d'ouvrir ce même dossier pour l'ajouter :

1. Renseignez le **Libellé** de la remise (ce qu'elle représente).
2. Choisissez le **Type** : **Montant fixe** ou **Pourcentage**.
3. Renseignez la **Valeur** correspondante.
4. Indiquez le **Motif** de la remise (facultatif).
5. Cliquez sur **Accorder la remise**.
   :::

Une remise accordée réduit immédiatement le **Total dû** affiché sur la
page.
