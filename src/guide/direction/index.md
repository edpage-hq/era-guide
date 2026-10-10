---
layout: doc
---

# Direction

Deux profils sont prévus pour celles et ceux qui dirigent l'établissement
sans en faire la saisie au quotidien :

- la **direction de site** — le directeur ou la directrice d'un campus. Elle
  est rattachée à un ou plusieurs sites et décide de ce qui les concerne ;
- la **direction générale** — le chef d'établissement ou le promoteur. Elle
  voit tous les sites et peut décider de tout.

Ces profils font partie du module **Pilotage**. C'est l'administrateur qui
les attribue, depuis
[Personnel et comptes utilisateurs](/guide/admin/personnel-utilisateurs).

::: info Ce que la direction ne voit pas
Une direction n'a pas accès aux écrans opérationnels : caisse, notes,
dossiers de candidature, réglages. Elle voit les demandes qui attendent sa
décision, et la page [Pilotage](/guide/direction/pilotage) avec les
indicateurs de ses sites.
:::

## Votre espace

À la connexion, le **Tableau de bord** liste ce qui attend votre décision,
avec le nombre de demandes en attente. L'espace **Direction** du menu
regroupe la page **Pilotage** et les trois files :

- **Mobilité inter-site** — les transferts d'élèves entre deux sites ;
- **Mutations de personnel** — les changements de site d'un employé ;
- **Dépenses** — les demandes de dépense des sites.

Une direction de site n'y voit que les demandes qui touchent **ses**
sites. La direction générale voit tout.

## Qui décide de quoi

| Demande                           | Direction de site                                          | Direction générale    |
| --------------------------------- | ---------------------------------------------------------- | --------------------- |
| Mobilité d'un élève               | valide la part de son site (départ ou arrivée)             | peut valider les deux |
| Mutation d'un membre du personnel | décide si l'un des deux sites est le sien                  | décide                |
| Dépense                           | décide jusqu'au **seuil** fixé par l'établissement, inclus | décide, sans limite   |

L'administrateur garde toujours la main sur tout.

Un site **sans direction** fonctionne comme avant : le secrétariat y
valide sa part des mobilités, et l'administration décide des mutations et
des dépenses. Il en va de même si le compte de la direction est désactivé.

## Mobilités d'élèves

Une mobilité doit être validée par le site de départ **et** par le site
d'arrivée. Ouvrez la demande avec **Examiner** :

- le bloc de votre site propose **Approuver l'origine** ou **Approuver la
  destination** ; pour l'arrivée, choisissez la classe d'accueil ;
- le bloc de l'autre site indique **En attente de la validation de ce
  site** tant qu'il n'a pas répondu.

Le transfert s'exécute dès que les deux parts sont validées, dans n'importe
quel ordre. Vous pouvez aussi **Refuser** la demande, avec un motif.

## Mutations de personnel

Une seule décision suffit : **Approuver** applique le changement de site,
**Refuser** demande un motif. Les directions des deux sites sont prévenues ;
la première qui décide clôt la demande.

## Dépenses

Ouvrez une dépense pour voir son montant, sa description et son
justificatif, puis **Approuver** ou **Refuser**.

Au-delà du seuil, la fiche l'indique — _Montant au-delà du seuil de
validation de la direction de site_ — et la décision revient à la direction
générale ou à un administrateur. Vous n'êtes alors pas notifié de ces
dépenses, mais vous les voyez dans la liste de vos sites.

L'administrateur fixe ce seuil dans
[Paramètres de l'application → Approbations](/guide/admin/parametres-application#approbations).

## Classes en sureffectif

Quand une classe de votre site reçoit un élève alors qu'elle est pleine,
vous recevez une notification _Classe en sureffectif_ : qui a forcé
l'affectation, l'effectif atteint et le **motif** saisi. Il n'y a rien à
valider : c'est une information, pour que ces dépassements ne passent plus
inaperçus.

## Recevoir les demandes sur votre téléphone

Dans **Paramètres → Notifications**, activez les notifications sur votre
téléphone. Chaque nouvelle demande arrive alors en notification ; un appui
ouvre un écran simplifié, sans menu, avec les boutons pour décider.
