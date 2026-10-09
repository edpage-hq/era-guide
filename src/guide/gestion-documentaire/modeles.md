---
layout: doc
---

# Modèles de documents

Un **modèle** est un document que l'établissement rédige une fois et
produit ensuite pour chacun : certificat de scolarité, attestation de
travail… Au moment de le produire, ERA remplit ses champs d'après la fiche
de la personne, le met en page sur l'en-tête de l'établissement et le
range dans son dossier.

Les modèles sont tenus par un administrateur ou le gestionnaire
documentaire, depuis l'espace **Documents** → **Modèles**.

## Rédiger un modèle

1. Cliquez sur **Nouveau modèle**.
2. Pour partir d'un texte prêt, cliquez sur **Partir d'un exemple** : ERA
   remplit un certificat de scolarité, que vous adaptez.
3. Donnez-lui un **Nom** : c'est aussi le titre imprimé en haut du
   document.
4. Choisissez sous quel type il est **Rangé sous**. Le dossier de ce type
   (élève, employé ou établissement) décide des champs proposés.
5. Rédigez le **Texte**. Laissez une ligne vide entre deux paragraphes.
6. Pour insérer un champ, placez le curseur puis cliquez sur le champ sous
   **Insérer un champ**. Il s'écrit entre accolades, par exemple
   `{student.full_name}`.
7. Cliquez sur **Enregistrer**.

L'en-tête (logo, nom et coordonnées de l'établissement), le titre et
l'espace de signature « La direction » s'ajoutent d'eux-mêmes : ne les
écrivez pas dans le texte.

Si le texte contient un champ que le dossier du type ne propose pas (un
champ d'employé dans un certificat d'élève, une faute de frappe), ERA
refuse l'enregistrement et nomme le champ en cause.

### Les champs

| Champ                             | Rempli avec                                                                   | Dossiers |
| --------------------------------- | ----------------------------------------------------------------------------- | -------- |
| Nom de l'établissement            | le nom de l'application                                                       | tous     |
| Adresse de l'établissement        | l'adresse de **Paramètres de l'application** → **Personnalisation des reçus** | tous     |
| Date du jour                      | la date où le document est produit                                            | tous     |
| Année scolaire                    | l'année scolaire en cours                                                     | tous     |
| Nom complet, Nom, Prénoms         | la fiche de l'élève                                                           | élève    |
| Date et lieu de naissance         | la fiche de l'élève                                                           | élève    |
| Matricule                         | le numéro matricule de l'élève                                                | élève    |
| Classe, Site                      | son inscription de l'année en cours                                           | élève    |
| Nom, Poste, Date d'embauche, Site | la fiche de l'employé                                                         | employé  |

Une information absente de la fiche laisse un blanc dans le document :
complétez la fiche avant de le produire.

## Produire un document

1. Ouvrez le dossier de la personne.
2. Cliquez sur **Produire depuis un modèle**. Le bouton n'apparaît que si
   un modèle existe pour un type que vous pouvez déposer dans ce dossier.
3. Choisissez le **Modèle**, puis cliquez sur **Produire**.

Le document est rangé aussitôt dans le dossier, sous le type du modèle,
avec la date du jour. Il est **validé** directement si vous pouvez valider
ce type ; sinon, il attend sa vérification comme tout dépôt. Son texte
peut être retrouvé par la recherche de la page **Documents**.

Si le type est partagé avec les familles, le document validé apparaît
aussi dans le portail de la famille et de l'élève.

## Modifier ou supprimer un modèle

**Modifier** change le texte pour les prochains documents produits ; ceux
déjà produits ne changent pas. **Supprimer** retire le modèle ; les
documents déjà produits restent dans leurs dossiers. Supprimer un type de
documents supprime aussi ses modèles.
