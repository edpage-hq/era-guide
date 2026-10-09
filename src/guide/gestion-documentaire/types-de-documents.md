---
layout: doc
---

# Types de documents

Le catalogue des **Types de documents** décrit les documents que
l'établissement range : dans quel dossier chacun va, qui le consulte, qui
le valide, s'il est confidentiel et combien de temps il est conservé. Il
est tenu par un administrateur ou le gestionnaire documentaire, depuis
l'espace **Documents** → **Types de documents**.

## Le catalogue de départ

ERA démarre avec la liste habituelle, que vous adaptez librement :

| Type                                   | Dossier       | Origine                                    | Consulte et valide                             |
| -------------------------------------- | ------------- | ------------------------------------------ | ---------------------------------------------- |
| Dossier d'inscription                  | Élève         | Importé                                    | Gestionnaire, secrétariat                      |
| Acte de naissance                      | Élève         | Importé                                    | Gestionnaire, secrétariat                      |
| Dossier médical                        | Élève         | Importé (confidentiel)                     | Infirmerie                                     |
| Dossier de candidature                 | Élève         | Importé                                    | Gestionnaire, secrétariat                      |
| Relevé de notes                        | Élève         | Produit par l'établissement                | Gestionnaire, secrétariat                      |
| Attestation                            | Élève         | Produit par l'établissement                | Gestionnaire, secrétariat                      |
| Diplôme                                | Élève         | Produit par l'établissement                | Gestionnaire, secrétariat                      |
| Convention de stage                    | Élève         | Produit par l'établissement                | Gestionnaire, secrétariat                      |
| Facture ou reçu                        | Élève         | Produit par l'établissement                | Gestionnaire, secrétariat ; la caisse consulte |
| Contrat de travail                     | Employé       | Importé (confidentiel)                     | Gestionnaire                                   |
| Procès-verbal                          | Établissement | Produit par l'établissement                | Gestionnaire, secrétariat                      |
| Bulletin                               | Élève         | Produit par l'établissement                | Gestionnaire, secrétariat                      |
| Justificatif d'absence                 | Élève         | Importé                                    | Gestionnaire, vie scolaire (consulte)          |
| Procès-verbal de conseil de discipline | Élève         | Produit par l'établissement (confidentiel) | Gestionnaire, vie scolaire (consulte)          |
| Justificatif de dépense                | Établissement | Importé                                    | Gestionnaire, caisse (consulte)                |

Certains types montrent aussi les fichiers que les autres modules
conservent (bulletins, reçus, justificatifs…) : voir
[Les fichiers des autres modules](/guide/gestion-documentaire/#les-fichiers-des-autres-modules).

Un administrateur consulte et valide toujours tous les types, y compris
les confidentiels. Les noms de départ s'affichent dans la langue de chaque
utilisateur tant que vous ne les renommez pas.

## Créer ou modifier un type

1. Cliquez sur **Nouveau type**, ou sur **Modifier** sur la ligne d'un type.
2. Renseignez le **Nom**.
3. Choisissez le **Dossier** : celui de l'élève, de l'employé, ou les
   documents de l'établissement. Une fois des documents rangés sous un type,
   son dossier ne peut plus changer.
4. Choisissez l'**Origine** : **Importé** pour un document remis par une
   famille ou un employé, **Produit par l'établissement** pour un document
   qu'il délivre.
5. Indiquez la **Durée de conservation** en années, ou laissez vide pour le
   conserver sans limite.
6. Cochez **Document confidentiel** pour que chaque consultation soit
   inscrite au journal d'activité.
7. Pour un type rangé dans le dossier d'un élève, cochez **Visible par la
   famille et l'élève** pour que ses documents validés apparaissent dans
   leur portail. Au départ, c'est le cas des relevés de notes,
   attestations, diplômes, conventions de stage, factures et reçus.
8. Dans **Accès**, cochez pour chaque profil s'il **consulte et dépose** ce
   type, et s'il le **valide**. Qui valide un type le consulte forcément
   aussi : la première case se coche d'elle-même.
9. Cliquez sur **Enregistrer**.

::: tip Réserver un type aux administrateurs
Pour réserver un type à la direction, ne cochez aucun
profil : seuls les administrateurs y auront accès.
:::

## Supprimer un type

Un type sous lequel aucun document n'est rangé peut être supprimé avec
**Supprimer**. Si c'est un type qui montre les fichiers d'un autre module
(les bulletins, par exemple), ces fichiers n'apparaissent plus dans les
dossiers ; ils restent intacts dans leur module. Dès qu'un document y est rangé, le bouton disparaît : le
type reste au catalogue, vous pouvez seulement le renommer ou changer ses
accès.
