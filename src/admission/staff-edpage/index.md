---
layout: doc
---

# Panel interne edPage

Le panel interne Era Admission est l'outil réservé à l'équipe edPage
pour gérer le cycle de vie des établissements inscrits en ligne : accorder
une licence, clore une démonstration avant terme, ou purger un
établissement expiré. C'est aussi là que l'équipe modifie la **vitrine**
d'Era Admission et traite les **demandes de contact** qu'elle reçoit. Il
n'a aucun rapport avec un compte utilisateur d'un établissement client —
c'est un accès entièrement séparé.

Le menu en haut du panel mène à ses trois écrans : **Établissements**,
**Vitrine** et **Demandes de contact**. **Voir la vitrine** ouvre la page
publique dans un nouvel onglet.

## Se connecter au panel

1. Rendez-vous sur la page de connexion staff, accessible sur le domaine
   central d'ERA (celui du site d'inscription, pas le sous-domaine d'un
   établissement).
2. Saisissez votre adresse e-mail et votre mot de passe **de compte
   staff** — ce compte est indépendant de tout compte d'établissement, il
   n'existe que pour l'équipe edPage.
3. Validez. Vous arrivez sur la liste des établissements.

Le formulaire de connexion staff est volontairement limité (pas
d'inscription libre, pas de double authentification, pas de
réinitialisation de mot de passe en self-service) : les comptes staff
sont créés à la main, pas via un flux public.

## Consulter la liste des établissements

Une fois connecté, la page « Établissements » liste tous les
établissements inscrits, avec pour chacun :

- son nom et son sous-domaine ;
- son **statut** : gratuit, démo, licencié ou expiré ;
- ses **pôles** actifs (aucun en gratuit ; tous en démo ; ceux
  effectivement licenciés en licencié ; aucun en expiré) ;
- sa **formule d'hébergement** (autonome ou clé en main) ;
- la date de fin de démo, la date jusqu'à laquelle la maintenance est
  payée, et depuis quand l'établissement est expiré, selon ce qui
  s'applique.

Chaque ligne propose ensuite les actions disponibles pour cet
établissement, décrites ci-dessous — certaines n'apparaissent que pour
certains statuts.

## Accorder une licence

Disponible pour tout établissement, quel que soit son statut actuel.

1. Sur la ligne de l'établissement concerné, cliquez sur **Licencier**.
2. Dans la boîte de dialogue, cochez les pôles à accorder (ou l'option
   « Offre complète » pour tous les pôles d'un coup). Le tarif de chaque
   pôle est rappelé à côté de son nom.
3. Renseignez, si besoin, la date jusqu'à laquelle la maintenance est
   payée. Laissée vide, elle est fixée automatiquement à un an à partir
   d'aujourd'hui.
4. Confirmez avec **Octroyer la licence**.

L'établissement passe immédiatement au statut « Licencié », avec les
pôles cochés actifs, tout en restant hébergé sur l'infrastructure edPage
(formule « Clé en main »). Si l'établissement doit finalement héberger
lui-même son installation (formule « Autonome »), la bascule se fait par
un outil en ligne de commande dédié, hors de ce panel — n'utilisez pas
cette action pour ce cas-là.

Cette action peut aussi être utilisée pour **modifier** la licence d'un
établissement déjà licencié (ajouter un pôle, prolonger la maintenance) :
il suffit de la réappliquer avec les nouvelles valeurs.

## Clôturer une démonstration manuellement

Disponible uniquement pour un établissement au statut « Démo ». L'action
n'apparaît pas sur les autres statuts.

1. Sur la ligne de l'établissement, cliquez sur **Terminer la démo**.
2. Confirmez dans la boîte de dialogue — l'action est immédiate.

L'établissement passe au statut « Expiré » et repasse en lecture seule,
exactement comme si sa démo s'était terminée naturellement à l'échéance
prévue. Utilisez cette action pour mettre fin à une démo avant son terme
normal (par exemple à la demande de l'établissement, ou en cas d'usage
abusif) — ce n'est pas nécessaire dans le cours normal des choses, la
démo se termine d'elle-même.

## Purger un établissement expiré

Disponible uniquement pour un établissement au statut « Expiré ». Cette
action est **définitive et irréversible**.

1. Sur la ligne de l'établissement, cliquez sur **Purger**.
2. Relisez attentivement le message d'avertissement dans la boîte de
   dialogue : il rappelle que l'établissement, sa base de données et son
   stockage seront supprimés immédiatement, sans délai de grâce ni
   possibilité d'annulation.
3. Confirmez avec **Supprimer définitivement**.

Dans le cours normal des choses, un établissement expiré depuis trop
longtemps est purgé automatiquement à l'issue de son délai de grâce.
Utilisez cette action manuelle uniquement pour purger un établissement
avant l'échéance automatique — par exemple à la demande explicite de
l'établissement de supprimer ses données sans attendre.

## Modifier la vitrine

La vitrine est la page publique affichée à l'adresse principale d'Era
Admission (le domaine central, pas le sous-domaine d'un établissement).
Elle présente l'offre aux établissements et mène vers l'inscription
gratuite ou vers une demande de proposition. Aucun tarif n'y figure : les
prix restent dans la proposition personnalisée envoyée à chaque
établissement.

L'écran **Vitrine** reprend les parties de la page, dans leur ordre
d'affichage :

| Partie                  | Contenu modifiable                     | Affichage                                           |
| ----------------------- | -------------------------------------- | --------------------------------------------------- |
| **En-tête**             | Titre et texte d'accroche              | Toujours                                            |
| **Offre gratuite**      | Titre et texte sur ERA Admissions      | Si **Afficher** est coché                           |
| **Pôles**               | Titre, texte et une carte par pôle     | Si **Afficher** est coché et qu'il y a une carte    |
| **Formules**            | Titre, texte et une carte par formule  | Si **Afficher** est coché et qu'il y a une carte    |
| **Mise en service**     | Titre, texte et une carte par étape    | Si **Afficher** est coché et qu'il y a une carte    |
| **Foire aux questions** | Titre, questions et réponses           | Si **Afficher** est coché et qu'il y a une question |
| **Contact**             | Titre et texte au-dessus du formulaire | Toujours                                            |

Les boutons de l'en-tête (**Créer mon espace gratuit** et **Demander une
proposition**) et les champs du formulaire de contact ne se modifient pas.

### Textes par défaut

Chaque texte se saisit en français et en anglais. Un champ laissé vide
affiche le texte par défaut de sa langue, visible en grisé dans le champ.
Vous n'avez donc à remplir que ce que vous voulez changer. Si vous
n'écrivez que dans une langue, ce texte est repris dans l'autre.

À la première mise en service, les pôles, les formules, les étapes et la
foire aux questions sont déjà remplis à partir de la proposition
commerciale. Modifiez-les ou supprimez-les librement.

### Gérer les cartes et les questions

- **Ajouter une carte** ou **Ajouter une question** ouvre un formulaire ;
  le titre (ou la question et la réponse) est obligatoire dans au moins
  une langue.
- Les flèches **Monter** et **Descendre** changent l'ordre d'affichage.
  Pour **Mise en service**, cet ordre est aussi la numérotation des étapes
  sur la page.
- **Modifier** rouvre l'élément ; **Supprimer** le retire définitivement.

Chaque bloc indique son état : **Affichée**, **Masquée** (décochée) ou
**Vide, non affichée** (aucune carte ou question). Les enregistrements
sont immédiats.

## Traiter les demandes de contact

Le formulaire de la vitrine envoie ses demandes dans l'écran **Demandes de
contact**. Le nombre de demandes encore à traiter s'affiche en pastille à
côté de son nom, dans le menu du panel.

Chaque demande indique l'établissement, le nom de la personne, la date,
la langue dans laquelle elle consultait la vitrine, son e-mail et son
téléphone (cliquables) et son message. Les demandes **À traiter**
apparaissent en premier, les plus récentes d'abord.

Une fois l'établissement recontacté, cliquez sur **Marquer comme traitée**.
**Remettre à traiter** annule ce marquage.
