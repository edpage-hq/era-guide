---
layout: doc
---

# Recette

Cette page sert à vérifier ERA **à la main**, rôle par rôle, après chaque
mise à jour (Alpha ou SaaS), avant de l'annoncer aux utilisateurs. Elle ne
remplace pas les tests automatiques : ceux-ci vérifient déjà, à chaque
modification, que chaque rôle n'ouvre que ses pages et que les parcours
d'argent et de notes donnent les bons montants et les bonnes moyennes.

La recette se concentre sur ce qu'une machine ne voit pas : un PDF lisible
et bien mis en page, un e-mail ou un SMS réellement reçu, un fichier qui
s'envoie depuis un téléphone, un paiement réel, une impression.

## Avant de commencer

- Prévoyez **un compte de test par rôle**, sur l'établissement concerné,
  avec une adresse e-mail que vous pouvez lire.
- Faites au moins une partie de la recette **sur un téléphone**, en
  particulier les rôles parent, élève, enseignant et vie scolaire.
- Créez des données à votre nom (« Test recette ») et supprimez-les ou
  annulez-les à la fin, pour ne pas fausser les chiffres de l'établissement.
- Ne testez jamais un paiement en ligne réel avec une somme importante :
  le plus petit montant accepté suffit.

::: info Signaler un problème
Pour chaque point qui ne donne pas le résultat attendu, notez son
**numéro** (par exemple PAR-4), le compte utilisé, ce que vous avez vu et
une capture d'écran. Un point non testé se note « non fait », pas « OK ».
:::

## Tous les rôles

| #    | À faire                                                                           | Attendu                                                                           |
| ---- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| TR-1 | Se connecter avec chaque compte de test.                                          | Le tableau de bord du rôle s'ouvre, le menu ne montre que ses rubriques.          |
| TR-2 | Si la double authentification est active, se connecter sur un nouveau navigateur. | Un code à 6 chiffres arrive par e-mail en moins d'une minute et ouvre la session. |
| TR-3 | Cocher « Se souvenir de cet appareil », se déconnecter, se reconnecter.           | Aucun code n'est redemandé sur ce navigateur.                                     |
| TR-4 | Utiliser « Mot de passe oublié ».                                                 | L'e-mail arrive, le lien fonctionne une seule fois.                               |
| TR-5 | Ouvrir la cloche des notifications.                                               | Les notifications récentes s'affichent, les liens mènent à la bonne page.         |
| TR-6 | Basculer la langue en anglais, puis revenir en français.                          | Aucun texte ne reste dans l'autre langue ni n'affiche un code brut.               |
| TR-7 | Ouvrir l'aide d'une page, puis lancer une visite guidée.                          | L'aide correspond à la page, la visite va jusqu'au bout.                          |
| TR-8 | Membre du personnel : déposer une demande depuis **Mes demandes de congé**.       | La demande apparaît **En attente** et dans **À approuver** de la direction.       |

## Administration

| #     | À faire                                                                  | Attendu                                                                                                            |
| ----- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| ADM-1 | **Nouvel utilisateur** avec votre adresse, puis **Créer l'utilisateur**. | L'invitation arrive par e-mail ; le lien permet de choisir un mot de passe.                                        |
| ADM-2 | **Renvoyer l'invitation** à un compte pas encore activé.                 | Un nouvel e-mail arrive, son lien permet d'activer le compte.                                                      |
| ADM-3 | **Modifier le logo** dans les paramètres.                                | Le nouveau logo apparaît dans le menu et sur la page d'accueil publique.                                           |
| ADM-4 | **Publier / republier les bulletins** d'une classe.                      | Les parents reçoivent une seule notification ; le bulletin s'ouvre chez eux.                                       |
| ADM-5 | Ouvrir un bulletin PDF.                                                  | En-tête, notes, moyennes, rangs et appréciations sont lisibles, sans texte coupé ; l'impression tient sur la page. |
| ADM-6 | **Sauvegarder maintenant**, puis télécharger l'archive.                  | L'archive se télécharge et s'ouvre.                                                                                |
| ADM-7 | Exporter les notes d'une classe en Excel, puis réimporter le fichier.    | Le fichier s'ouvre dans Excel ; l'import ne crée ni doublon ni erreur.                                             |
| ADM-8 | Ouvrir la page d'accueil publique de l'établissement sur un téléphone.   | Textes, images et contacts s'affichent correctement, sans débordement.                                             |

## Enseignant

| #     | À faire                                                                        | Attendu                                                                             |
| ----- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| ENS-1 | Sur un téléphone, **Faire l'appel** d'une classe puis **Enregistrer l'appel**. | La liste est utilisable au doigt ; l'appel apparaît pour la vie scolaire.           |
| ENS-2 | **Nouvelle évaluation**, puis saisir les **Notes** de quelques élèves.         | Le barème est prérempli à 20 ; les notes à virgule sont acceptées.                  |
| ENS-3 | Depuis **Ma classe**, saisir des appréciations.                                | Elles apparaissent sur le bulletin PDF, sans être coupées.                          |
| ENS-4 | **Cahier de texte** → **Nouvelle entrée** avec une pièce jointe.               | L'entrée apparaît dans le **Cahier de texte** de l'élève ; la pièce jointe s'ouvre. |
| ENS-5 | Consulter son emploi du temps.                                                 | Les créneaux correspondent à ceux saisis par l'administration.                      |

## Vie scolaire

| #    | À faire                                                                     | Attendu                                                                  |
| ---- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| VS-1 | Ouvrir les **Justifications d'absence**, consulter une pièce justificative. | La pièce (photo ou PDF) s'ouvre et se lit.                               |
| VS-2 | **Approuver** une justification, **Rejeter** une autre.                     | Le parent est prévenu de chaque décision.                                |
| VS-3 | **Nouvel incident**, puis **Convoquer un conseil**.                         | Le conseil apparaît avec sa date et ses membres.                         |
| VS-4 | **Enregistrer la décision**, puis **Télécharger le procès-verbal**.         | Le PDF reprend la décision et les présents, lisible et bien mis en page. |
| VS-5 | Sur un téléphone, **Pointage cantine** avec **Tous ont mangé**.             | Le pointage s'enregistre en un geste.                                    |
| VS-6 | Sur un téléphone, **Pointage transport** en **Montée** puis **Descente**.   | Les deux pointages s'enregistrent.                                       |

## Secrétariat

| #     | À faire                                                                | Attendu                                                                    |
| ----- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| SEC-1 | Déposer une candidature depuis la page publique, avec des pièces.      | Elle arrive dans **Dossiers à traiter**, les pièces s'ouvrent.             |
| SEC-2 | **Examiner** puis **Valider** le dossier et **Affecter à une classe**. | La famille est prévenue par e-mail ; l'élève apparaît dans la classe.      |
| SEC-3 | **Refuser** un autre dossier avec un motif.                            | La famille reçoit le refus avec le motif.                                  |
| SEC-4 | Examiner la demande de transfert de site de PAR-3, puis l'approuver.   | Une fois le transfert validé, l'élève apparaît sur le site de destination. |
| SEC-5 | Changer un élève de classe.                                            | Ses frais suivent, ses notes passées restent visibles.                     |

## Caisse

| #     | À faire                                                                | Attendu                                                                      |
| ----- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| CAI-1 | Encaisser un paiement en espèces, puis **Télécharger le reçu**.        | Le reçu PDF porte le bon élève et le bon montant, et s'imprime correctement. |
| CAI-2 | Encaisser un paiement par virement avec une référence.                 | La référence figure sur le reçu.                                             |
| CAI-3 | Saisir une dépense avec un justificatif.                               | Le justificatif s'ouvre ; la dépense part en validation.                     |
| CAI-4 | Lancer l'export comptable d'un mois.                                   | Le fichier s'ouvre dans le tableur et les totaux correspondent à l'écran.    |
| CAI-5 | Si le paiement en ligne est actif, vérifier le paiement fait en PAR-5. | Il apparaît comme réglé, avec la bonne référence.                            |

## Parent

| #     | À faire                                                                                     | Attendu                                                                                    |
| ----- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| PAR-1 | Sur un téléphone, ouvrir le bulletin publié en ADM-4.                                       | Le PDF s'ouvre et se lit sur le téléphone.                                                 |
| PAR-2 | **Justifier** une absence avec une **Pièce justificative** prise en photo.                  | La photo s'envoie depuis le téléphone ; la vie scolaire la voit.                           |
| PAR-3 | **Demander un transfert** de site pour son enfant.                                          | La demande arrive au secrétariat (voir SEC-4).                                             |
| PAR-4 | Choisir des services optionnels, puis **Enregistrer mes choix**.                            | Les frais correspondants apparaissent dans le solde.                                       |
| PAR-5 | **Payer en ligne** le plus petit montant possible, puis **Envoyer la demande de paiement**. | La demande arrive sur le téléphone, le paiement aboutit après validation, le solde baisse. |
| PAR-6 | Répéter PAR-5 en refusant la validation sur le téléphone.                                   | Le paiement n'est pas compté ; le solde ne change pas.                                     |
| PAR-7 | **Télécharger le reçu** d'un paiement.                                                      | Le reçu PDF est le même que celui de la caisse.                                            |

## Élève

| #     | À faire                                            | Attendu                                                                  |
| ----- | -------------------------------------------------- | ------------------------------------------------------------------------ |
| ELV-1 | Sur un téléphone, ouvrir **Mon portail**.          | Les sections Notes, Bulletins, Documents et Cahier de texte s'affichent. |
| ELV-2 | Ouvrir le bulletin, puis la pièce jointe de ENS-4. | Les deux fichiers s'ouvrent.                                             |
| ELV-3 | Vérifier une note saisie en ENS-2.                 | La note et l'évaluation sont celles saisies par l'enseignant.            |

## Internat

| #     | À faire                                                   | Attendu                                                 |
| ----- | --------------------------------------------------------- | ------------------------------------------------------- |
| INT-1 | **Nouveau lit**, puis y affecter un élève.                | Le lit apparaît occupé.                                 |
| INT-2 | Sur un téléphone, **Présences internat** Soir puis Matin. | Les deux appels s'enregistrent ; un absent est signalé. |

## Infirmerie

| #     | À faire                                                   | Attendu                                                          |
| ----- | --------------------------------------------------------- | ---------------------------------------------------------------- |
| INF-1 | **Nouveau passage** avec l'issue **Retour en classe**.    | Le passage apparaît dans la liste ; aucun parent n'est prévenu.  |
| INF-2 | **Nouveau passage** avec l'issue **Renvoyé à la maison**. | Les parents reçoivent une notification avec le motif et l'heure. |

## Gestion documentaire

| #     | À faire                                                               | Attendu                                                                                                               |
| ----- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| GED-1 | Dans le dossier d'un élève, **Déposer** un PDF.                       | Le document apparaît sous le bon type et s'ouvre.                                                                     |
| GED-2 | Sur un téléphone, **Prendre une photo** de deux pages imprimées.      | Les pages sont réunies en un seul PDF lisible, dans l'ordre.                                                          |
| GED-3 | **Rechercher dans les documents** un mot des pages de GED-2.          | Le document est retrouvé.                                                                                             |
| GED-4 | **Reprise d'archives** de quelques fichiers, puis **Classer** chacun. | Chaque numérisation se range dans le bon dossier, aucune n'est en double.                                             |
| GED-5 | Produire un certificat de scolarité depuis un **modèle**.             | Le PDF porte le bon nom et la bonne classe, sur l'en-tête de l'établissement, et se range dans le dossier de l'élève. |

## Direction de site et direction générale

| #     | À faire                                                                                                    | Attendu                                                                                    |
| ----- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| DIR-1 | Ouvrir **À approuver**.                                                                                    | La demande de congé de TR-8 et la dépense de CAI-3 (si elle est sous le seuil) y figurent. |
| DIR-2 | **Accorder** le congé, **Refuser** la dépense avec un motif.                                               | Chaque demandeur reçoit la notification, avec le motif en cas de refus.                    |
| DIR-3 | Ouvrir le pilotage.                                                                                        | Les chiffres reprennent les paiements, absences et notes de la recette.                    |
| DG-1  | Direction générale : ouvrir **À approuver**.                                                               | Elle voit aussi les dépenses au-delà du seuil et les demandes de tous les sites.           |
| DG-2  | Faire saisir par la caisse une dépense au-delà du seuil, puis ouvrir **À approuver** en direction de site. | La dépense n'y figure pas ; elle n'apparaît que chez la direction générale.                |

## À la fin

- Annulez ou supprimez les données « Test recette » créées pendant la
  recette, y compris le remboursement du paiement en ligne de PAR-5 si
  besoin.
- Transmettez la liste des points en échec, avec leur numéro, avant
  d'annoncer la mise à jour.
