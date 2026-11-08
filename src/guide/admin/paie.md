---
layout: doc
---

# Paie

La page **Personnel → Paie** prépare les bulletins de paie du mois. Seuls
les administrateurs la voient, et seulement si votre licence comprend le
module **Ressources humaines**.

Le bulletin reste simple : un salaire de base, plus des primes, moins des
retenues, toutes saisies à la main. ERA ne calcule **pas** les cotisations
sociales ni l'impôt sur le salaire : si vous les retenez, ajoutez-les comme
retenues, avec le montant calculé par votre comptable.

## Avant la première paie : le salaire de base

Chaque employé payé doit avoir un **Salaire de base mensuel** sur sa fiche
(voir [Personnel et comptes utilisateurs](/guide/admin/personnel-utilisateurs#gerer-les-fiches-et-contrats-du-personnel)).
Le champ est facultatif : un employé sans salaire de base n'a pas de
bulletin.

La page Paie liste, sous **Employés sans salaire de base**, les employés
actifs à qui il manque ce montant. **Ouvrir les fiches employé** mène à la
liste pour le compléter.

## Préparer la paie du mois

1. Sous **Préparer une paie**, choisissez le **Mois** (le mois suivant la
   dernière paie est proposé).
2. Cliquez sur **Préparer la paie**.

ERA crée un bulletin pour chaque employé **actif** qui a un salaire de
base. Le bulletin reprend le nom, le poste et le site de l'employé à ce
moment-là, et son salaire de base actuel.

Les primes et retenues du dernier bulletin de chaque employé sont
**reprises** : une prime de transport mensuelle ou une avance remboursée en
plusieurs fois n'est pas à ressaisir. Retirez celles qui ne valent plus pour
ce mois.

Un mois ne se prépare qu'une fois. Pour recommencer, supprimez le brouillon
(voir plus bas).

## Ajuster les bulletins

Tant que la paie est en **Brouillon**, chaque ligne du tableau a un bouton
**Modifier** :

1. Corrigez au besoin le **Salaire de base** de ce mois.
2. Cliquez sur **Ajouter une prime** ou **Ajouter une retenue**, puis
   saisissez le **Libellé** (par exemple « Prime de logement », « Avance sur
   salaire ») et le **Montant**, en FCFA.
3. Retirez une ligne avec l'icône de corbeille.
4. Vérifiez le **Net à payer** affiché en bas, puis cliquez sur
   **Enregistrer**.

Le net à payer est le salaire de base, plus les primes, moins les retenues.
Le tableau affiche, pour chaque employé, le salaire de base, les primes, les
retenues et le net, avec le total du mois.

Modifier le salaire de base d'un bulletin ne change pas la fiche de
l'employé : pour une augmentation durable, mettez aussi la fiche à jour.

## Clôturer la paie

Une fois les salaires versés, cliquez sur **Clôturer la paie** et
confirmez. La paie passe à **Clôturée** :

- les bulletins ne peuvent plus être modifiés ;
- chaque employé peut télécharger le sien dans **Mes bulletins de paie**
  (voir plus bas).

Pour corriger une erreur après la clôture, cliquez sur **Rouvrir** : les
bulletins redeviennent modifiables et disparaissent de l'espace des employés
jusqu'à la prochaine clôture.

Une paie en brouillon peut aussi être **supprimée**, avec tous ses
bulletins. Une paie clôturée doit d'abord être rouverte.

## Imprimer et exporter

Depuis la paie du mois :

| Bouton                     | Contenu                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------- |
| Tous les bulletins (PDF)   | un bulletin par page, à imprimer et faire signer                                            |
| PDF (sur une ligne)        | le bulletin d'un seul employé                                                               |
| État de paie (CSV)         | une ligne par employé : poste, site, salaire de base, primes, brut, retenues, net, et total |
| Écritures comptables (CSV) | les écritures de paie du mois, à reprendre dans votre logiciel comptable                    |

Tant que la paie est en brouillon, les bulletins PDF portent la mention
« Brouillon ».

### Écritures comptables

Les écritures sont datées du dernier jour du mois, dans le journal **PA**.
Pour chaque employé :

- le net à payer : débit **661100** (rémunérations du personnel), crédit
  **422000** (personnel, rémunérations dues) ;
- les retenues, s'il y en a : débit **661100**, crédit **428000**
  (personnel, charges à payer).

Ces comptes suivent le plan SYSCOHADA. Faites-les valider par votre
comptable : pour en changer, contactez edPage.

## Mes bulletins de paie (employés)

Tout membre du personnel qui a une fiche employé trouve ses bulletins dans
**Personnel → Mes bulletins de paie** : le mois, le brut, les retenues et le
net, avec **Télécharger** pour le PDF.

Seuls les mois **clôturés** y apparaissent. Un employé ne voit que ses
propres bulletins.

Si le compte n'est relié à aucune fiche employé, la page l'indique :
l'administration doit créer la fiche.
