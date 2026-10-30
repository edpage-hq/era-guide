---
layout: doc
---

# Personnel et comptes utilisateurs

Cette section couvre deux choses distinctes qu'il ne faut pas confondre :
le **compte utilisateur** (identifiants de connexion + rôle, dans
**Utilisateurs**) et la **fiche employé** (poste, site, contrats, dans la
groupe **Personnel**). Un enseignant, par exemple, a besoin
des deux — un compte pour se connecter, une fiche pour son poste et ses
contrats — mais ce sont deux écrans séparés.

## Créer un compte utilisateur et lui assigner un rôle

**Utilisateurs** (groupe **Administration** du menu) liste tous les comptes de l'établissement,
avec une recherche par nom/e-mail, un filtre par rôle, et pour chacun sa
**Connexion** (Invitation envoyée, Invitation expirée ou Activé) et son
statut actif/inactif.

Pour créer un utilisateur :

1. Cliquez sur **Nouvel utilisateur**.
2. Renseignez le **Nom** et l'**Adresse e-mail**. Aucun mot de passe à
   saisir : c'est la personne qui choisira le sien.
3. Choisissez le **Rôle** : Utilisateur, Administrateur, Enseignant,
   Secrétariat, Caisse, Vie scolaire, Gestionnaire internat, Infirmerie ou
   Gestionnaire documentaire — et, si l'établissement a le module
   Pilotage, **Direction de site** ou **Direction générale**.
4. Pour une **Direction de site**, cochez le ou les **Sites dirigés**
   (au moins un).
5. Cliquez sur **Créer l'utilisateur**.

La personne reçoit aussitôt un e-mail d'invitation avec un bouton
**Activer mon compte**. Ce lien, valable **7 jours**, l'amène sur une page
où elle choisit son mot de passe ; elle est ensuite connectée directement.
Vous ne connaissez donc jamais son mot de passe, et vous n'avez rien à lui
transmettre.

### Suivre et relancer une invitation

La colonne **Connexion** de la liste indique où en est chaque compte :

| Connexion          | Signification                                                        |
| ------------------ | -------------------------------------------------------------------- |
| Invitation envoyée | le lien est parti et reste valable (sa date limite est sur la fiche) |
| Invitation expirée | les 7 jours sont passés sans activation : relancez l'invitation      |
| Activé             | la personne a choisi son mot de passe                                |

Sur la fiche d'un compte pas encore activé (**Modifier**), la section
**Connexion** propose :

- **Renvoyer l'invitation** — envoie un nouvel e-mail, avec un nouveau
  lien valable 7 jours. L'ancien lien ne fonctionne plus.
- **Copier le lien d'invitation** — pour une personne qui ne reçoit pas
  l'e-mail (adresse saturée, message en indésirables) : un nouveau lien
  s'affiche et est copié, à lui transmettre vous-même (WhatsApp, SMS…).
  Ce lien remplace celui de l'e-mail, qui ne fonctionne plus. Ne le
  transmettez qu'à la personne concernée : il donne accès au compte.

Si vous corrigez l'**Adresse e-mail** d'un compte pas encore activé, une
nouvelle invitation part automatiquement vers la bonne adresse.

::: tip Mot de passe oublié
Pour un compte déjà activé, la section **Connexion** propose **Envoyer un
lien de réinitialisation** : la personne reçoit l'e-mail habituel « mot de
passe oublié » et choisit elle-même un nouveau mot de passe. Elle peut
aussi le demander seule, depuis l'écran de connexion.
:::

::: tip Les profils de direction
Ils vont à ceux qui dirigent sans saisir : directeur de campus, chef
d'établissement. Ils voient les demandes à valider de leurs sites, pas les
écrans opérationnels. Un compte n'a qu'un rôle : si le chef
d'établissement administre aussi l'application, laissez-le
Administrateur, qui peut déjà tout valider. Voir [Direction](/guide/direction/).
:::

Depuis la liste, chaque compte propose :

- **Modifier** — changer le nom, l'e-mail ou le rôle, et gérer la
  connexion (voir ci-dessus). Changer le rôle d'un membre du personnel qui est aussi parent d'élève lui laisse son
  accès parent : seul le rôle professionnel est remplacé.
- **Activer** / **Désactiver** — désactiver un compte le déconnecte
  immédiatement partout et bloque toute nouvelle connexion, sans supprimer
  le compte ; le réactiver restaure l'accès.
- **Supprimer** — définitif et irréversible.
- **Exporter en CSV** (en haut de la page) — exporte la liste filtrée
  actuelle.

## Gérer les fiches et contrats du personnel

La page **Employés** (groupe **Personnel**) liste les fiches employé — poste, site, date
d'embauche et statut — distinctes des comptes utilisateurs.

Pour créer une fiche employé :

1. Cliquez sur **Nouvel employé**.
2. Renseignez les champs de la section « Personne » ci-dessous.
3. Renseignez les champs de la section « Affectation » ci-dessous.
4. Cliquez sur **Enregistrer**.

Section « Personne » :

| Champ               | Détail                                                                                   |
| ------------------- | ---------------------------------------------------------------------------------------- |
| Compte du personnel | choisi parmi les comptes du personnel, direction comprise, qui n'ont pas encore de fiche |
| Poste               | intitulé libre                                                                           |

Section « Affectation » :

| Champ           | Détail                            |
| --------------- | --------------------------------- |
| Site            | laissez « Non affecté » si besoin |
| Date d'embauche | —                                 |
| Statut          | Actif ou Inactif                  |

Supprimer une fiche employé supprime aussi définitivement ses contrats.

### Contrats

Depuis la fiche d'un employé (bouton **Modifier** dans la liste), la
section **Contrats** liste ses contrats et permet d'en ajouter un :

1. Cliquez sur **Nouveau contrat**.
2. Renseignez le **Type** (CDI, CDD ou Stage), la **Date de début**, la
   **Date de fin** (facultative), un **Document** à téléverser (PDF, JPG ou
   PNG) et des **Notes** libres.
3. Cliquez sur **Enregistrer**.

Chaque contrat listé propose ensuite **Voir le document** (s'il y en a un)
et **Supprimer** (définitif, supprime aussi le document).

## Affecter les enseignants à des classes et des matières

**Paramétrage scolaire → Affectations enseignants** est ce qui autorise un enseignant à
saisir des notes ou des observations pour une classe donnée : sans
affectation, il n'a accès à rien.

Pour créer une affectation :

1. Cliquez sur **Nouvelle affectation**.
2. Choisissez l'**Enseignant** puis la **Classe**.
3. Si la classe appartient à un département qualitatif (crèche/maternelle,
   notation par compétences), le champ **Matière** disparaît — l'enseignant
   est affecté à toute la classe. Sinon, choisissez la **Matière**
   enseignée.
4. Cliquez sur **Enregistrer**.

Une affectation supprimée retire immédiatement à l'enseignant l'accès à la
saisie des notes correspondante.

## Traiter une mutation de personnel entre sites

Une mutation de personnel déplace un employé d'un site vers un autre, une
fois la demande approuvée.

**Demander une mutation** (depuis la fiche de l'employé, section
« Mutation de site ») :

1. Cliquez sur **Demander une mutation**.
2. Choisissez le **Site de destination** et indiquez un **Motif**.
3. Cliquez sur **Soumettre la demande**.

Sont alors notifiés les autres administrateurs, la direction générale et
la direction de chacun des deux sites. Chacun d'eux peut décider ; la
première décision clôt la demande. Rien n'empêche l'administrateur qui a
soumis la demande de l'approuver lui-même.

**Examiner une demande** — section **Personnel → Mutations de personnel**
liste les demandes, avec un filtre par statut (En attente, Approuvé,
Refusé). Ouvrez une demande via **Examiner** pour voir l'employé, les
sites d'origine et de destination, le motif, puis :

- **Approuver** — applique le transfert.
- **Refuser** — ouvre une boîte de dialogue demandant un motif de refus
  obligatoire.

Une demande peut aussi être traitée depuis la notification reçue, qui
ouvre la page [À approuver](/guide/direction/a-approuver) avec les mêmes
actions **Approuver** / **Refuser**.
