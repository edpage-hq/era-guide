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
avec une recherche par nom/e-mail, un filtre par rôle, et le statut
vérifié/non vérifié et actif/inactif de chacun.

Pour créer un utilisateur :

1. Cliquez sur **Nouvel utilisateur**.
2. Renseignez le **Nom**, l'**Adresse e-mail**, le **Mot de passe** et sa
   confirmation.
3. Choisissez le **Rôle** : Utilisateur, Administrateur, Enseignant,
   Secrétariat, Caisse, Vie scolaire, Gestionnaire internat, Infirmerie ou
   Gestionnaire documentaire — et, si l'établissement a le module
   Pilotage, **Direction de site** ou **Direction générale**.
4. Pour une **Direction de site**, cochez le ou les **Sites dirigés**
   (au moins un).
5. Cliquez sur **Créer l'utilisateur**.

::: tip Les profils de direction
Ils vont à ceux qui dirigent sans saisir : directeur de campus, chef
d'établissement. Ils voient les demandes à valider de leurs sites, pas les
écrans opérationnels. Un compte n'a qu'un rôle : si le chef
d'établissement administre aussi l'application, laissez-le
Administrateur, qui peut déjà tout valider. Voir [Direction](/guide/direction/).
:::

Depuis la liste, chaque compte propose :

- **Modifier** — changer le nom, l'e-mail, le rôle, ou définir un nouveau
  mot de passe (laissez le champ vide pour conserver l'actuel).
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

| Champ               | Détail                                          |
| ------------------- | ----------------------------------------------- |
| Compte du personnel | choisi parmi les comptes utilisateurs existants |
| Poste               | intitulé libre                                  |

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

Une demande peut aussi être traitée directement depuis un lien reçu par
notification, qui ouvre un écran d'examen simplifié avec les mêmes actions
**Approuver** / **Refuser**.
