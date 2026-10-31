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

Le menu en haut du panel mène à ses écrans : **Établissements**,
**Vitrine**, **Demandes de contact**, **Devis** et **Paiement en ligne**
(les demandes d'activation du paiement en ligne). À droite, **Voir la vitrine**
ouvre la page publique dans un nouvel onglet et **Mot de passe** mène au
changement de votre propre mot de passe.

## Se connecter au panel

1. Rendez-vous sur la page de connexion staff, accessible sur le domaine
   central d'ERA (celui du site d'inscription, pas le sous-domaine d'un
   établissement).
2. Saisissez votre adresse e-mail et votre mot de passe **de compte
   staff** — ce compte est indépendant de tout compte d'établissement, il
   n'existe que pour l'équipe edPage.
3. Validez. Vous arrivez sur la liste des établissements.

Le formulaire de connexion staff est volontairement limité (pas
d'inscription libre, pas de double authentification, pas de « mot de
passe oublié ») : les comptes staff sont créés à la main, pas via un flux
public.

## Changer votre mot de passe

Votre compte vous est remis avec un mot de passe provisoire. Changez-le
dès la première connexion :

1. Cliquez sur **Mot de passe**, en haut à droite du panel.
2. Saisissez votre mot de passe actuel, puis le nouveau, deux fois.
3. Validez : un message confirme le changement.

Comme ce panel n'envoie aucun courriel de réinitialisation, un mot de
passe oublié ne se récupère pas depuis l'écran de connexion : demandez à
l'administrateur du serveur de vous en attribuer un nouveau, puis
changez-le à nouveau ici après vous être connecté.

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
gratuite ou vers une demande de proposition, et son configurateur de
tarifs permet à un établissement de composer sa licence et de demander un
devis.

L'écran **Vitrine** commence par l'**Apparence** de la page, reprend
ensuite ses parties dans leur ordre d'affichage, et se termine par les
**Libellés** et le **Partage et référencement** :

| Partie                  | Contenu modifiable                                    | Affichage                                           |
| ----------------------- | ----------------------------------------------------- | --------------------------------------------------- |
| **En-tête**             | Surtitre, titre et texte d'accroche                   | Toujours                                            |
| **Offre gratuite**      | Surtitre, titre et texte                              | Si **Afficher** est coché                           |
| **Pôles**               | Surtitre, titre, texte, une carte par pôle            | Si **Afficher** est coché et qu'il y a une carte    |
| **Tarifs & Devis**      | Surtitre, titre, texte, cartes tarifées et conditions | Si **Afficher** est coché et qu'il y a une carte    |
| **Mise en service**     | Surtitre, titre, texte, une carte par étape           | Si **Afficher** est coché et qu'il y a une carte    |
| **Foire aux questions** | Surtitre, titre, questions et réponses                | Si **Afficher** est coché et qu'il y a une question |
| **Contact**             | Surtitre, titre et texte au-dessus du formulaire      | Toujours                                            |

Le **surtitre** est la petite ligne en capitales au-dessus du titre d'une
partie (« LES PÔLES », « CONTACT »…). Les champs des formulaires de
contact et de devis ne se modifient pas.

### Choisir l'apparence

La partie **Apparence** règle le look de toute la page. Les couleurs et
le logo restent ceux d'ERA : la vitrine présente le produit.

- **Mise en page du haut de la page** : **Centrée** (le titre au centre,
  la présentation d'origine), **Plein écran** (une photo sur toute la
  largeur, le texte par-dessus), **Côte à côte** (le texte à gauche, la
  photo à droite) ou **Éditorial** (un grand titre, puis la photo en
  bandeau). Les pastilles des pôles sous les boutons n'apparaissent
  qu'avec la mise en page **Centrée**.
- **Image du haut de la page** : la photo de l'en-tête (PNG, JPG ou WebP,
  4 Mo au plus), avec le **voile** qui l'assombrit pour garder le texte
  lisible et le **cadrage de l'image** (centre, haut, bas).
- **Fond de la page** : halo coloré, uni ou teinté.
- **Afficher l'icône du logo** au-dessus du titre (le logo complet reste
  dans le bandeau du haut).
- **Ambiance** : les **polices**, les **angles** des cadres, la forme des
  **boutons** et le **fond des sections**. Avec **Couleur pleine**, les
  pôles et la mise en service passent sur la couleur principale ; les
  tarifs, plus denses, restent sur une teinte pour rester lisibles.

Sans changement, la page garde sa présentation d'origine.

### Modifier les libellés

La partie **Libellés** change les textes qui n'appartiennent à aucune
partie : les boutons **Créer mon espace gratuit**, **Créer mon espace**
(bandeau du haut et pied de page) et **Demander une proposition**, la
pastille **Gratuit** de l'offre gratuite, et le nom affiché dans le pied
de page après « © année » (edPage par défaut).

### Partage et référencement

La partie **Partage et référencement** règle ce que Google et les
aperçus de lien (WhatsApp, Facebook, LinkedIn…) montrent de la vitrine :

- le **titre de la page**, affiché dans l'onglet du navigateur et dans les
  résultats de recherche, suivi de « - ERA » : une soixantaine de
  caractères au plus ;
- la **description**, le résumé affiché sous le titre : environ 160
  caractères ;
- l'**image d'aperçu**, affichée quand le lien est partagé (1200 × 630
  pixels conseillés). Sans image, la photo de l'en-tête est utilisée.

Les applications de messagerie gardent souvent un aperçu en mémoire
plusieurs jours : un lien déjà partagé peut montrer l'ancienne version
un moment.

### Textes par défaut

Chaque texte se saisit en français et en anglais. Un champ laissé vide
affiche le texte par défaut de sa langue, visible en grisé dans le champ.
Vous n'avez donc à remplir que ce que vous voulez changer. Si vous
n'écrivez que dans une langue, ce texte est repris dans l'autre.

À la première mise en service, les pôles, les tarifs, les étapes et la
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

## Mettre en place le paiement en ligne d'un établissement

Un établissement demande le paiement en ligne depuis son espace
(**Finances → Paiement en ligne**). Sa demande arrive dans l'écran
**Paiement en ligne** du panel ; le nombre de nouvelles demandes
s'affiche en pastille dans le menu.

Chaque demande donne ce dont l'opérateur a besoin pour ouvrir le compte
marchand : raison sociale, responsable légal, RCCM, NIF, numéro de
reversement des fonds, ainsi que le nom, l'e-mail et le téléphone de la
personne qui a fait la demande. Les demandes ouvertes apparaissent en
premier, les plus anciennes d'abord.

1. Rappelez l'établissement pour convenir de la mise en place, qui est
   payante et se règle en dehors de la plateforme. Passez la demande en
   **En cours** et, si utile, laissez une **Note pour l'école** :
   l'établissement la lit sur sa page Paiement en ligne.
2. Une fois le paiement reçu, ouvrez à la main le compte marchand de
   l'établissement chez l'opérateur (PayGate aujourd'hui).
3. Cliquez sur **Configurer le paiement** (le même écran s'ouvre depuis
   la liste des établissements, bouton **Paiement en ligne**).
4. Choisissez l'**Opérateur**, saisissez la **Clé d'API** du compte, la
   **Majoration des paiements en ligne** éventuelle (en %, pour couvrir
   la commission de l'opérateur ; les paiements à la caisse ne sont
   jamais majorés), cochez **Les parents peuvent payer en ligne**, puis
   enregistrez.
5. Copiez l'**Adresse de retour (webhook)** affichée et collez-la dans le
   tableau de bord du compte chez l'opérateur, comme adresse de
   confirmation des paiements. Sans elle, les paiements resteraient « En
   attente ».

À l'activation, les administrateurs de l'établissement reçoivent un
e-mail, et la demande passe d'elle-même en **Activée**. Une demande non
retenue se passe en **Refusée** : l'établissement peut alors en envoyer
une nouvelle.

Chaque établissement a son propre compte marchand : les clés d'API ne
sont jamais réaffichées une fois enregistrées (laissez le champ vide pour
les garder), et le fichier de configuration du serveur n'est jamais
utilisé pour un établissement hébergé. Pour suspendre le paiement en
ligne, décochez **Les parents peuvent payer en ligne** et enregistrez.
