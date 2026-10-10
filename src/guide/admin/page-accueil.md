---
layout: doc
---

# Page d'accueil

La page d'accueil est ce que voient les familles et les visiteurs en
arrivant sur l'adresse de votre établissement, avant de se connecter. Elle
se configure depuis **Administration → Page d'accueil**.

Elle peut contenir quatre parties :

| Partie                  | Contenu                                                       | Quand elle est affichée                                      |
| ----------------------- | ------------------------------------------------------------- | ------------------------------------------------------------ |
| **En-tête**             | Logo, accroche, sous-titre et boutons                         | Toujours                                                     |
| **Présentation**        | Un titre, un texte et une image                               | Dès qu'elle a du contenu, si **Afficher** est coché          |
| **Départements**        | Des cartes (titre, description, image) présentant votre offre | Dès qu'elle contient une carte, si **Afficher** est coché    |
| **Foire aux questions** | Des questions et leurs réponses, qui s'ouvrent au clic        | Dès qu'elle contient une question, si **Afficher** est coché |

Le bouton **Voir la page**, en haut à droite, ouvre la page d'accueil dans
un nouvel onglet pour contrôler le résultat.

## Ce que voient les visiteurs tant que rien n'est configuré

Une section vide n'apparaît jamais : aucun texte d'exemple n'est montré
aux familles. Sans configuration, la page se limite donc à l'en-tête,
avec votre logo, l'accroche et deux boutons.

Tant qu'aucune section n'est affichée, un bandeau apparaît en haut de la
page d'accueil pour les **administrateurs uniquement** : « Votre page
d'accueil n'affiche que l'essentiel ». Son bouton **Configurer** mène à
l'éditeur. Les visiteurs ne le voient pas.

## Suivre l'état de chaque partie

En haut de l'éditeur, quatre vignettes résument l'état de chaque partie ;
le même état est rappelé en haut de chaque bloc :

- **Toujours affiché** : l'en-tête ;
- **Affichée** : la partie a du contenu et apparaît sur la page ;
- **Masquée** : la partie a du contenu, mais **Afficher cette section sur
  la page** est décoché ;
- **Vide, non affichée** : il n'y a encore rien à montrer.

Masquer une partie permet de la préparer tranquillement, par exemple
rédiger toute la FAQ, avant de la publier en cochant la case.

## Écrire dans plusieurs langues

Chaque texte se saisit une fois par langue de l'application (les champs
portent l'étiquette **FR** ou **EN**). Vous pouvez n'en remplir qu'une :
le visiteur qui consulte la page dans l'autre langue voit alors ce texte-là
plutôt qu'une partie vide.

## En-tête

- **Logo** : c'est le logo de l'établissement, le même que dans le menu.
  Il se change dans les paramètres (bouton **Modifier le logo**), voir
  [Paramètres de l'application](/guide/admin/parametres-application).
- **Accroche** et **Sous-titre** : les deux lignes affichées sous le logo.
  Laissez l'accroche vide pour afficher le nom de l'établissement, et le
  sous-titre vide pour n'en afficher aucun.
- **Boutons** : ils ne se configurent pas.
  - **Inscrire mon enfant** ouvre le formulaire d'inscription en ligne.
    Les demandes envoyées arrivent au secrétariat, voir
    [Candidatures](/guide/secretariat/candidatures).
  - **Se connecter** mène à la page de connexion. Un utilisateur déjà
    connecté voit **Mon espace** à la place.

Cliquez sur **Enregistrer les modifications** pour appliquer l'accroche et
le sous-titre.

## Apparence

Le bloc **Apparence**, en tête de l'éditeur, règle l'allure de toute la
page. Deux établissements peuvent ainsi avoir des pages très différentes.
Rien n'oblige à y toucher : sans réglage, la page garde son aspect
d'origine.

### Mise en page du haut de la page

| Mise en page      | Ce que voient les visiteurs                                                        |
| ----------------- | ---------------------------------------------------------------------------------- |
| **Carte centrée** | Le titre et les boutons dans une carte, au centre ; la photo en fond.              |
| **Plein écran**   | Votre photo sur toute la largeur, le texte en blanc par-dessus, en bas à gauche.   |
| **Côte à côte**   | Le texte à gauche, la photo à droite ; la photo passe sous le texte sur téléphone. |
| **Éditorial**     | Un grand titre, un filet, puis la photo en bandeau sur toute la largeur.           |

### Image du haut de la page

Téléversez une photo de l'établissement : PNG, JPG ou WebP, 4 Mo maximum.
L'aide sous le champ indique le format qui convient à la mise en page
choisie.

- **Voile sur l'image** assombrit la photo pour que le texte reste
  lisible. Il s'applique aux mises en page **Carte centrée** et
  **Plein écran**.
- **Cadrage de l'image** choisit la partie gardée quand la photo est
  recadrée : le centre, le haut ou le bas.

Sans photo, **Plein écran** et **Côte à côte** utilisent un dégradé aux
couleurs de l'établissement.

### Autres réglages

- **Fond de la page** : un halo coloré, un fond uni ou une légère teinte
  de la couleur principale.
- **Afficher l'icône du logo** au-dessus du titre. Le logo complet reste
  dans le bandeau du haut.

### Ambiance

L'ambiance s'applique à toute la page :

- **Polices** : sept associations, de « Standard » à « Institutionnel ».
  Chaque vignette montre un aperçu de la police ;
- **Angles** des cartes et des images : arrondis, légers ou droits ;
- **Boutons** : en pilule, arrondis ou droits ;
- **Fond des sections** : la section Départements sur une bande grise,
  sur le fond de la page, sur une teinte ou sur la couleur principale.

Cliquez sur **Enregistrer les modifications**, puis **Voir la page** pour
contrôler le résultat.

## Présentation

La partie où vous présentez l'établissement : son histoire, son projet, ce
qui le distingue.

1. Cochez **Afficher cette section sur la page**.
2. Renseignez le **Titre** et le **Texte**. Laissez une ligne vide entre
   deux paragraphes.
3. Ajoutez éventuellement une **Image** avec **Choisir une image** : PNG,
   JPG ou WebP, 4 Mo maximum. Un format paysage rend mieux.
4. Cliquez sur **Enregistrer les modifications**.

L'image n'est envoyée qu'à l'enregistrement. **Remplacer** en choisit une
autre ; **Retirer l'image** la supprime, là aussi au prochain
enregistrement. Sans image, le texte s'affiche centré sur toute la largeur.

## Départements

Une carte par département, filière ou cycle. Les cartes sont **libres** :
elles ne sont pas reliées aux départements de
[Structure de l'établissement](/guide/admin/structure-etablissement). Vous
pouvez donc présenter votre offre comme vous le souhaitez, par exemple une
seule carte « Maternelle et primaire », ou une carte pour une option qui
n'est pas un département.

### Ajouter une carte

1. Cliquez sur **Ajouter une carte**.
2. Renseignez le **Titre** (obligatoire, dans au moins une langue), la
   **Description** et, si vous le souhaitez, une **Image**.
3. Cliquez sur **Enregistrer**.

Une carte sans image affiche la première lettre de son titre sur un fond
aux couleurs de l'établissement.

### Organiser les cartes

- Les flèches **Monter** et **Descendre** changent l'ordre d'affichage.
- **Modifier** rouvre la carte ; **Supprimer** la retire définitivement,
  avec son image.
- **Titre de la section** remplace « Nos départements » ; laissez-le vide
  pour garder ce titre.

## Foire aux questions

Les questions que les familles posent le plus souvent : horaires, cantine,
modalités de paiement, démarches d'inscription…

1. Cliquez sur **Ajouter une question**.
2. Renseignez la **Question** et la **Réponse**, toutes deux obligatoires
   dans au moins une langue.
3. Cliquez sur **Enregistrer**.

Sur la page d'accueil, seules les questions sont visibles ; la réponse
s'ouvre quand le visiteur clique dessus. Les flèches, **Modifier**,
**Supprimer** et le **Titre de la section** fonctionnent comme pour les
départements.

::: tip
Les enregistrements sont immédiats : dès que vous cliquez sur
**Enregistrer**, la page d'accueil publique est à jour.
:::
