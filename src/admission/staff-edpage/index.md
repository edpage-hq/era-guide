---
layout: doc
---

# Panel interne edPage

Le panel interne Era Admission est l'outil réservé à l'équipe edPage
pour gérer le cycle de vie des établissements inscrits en ligne : accorder
une licence, clore une démonstration avant terme, ou purger un
établissement expiré. Il n'a aucun rapport avec un compte utilisateur
d'un établissement client — c'est un accès entièrement séparé.

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
