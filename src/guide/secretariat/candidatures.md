---
layout: doc
---

# Candidatures

La page **Dossiers à traiter** liste toutes les candidatures déposées
pour une inscription, qu'elles viennent du formulaire public rempli par
une famille (canal **En ligne**) ou d'une saisie faite par la caisse pour
une famille venue sur site (canal **Caisse**). C'est depuis cette page
que vous décidez d'accepter ou de refuser chaque dossier.

Les familles accèdent au formulaire public par le bouton **Inscrire mon
enfant** de la page d'accueil de l'établissement.

::: tip
Consulter la file d'attente est toujours disponible. L'affectation à une
classe (la validation d'un dossier) dépend du module Admissions activé
pour votre établissement — si le bouton **Valider** n'apparaît pas,
contactez votre administrateur.
:::

## Consulter la file d'attente

La page affiche pour chaque dossier le nom de l'élève, le site souhaité,
le département souhaité, le canal et le statut :

| Statut     | Signification                                   |
| ---------- | ----------------------------------------------- |
| En attente | Le dossier n'a pas encore été traité            |
| Validé     | L'élève a été affecté à une classe              |
| Refusé     | Le dossier a été refusé, avec un motif consigné |

Utilisez le champ de recherche pour retrouver un dossier par nom, et le
filtre de statut pour n'afficher que les dossiers en attente, validés ou
refusés. Cliquez sur **Examiner** sur la ligne d'un dossier pour l'ouvrir.

## Examiner un dossier

La page de détail d'un dossier vous montre :

- la **date de naissance** de l'élève, le **site** et le **département**
  souhaités, et le **canal** (En ligne ou Caisse) ;
- si le dossier a été saisi par la caisse, le nom de la personne qui l'a
  **saisi** ;
- la liste des **parents / tuteurs** avec leur nom, e-mail, téléphone et
  lien de parenté ; le contact principal porte une étiquette
  **Contact principal** ;
- la liste des **documents** joints au dossier, avec qui les a ajoutés
  (un membre de l'équipe, ou **Soumis en ligne** si la famille les a
  déposés elle-même via le formulaire public) — cliquez sur
  **Télécharger** pour ouvrir un document.

Si aucun document n'a été joint, la page l'indique clairement.

## Valider un dossier

1. Ouvrez le dossier depuis **Examiner**.
2. Dans le bloc **Affecter à une classe**, choisissez la **classe** dans
   la liste. Chaque classe affiche son année scolaire et son occupation
   actuelle (par exemple `24/30`, ou `∞` si elle n'a pas de capacité
   maximale définie). Les classes de l'année suivante, si elle est déjà
   préparée, sont proposées aussi : un dossier validé en juin peut entrer
   directement dans la classe de la rentrée.
3. Si la classe a atteint sa capacité, vous ne pouvez pas la sélectionner
   normalement : cochez **Forcer l'affectation même si la classe a
   atteint sa capacité** pour l'assigner malgré tout.
4. Cliquez sur **Valider**.

L'élève est alors inscrit dans la classe choisie, pour l'année de cette
classe, et son dossier financier
devient visible pour la caisse dans **Facturation** — voir
[Inscriptions et paiements](/guide/caissier/inscriptions-et-paiements).

### Un élève déjà connu

Si ERA connaît déjà un élève avec les mêmes prénom, nom et date de
naissance (un ancien élève qui revient, par exemple), le bloc **Affecter à
une classe** l'indique avec sa dernière classe. La validation inscrit alors
cet élève existant, sans créer de second dossier : son historique reste au
même endroit. S'il est déjà inscrit pour l'année de la classe choisie, la
validation est refusée.

### Les comptes des parents

À la validation, chaque parent du dossier reçoit un compte ERA, identifié
par son adresse e-mail (majuscules et minuscules ne comptent pas). Un
parent qui a déjà un compte avec cette adresse, pour un autre enfant par
exemple, le garde : l'enfant s'y ajoute, sans nouvel e-mail.

Si un compte parent existe déjà **au même nom mais avec une autre
adresse**, le bloc **Affecter à une classe** le signale, avec les enfants
rattachés à ce compte. Choisissez alors :

- **Créer un compte avec …** (choix par défaut) : c'est un homonyme, ou le
  parent veut un compte séparé ;
- **Rattacher l'enfant au compte existant …** : c'est le même parent. Il
  retrouve tous ses enfants dans le même espace, sans second compte.

En cas de doute, vérifiez auprès de la famille avant de valider.

## Refuser un dossier

1. Ouvrez le dossier depuis **Examiner**.
2. Cliquez sur **Refuser**.
3. Dans la fenêtre de confirmation, indiquez le **Motif de refus** (ce
   champ est obligatoire).
4. Confirmez en cliquant à nouveau sur **Refuser**.

Le motif de refus reste consigné sur le dossier et reste consultable par
la suite.
