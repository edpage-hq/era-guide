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

| Statut          | Signification                                                                |
| --------------- | ---------------------------------------------------------------------------- |
| En attente      | Le dossier n'a pas encore été traité                                         |
| Admis           | Filière sélective : la commission a admis le candidat, il reste à l'inscrire |
| Liste d'attente | Filière sélective : la commission l'a placé en liste d'attente               |
| Validé          | L'élève a été affecté à une classe                                           |
| Refusé          | Le dossier a été refusé, avec un motif consigné                              |

Utilisez le champ de recherche pour retrouver un dossier par nom, et le
filtre de statut pour n'afficher que les dossiers d'un statut donné. Cliquez sur **Examiner** sur la ligne d'un dossier pour l'ouvrir.

## Examiner un dossier

La page de détail d'un dossier vous montre :

- la **date** et le **lieu de naissance** de l'élève (le lieu est repris
  dans son dossier à l'approbation), le **site** et le **département**
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
validation est refusée. Ses matières de spécialité sont reprises si la
nouvelle classe les propose toujours au choix.

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

## Une candidature à l'université

Quand le département demandé est de type _Université_, le formulaire
change :

- le candidat choisit sa **filière**, son **niveau d'entrée** (L1, ou L3
  pour une admission parallèle) et l'**année universitaire** demandée ;
- il donne **sa propre adresse e-mail** : son compte étudiant sera ouvert
  dessus ;
- les **parents / tuteurs** deviennent facultatifs.

Dans la file d'attente, la filière et le niveau apparaissent sous le
département. Pour valider, la liste ne propose que les **promotions** de
cette filière, de ce niveau et de l'année demandée ; si elle est vide,
créez d'abord la promotion dans **Classes**.

À la validation, ERA inscrit l'étudiant dans la promotion et ouvre son
**compte étudiant** sur l'adresse donnée : il reçoit un lien pour choisir
son mot de passe. Si cette adresse sert déjà à un parent ou à un membre du
personnel, le dossier est validé sans ouvrir de compte, et un message vous
le signale : liez alors un compte depuis la fiche de l'élève.

### Une filière sélective

Si la filière est **sélective**, le dossier passe d'abord par sa
**commission d'admission** (voir
[l'admission sélective](/guide/admin/enseignement-superieur#l-admission-selective)).
Tant que la commission n'a pas admis le candidat, la fiche l'indique et ne
propose pas de l'inscrire. Une fois le candidat **admis**, vous l'inscrivez
comme tout autre dossier. Le tableau de bord vous signale les **candidats
admis à inscrire**.

Un candidat admis ou en liste d'attente qui se désiste peut être refusé
depuis sa fiche. Un dossier déjà validé ne peut plus être refusé.

## Refuser un dossier

1. Ouvrez le dossier depuis **Examiner**.
2. Cliquez sur **Refuser**.
3. Dans la fenêtre de confirmation, indiquez le **Motif de refus** (ce
   champ est obligatoire).
4. Confirmez en cliquant à nouveau sur **Refuser**.

Le motif de refus reste consigné sur le dossier et reste consultable par
la suite.
