---
layout: doc
---

# Gestion documentaire

Le module **Gestion documentaire** range les documents de l'établissement
dans des dossiers : celui de chaque élève, celui de chaque employé, et
celui de l'établissement lui-même (procès-verbaux, règlements…). Chaque
document est classé sous un **type** du catalogue (acte de naissance,
dossier médical, contrat de travail…), qui décide qui peut le consulter et
qui peut le valider.

Le **Gestionnaire documentaire** est le profil dédié à ce module : il
dépose, classe et vérifie les documents, et tient le catalogue des types.
Il n'a accès à aucune fonction académique (notes, bulletins, paiements).
D'autres profils utilisent aussi le module, chacun pour les types qui le
concernent : le secrétariat pour les pièces d'inscription, l'infirmerie
pour les dossiers médicaux, la caisse pour les factures et reçus. Les
pages de l'espace **Documents** ne montrent à chacun que les types qui lui
sont ouverts.

::: info Module sur licence
L'espace **Documents** n'apparaît que si l'établissement a activé le module
Gestion documentaire.
:::

## La page Documents

La page **Documents** réunit deux choses :

- **Ouvrir un dossier** : tapez le nom d'un élève ou d'un employé, puis
  cliquez sur **Rechercher**. Cliquez sur une personne pour ouvrir son
  dossier. Seules les personnes dont vous pouvez consulter au moins un type
  de document sont proposées.
- **Documents déposés** : la liste des documents, filtrée par défaut sur
  ceux **À vérifier** (déposés ou en vérification). Changez le filtre pour
  voir les documents validés, rejetés, ou tous ; choisissez un type pour ne
  voir que celui-là. Le champ **Rechercher dans les documents** retrouve un
  document par son intitulé, le nom de son fichier ou ses notes. Chaque ligne indique le type et la personne
  concernée : cliquez sur son nom pour ouvrir son dossier.

Le bouton **Documents de l'établissement** ouvre le dossier de
l'établissement, quand vous consultez au moins un type qui s'y range.

## Le dossier d'une personne

Le dossier liste, type par type, tous les types de documents que vous
pouvez consulter pour cette personne, avec les documents déposés sous
chacun. Un type sans document affiche **Aucun document** : ce qui manque se
voit aussi clairement que ce qui est là. Le haut de la page indique combien
de types n'ont encore aucun document.

Un administrateur ouvre aussi ce dossier depuis la fiche d'un élève ou d'un
employé, avec le bouton **Dossier documentaire**.

## Les fichiers des autres modules {#les-fichiers-des-autres-modules}

Le dossier montre aussi, sous leur type, les fichiers que les autres
modules d'ERA conservent déjà, sans les déplacer ni les copier :

| Fichier                                       | Type de documents                      | Dossier       |
| --------------------------------------------- | -------------------------------------- | ------------- |
| Pièces jointes à une candidature approuvée    | Dossier de candidature                 | Élève         |
| Bulletins publiés                             | Bulletin                               | Élève         |
| Reçus de paiement                             | Facture ou reçu                        | Élève         |
| Justificatifs d'absence envoyés               | Justificatif d'absence                 | Élève         |
| Procès-verbaux de conseil de discipline       | Procès-verbal de conseil de discipline | Élève         |
| Relevés de notes publiés (supérieur)          | Relevé de notes                        | Élève         |
| Attestations de réussite (supérieur)          | Attestation                            | Élève         |
| Contrats de travail joints à la fiche employé | Contrat de travail                     | Employé       |
| Justificatifs joints aux dépenses             | Justificatif de dépense                | Établissement |

Ces fichiers portent l'étiquette du module qui les conserve (**Bulletins**,
**Caisse**, **Vie scolaire**…) et le bouton **Ouvrir**. Ils ne passent pas
par la vérification : ils se gèrent depuis leur module, comme avant. Les
relevés de notes et attestations sont produits au moment où vous les
ouvrez, à partir de ce que le jury a publié.

Qui les voit dépend de leur type dans le catalogue : par exemple, par
défaut, le secrétariat voit les bulletins et les reçus, mais pas les
procès-verbaux de conseil de discipline, réservés au gestionnaire et à la
vie scolaire. Si l'établissement supprime un de ces types, ses fichiers
n'apparaissent plus dans les dossiers.

## Déposer un document

1. Dans le dossier, cliquez sur **Déposer** à côté du type concerné.
2. Choisissez le **Fichier** : un PDF ou une image (JPG, PNG, WebP), de
   10 Mo au plus.
3. Renseignez si besoin un **Intitulé** (par exemple « Acte de naissance
   n° 1234 »), la **Date du document** (celle qu'il porte) et des **Notes**.
4. Si vous pouvez valider ce type, la case **Je l'ai vérifié : le valider
   tout de suite** est cochée : le document est validé dès le dépôt. C'est le
   cas habituel au guichet, quand vous avez l'original sous les yeux.
   Décochez-la pour le laisser à vérifier.
5. Cliquez sur **Déposer**.

## Vérifier un document

Un document déposé passe par ces statuts :

| Statut              | Ce qu'il signifie                                                         |
| ------------------- | ------------------------------------------------------------------------- |
| **Déposé**          | Le document attend d'être vérifié                                         |
| **En vérification** | Quelqu'un l'a pris en main : les autres voient qu'il est en cours         |
| **Validé**          | Le document a été vérifié et accepté                                      |
| **Rejeté**          | Le document a été refusé ; le motif est affiché, pour qu'il soit refourni |

Si vous pouvez valider le type, chaque document en attente propose :

- **Ouvrir** — affiche le fichier dans un nouvel onglet ;
- **Prendre en vérification** — le passe à **En vérification** à votre
  nom ;
- **Valider** — l'accepte ;
- **Rejeter** — le refuse : indiquez le **motif du rejet**, obligatoire. Il
  reste affiché sous le document.

Le [tableau de bord](/guide/prise-en-main) rappelle combien de documents
attendent votre vérification, pour les seuls types que vous pouvez valider.

Une fois validé ou rejeté, un document ne change plus de statut. Pour
remplacer un document rejeté, déposez-en un nouveau.

## Supprimer un document

Un administrateur ou le gestionnaire documentaire peut supprimer tout
document qu'il consulte. Celui qui a déposé un document peut le retirer
tant que personne ne l'a pris en vérification. La suppression efface le
fichier définitivement et est inscrite au journal d'activité.

## Documents confidentiels

Un type marqué **Confidentiel** (le dossier médical, le contrat de travail
au départ) n'est ouvert qu'aux profils que son type désigne. Chaque fois
que quelqu'un ouvre un de ses documents, ERA l'inscrit au
[journal d'activité](/guide/admin/demo-et-journal) avec l'action
**Consulté**, la personne et l'adresse depuis laquelle elle l'a ouvert.

Pour régler qui consulte et valide chaque type, voir
[Types de documents](/guide/gestion-documentaire/types-de-documents).
