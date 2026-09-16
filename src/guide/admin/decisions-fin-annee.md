---
layout: doc
---

# Décisions de fin d'année

À la fin de l'année, chaque élève passe en classe supérieure, redouble ou
quitte l'établissement. ERA propose une décision pour chaque élève à partir
de ses résultats ; **l'administrateur seul** la valide ou la change. Ces
décisions servent ensuite à [réinscrire les élèves](/guide/admin/reinscriptions)
dans l'année suivante.

## Avant de commencer

- **Les niveaux** : chaque classe doit avoir un niveau, et chaque niveau son
  niveau suivant (voir [Niveaux](/guide/admin/structure-etablissement#niveaux)).
  Cochez **Année d'examen** sur CM2, 3e et Terminale, et **Dernier niveau de
  l'établissement** sur le plus haut.
- **La moyenne de passage** de chaque département : dans
  **Paramétrage scolaire → Départements**, champ **Moyenne de passage**
  (10 par défaut).
- **La dernière période clôturée** : les décisions s'ouvrent une fois la
  dernière période de l'année clôturée (voir
  [Clôturer une année ou une période](/guide/admin/structure-etablissement#cloturer-une-annee-ou-une-periode)).
  Les moyennes ne peuvent alors plus changer. Inutile d'attendre la fin de
  l'année : les conseils de classe de juin peuvent se tenir dès la clôture du
  dernier trimestre. Avant, la page montre déjà les propositions, en lecture
  seule.

## Décider pour une classe

1. Ouvrez **Élèves et admissions → Décisions de fin d'année**.
2. Choisissez l'**Année scolaire** puis la **Classe**. La liste des classes
   indique l'avancement, par exemple « 12/35 décidés ».
3. Pour chaque élève, la page affiche sa **Moyenne annuelle** (en orange sous
   la moyenne de passage), la **Proposition** d'ERA avec sa raison, et la
   **Décision** enregistrée.

Trois façons d'enregistrer les décisions :

- **Valider les propositions (n)** : enregistre d'un coup la proposition de
  tous les élèves de la classe qui n'ont pas encore de décision. Les élèves
  déjà décidés ne sont jamais modifiés ; ceux sans proposition restent à
  décider un par un.
- **Valider la proposition**, sur la ligne d'un élève.
- **Décider** (ou **Modifier**) : choisissez la décision vous-même et ajoutez
  si besoin une **Observation**, par exemple « Admis sur décision du conseil
  de classe ».

**Annuler la décision** remet l'élève « à décider ».

Une fois l'élève réinscrit dans l'année suivante, sa décision ne peut plus
être modifiée ni annulée : la ligne affiche « Réinscrit en … ».

Chaque décision garde la moyenne annuelle sur laquelle elle a été prise,
son auteur et sa date.

## Comment ERA propose

Dans cet ordre :

| Situation                                                    | Proposition                                     |
| ------------------------------------------------------------ | ----------------------------------------------- |
| Exclusion définitive prononcée en conseil cette année        | Quitte l'établissement                          |
| Classe d'un niveau marqué **Année d'examen**                 | Aucune : à décider selon les résultats d'examen |
| Département évalué sans notes chiffrées (crèche, maternelle) | Admis                                           |
| Aucune note cette année                                      | Aucune : à décider                              |
| Moyenne annuelle au moins égale à la moyenne de passage      | Admis                                           |
| Moyenne annuelle sous la moyenne de passage                  | Redouble                                        |

Une moyenne exactement égale à la moyenne de passage est une admission.

Sur le dernier niveau de l'établissement, « Admis » s'affiche **Admis · fin
de parcours** : l'élève a réussi et quitte l'établissement.

::: tip Une proposition n'est qu'un point de départ
Un élève à 9,50 peut être admis par le conseil de classe, un élève admis
peut partir dans un autre établissement : changez simplement sa décision.
:::
