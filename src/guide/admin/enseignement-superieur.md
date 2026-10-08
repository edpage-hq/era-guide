---
layout: doc
---

# Enseignement supérieur : filières, maquettes et promotions

Si votre établissement délivre des diplômes du supérieur (licence, master,
doctorat), ERA organise ses formations selon le système LMD : des
**filières**, enseignées à certains **niveaux** (L1, L2, L3…), dont la
**maquette** répartit les crédits en **unités d'enseignement (UE)**
composées d'**éléments constitutifs (EC)**.

L'espace s'ouvre par **Supérieur → Filières**. Il apparaît si votre licence
comprend l'enseignement supérieur.

## Avant de commencer

Les filières vivent dans un **département de type « Université »**, avec ses
niveaux. Créez-les d'abord dans le paramétrage scolaire :

1. **Paramétrage → Départements** : un département de type _Université_, par
   exemple « Faculté des sciences ».
2. **Paramétrage → Niveaux** : ses niveaux, dans l'ordre (L1, L2, L3, M1,
   M2).

## Créer une filière

Depuis **Filières**, le bouton **Nouvelle filière** demande :

- le **département** et le **nom** de la filière, avec un code facultatif
  (« INFO ») ;
- le **diplôme** : licence, master ou doctorat ;
- le **rythme** : semestriel par défaut, trimestriel ou annuel ;
- les **crédits par an**, 60 par défaut. Ils se répartissent à parts égales
  entre les périodes : 30 par semestre en rythme semestriel ;
- les **niveaux enseignés** : L1 à L3 pour une licence, L3 seule pour une
  licence professionnelle ;
- ses **responsables de filière**.

Le rythme et le département ne changent plus une fois la maquette commencée,
et une filière qui a déjà une maquette ou des promotions ne peut pas être
supprimée.

## Les responsables de filière

Un responsable de filière tient la maquette de **sa** filière, et de
celle-là seulement. Ce n'est pas un rôle à part : un enseignant ou un membre
du personnel garde son rôle habituel et reçoit en plus l'espace
**Supérieur**, limité aux filières dont il a la charge. La création et la
modification des filières restent réservées à l'administrateur.

## Construire la maquette

Le bouton **Maquette** d'une filière ouvre sa maquette pour une année
universitaire, choisie en haut de la page. Elle est présentée niveau par
niveau, puis période par période.

1. **Ajouter une UE** dans la période voulue : un nom, un code facultatif,
   et si elle est **optionnelle** (proposée au choix).
2. Dans l'UE, **Ajouter un EC** : son nom, ses **crédits**, son
   **coefficient** (par défaut égal aux crédits) et son volume horaire en
   CM, TD et TP.

Les crédits sont portés par les EC : ceux d'une UE sont la somme de ses EC,
ils ne peuvent donc jamais se contredire.

Une UE **optionnelle** est un choix, parmi quelques-unes ou librement dans
l'offre de la période : ses crédits **complètent** ceux des UE obligatoires
jusqu'au total de la période. Avec 24 crédits obligatoires, chaque étudiant
choisit 6 crédits d'options pour arriver à 30.

::: tip Le compteur de crédits
Chaque période affiche ses crédits face à ce qu'elle doit porter. Sans
options, par exemple **28 / 30 crédits**. Avec des options,
**24 / 30 crédits obligatoires**, suivi de ce qui reste à compléter et des
crédits proposés : « 6 à compléter en options, sur 12 crédits proposés ». Le
compteur passe au vert quand l'offre permet d'arriver au compte.
:::

Les flèches réordonnent les UE d'une période et les EC d'une UE.

## Une maquette par année

Chaque année universitaire a sa propre maquette. Modifier celle de cette
année ne change jamais ce qu'a suivi une promotion précédente.

Une nouvelle année démarre vide. ERA vous propose alors de **reprendre la
maquette de l'année précédente** en un clic : elle est copiée telle quelle,
vous l'ajustez ensuite. L'ancienne reste intacte, et une année qui a déjà
une maquette n'est jamais écrasée.

Quand une année scolaire est **clôturée**, sa maquette l'est aussi : elle
reste consultable mais ne peut plus être modifiée.

## Les promotions

Une **promotion** (par exemple « L1 Informatique 2026-2027 ») est une classe
d'un département universitaire. Lorsque vous créez une classe dans un tel
département, ERA demande la **filière** qu'elle suit, puis son **niveau**,
choisi parmi ceux de la filière.

Une promotion n'a ni bulletins, ni décisions de fin d'année, ni
réinscription en masse : ces écrans du scolaire l'ignorent. Ses étudiants
passent d'une année à l'autre d'après les décisions du jury de la filière
(voir [Le passage à l'année suivante](#le-passage-a-l-annee-suivante)).

Les étudiants y entrent par une [candidature](/guide/secretariat/candidatures#une-candidature-a-l-universite)
qui vise la filière et le niveau.

## L'admission sélective

Une filière peut recruter sur dossier : médecine, écoles d'ingénieurs,
masters à capacité limitée. Dans sa fiche, cochez **Admission sélective**,
puis :

- fixez les **places par niveau d'entrée**, offertes chaque année (laissez
  vide pour ne pas limiter un niveau) ;
- désignez la **commission d'admission**. Comme les responsables de
  filière, ses membres gardent leur rôle habituel et reçoivent en plus
  **Supérieur → Admissions**, limité aux filières dont ils font partie.

Les candidatures à cette filière passent alors devant la commission avant
toute inscription. Le formulaire prévient le candidat que son dossier sera
examiné.

### Décider des candidatures

**Supérieur → Admissions** liste les filières sélectives, niveau par
niveau : places prises, dossiers à examiner, liste d'attente, pour l'année
choisie en haut de la page. Le tableau de bord signale aussi aux membres de
la commission les dossiers qui les attendent.

Un niveau ouvre le bureau de la commission. Les dossiers à examiner
viennent d'abord, dans l'ordre d'arrivée, puis les admis, la liste
d'attente dans l'ordre de vos décisions, les inscrits et les refusés. Les
pièces jointes s'ouvrent depuis la ligne du candidat.

Le bouton **Décider** propose :

- **Admettre** : le candidat prend une place. Quand toutes les places du
  niveau sont prises, ERA refuse l'admission : placez-le en liste d'attente
  ou augmentez le nombre de places ;
- **Placer en liste d'attente** ;
- **Refuser**, avec un motif ;
- **Remettre à examiner**.

Le candidat est prévenu par e-mail quand vous l'admettez, le placez en
liste d'attente ou le refusez (sur son adresse, ou celle de ses tuteurs
s'il n'en a pas donné). Le motif d'un refus ne lui est pas communiqué.

Une note facultative accompagne la décision ; le secrétariat la voit, pas
le candidat. Une décision reste modifiable jusqu'à l'inscription : si un
admis se désiste, refusez-le avec le motif « désistement » et admettez le
premier de la liste d'attente.

Le secrétariat inscrit ensuite les admis dans une promotion de la filière,
du niveau et de l'année demandés.

## L'inscription pédagogique

Le bouton **Promotions** d'une filière liste ses promotions pour l'année
choisie, avec leur effectif. Une promotion dont le niveau n'a pas encore de
maquette pour cette année est signalée.

**Inscriptions pédagogiques** ouvre la page d'une promotion :

- en haut, ses UE période par période, obligatoires et optionnelles ;
- en dessous, ses étudiants, avec pour chaque période leurs crédits et les
  UE optionnelles qu'ils ont choisies.

Chaque étudiant suit **toutes les UE obligatoires** de son niveau : rien à
saisir pour elles, et une UE ajoutée à la maquette s'applique à toute la
promotion. Ses **UE optionnelles** se choisissent avec le bouton
**Options** de sa ligne : cochez celles qu'il suit, puis enregistrez. Elles
complètent les crédits de chaque période : la fenêtre indique ce qui reste à
choisir, et ERA refuse un choix qui dépasse le total. Dans la liste, une
période complète s'affiche en vert, par exemple **30 / 30 crédits**.

L'administrateur et les responsables de la filière tiennent ces
inscriptions. Une fois l'année clôturée, elles ne changent plus.

## Les règles de validation

Chaque filière a ses propres règles, dans la section **Règles de
validation** de sa fiche. Par défaut, celles qui ont cours dans l'espace
CAMES :

| Règle                           | Par défaut          | Ce qu'elle décide                                                       |
| ------------------------------- | ------------------- | ----------------------------------------------------------------------- |
| Part du contrôle continu        | 40 %                | La note d'un EC : contrôle continu et examen pondérés                   |
| Note de validation              | 10/20               | Une UE est validée quand sa moyenne l'atteint                           |
| Note éliminatoire               | aucune              | Un EC en dessous empêche son UE d'être validée, même par compensation   |
| Compensation entre UE           | au sein du semestre | Une moyenne de période (ou d'année) suffisante valide les UE en dessous |
| Plancher de compensation        | aucun               | Une UE sous ce plancher n'est jamais compensée                          |
| Après le rattrapage             | la meilleure note   | La note de rattrapage, la meilleure des deux, ou le rattrapage plafonné |
| Crédits pour passer avec dettes | tous                | En dessous, la proposition est le redoublement                          |

La moyenne d'une UE pondère ses EC par leurs coefficients ; celle d'une
période ou de l'année pondère les UE par leurs crédits. Une UE validée ou
compensée rapporte ses crédits.

## Enseignants et notes

Le bouton **Enseignements et notes** d'une promotion liste ses EC, période
par période. Choisissez l'enseignant de chacun, puis **Enregistrer les
enseignants** : il retrouve ses feuilles dans **Supérieur → Notes des EC**
(voir [Notes des EC](/guide/enseignant/notes-superieur)). Les responsables
de la filière et l'administrateur peuvent aussi ouvrir chaque feuille, en
session normale comme en rattrapage.

## Les résultats

Le bouton **Résultats** d'une promotion donne, pour chaque étudiant, la
moyenne et les crédits de chaque période et de l'année, avec ce que les
règles proposent : **Admis**, **Admis avec dettes** ou **Redouble**. Tant
qu'une note manque, l'étudiant reste « Notes incomplètes ».

Dépliez un étudiant pour voir ses UE : moyenne, crédits et statut
(validée, compensée, non validée), avec la note de chaque EC et, après un
rattrapage, celle de la session normale.

Ces résultats se recalculent à chaque note saisie. La décision revient au
jury de la filière. Avant la délibération de la session normale, un
étudiant à qui il manque des crédits est proposé **au rattrapage**.

## Les délibérations

Le **jury** se compose dans la fiche de la filière. Comme les responsables,
ses membres gardent leur rôle habituel et reçoivent **Supérieur →
Délibérations**, qui liste les promotions de leurs filières et où en est
chaque session : à délibérer, en cours, publiée.

Le jury délibère deux fois : après la **session normale**, puis après le
**rattrapage**, qui ne s'ouvre qu'une fois la première délibération close.

Pour chaque étudiant, la page donne la moyenne et les crédits de l'année et
la décision proposée par les règles. Le bouton **Décider** permet :

- de suivre la proposition, ou de fixer une autre décision : **Admis**,
  **Au rattrapage** ou **Exclu** après la session normale ; **Admis**,
  **Admis avec dettes**, **Redouble** ou **Exclu** après le rattrapage ;
- d'ajouter des **points de jury** à une UE : ils s'ajoutent à sa moyenne,
  jusqu'à 20, avant qu'elle soit jugée, mais ne lèvent pas une note
  éliminatoire ;
- de laisser une note.

Le rattrapage reprend les points de jury donnés après la session normale.

### Clore et publier

**Clore et publier** publie les décisions avec les résultats sur lesquels
elles reposent. Sans décision du jury, c'est la proposition qui est
publiée ; un étudiant dont des notes manquent doit d'abord recevoir une
décision. La clôture :

- fige les notes de la session : elles ne peuvent plus être modifiées ;
- prévient chaque étudiant qui a un compte, par e-mail et dans ses
  notifications ;
- affiche ses résultats dans son espace, sous **Mes résultats**.

Seul l'administrateur peut rouvrir une délibération (celle du rattrapage
avant celle de la session normale), et plus du tout une fois des
étudiants de la promotion inscrits dans l'année suivante. Les étudiants gardent les résultats
publiés jusqu'à la clôture suivante.

### Les relevés de notes

Une fois la délibération close, **Relevés de notes (PDF)** imprime en un
seul document le relevé de chaque étudiant de la promotion, une page
chacun. Pour un seul étudiant, ouvrez sa ligne puis **Relevé de notes**.
L'administrateur, les responsables de la filière et les membres de son
jury peuvent les imprimer ; la scolarité aussi, depuis
[Relevés et attestations](../secretariat/releves-attestations.md). Le relevé
porte le lieu de naissance de l'étudiant quand sa fiche l'indique, et son
matricule si l'établissement l'utilise.

Le relevé reprend ce que le jury a publié, sans rien recalculer :

- les UE semestre par semestre, numérotés sur tout le cycle (une
  deuxième année montre les semestres 3 et 4) ;
- la note de chaque EC, puis la moyenne, les crédits et le résultat de
  chaque UE : validée, compensée, acquise ou non validée ;
- la moyenne et les crédits de chaque semestre et de l'année ;
- la mention : Passable à partir de la note de validation de la filière,
  Assez bien à partir de 12, Bien à partir de 14, Très bien à partir
  de 16 ;
- la décision du jury, et les dettes des années précédentes.

Le relevé porte la session dont il vient. Après le rattrapage, imprimez
celui de la session de rattrapage. Une délibération rouverte n'imprime
plus de relevé jusqu'à sa nouvelle clôture.

## Le passage à l'année suivante {#le-passage-a-l-annee-suivante}

Une fois le jury passé, le bouton **Passage à l'année suivante** d'une
promotion inscrit ses étudiants dans leur promotion de l'année suivante.
Préparez d'abord cette année : ses promotions, et sa maquette reprise de
l'année en cours.

Choisissez l'année d'arrivée. La page range les étudiants d'après la
**décision finale** du jury : celle du rattrapage, ou celle de la session
normale quand elle a réglé l'année (admis ou exclu).

- **Admis** et **admis avec dettes** : dans une promotion du niveau suivant
  de la filière. Les dettes de chacun sont listées.
- **Redoublent** : dans une promotion du même niveau.
- **Ont terminé la filière** : les admis du dernier niveau. Ils ne sont pas
  réinscrits et reçoivent leur [attestation de réussite](#les-diplomes). Un
  étudiant admis avec dettes au dernier niveau y reste pour les solder.
- **Exclus** : ils ne sont pas réinscrits.
- Les étudiants qui **attendent encore** le rattrapage ou le jury sont
  signalés, avec un lien vers les délibérations.

Pour chaque groupe, choisissez la promotion d'arrivée, sur le même site :
quand il n'y en a qu'une, elle est déjà choisie. Puis cliquez sur
**Inscrire**. Comme pour les classes du scolaire, un impayé est signalé
sans bloquer, et une promotion pleine demande votre accord.

Ce que l'année laisse suit l'étudiant :

- un étudiant qui **redouble garde ses UE validées ou compensées**. Elles
  sont marquées **Acquise** dans ses résultats, comptent avec leur moyenne
  et leurs crédits, et disparaissent de ses feuilles de notes ;
- un étudiant **admis avec dettes** emporte la liste des UE qu'il doit
  encore valider ;
- les UE optionnelles se choisissent de nouveau, sauf celles déjà acquises.

ERA retrouve chaque UE dans la maquette de la nouvelle année par son code,
ou à défaut par son nom. La page **Inscriptions pédagogiques** affiche,
sous le nom de chaque étudiant, ses UE acquises et ses dettes ; une UE
introuvable dans la nouvelle maquette y est signalée « hors maquette ».

Vous pouvez relancer le passage sans risque : un étudiant déjà inscrit dans
l'année d'arrivée n'est jamais déplacé. Une fois des étudiants inscrits,
les délibérations de la promotion ne peuvent plus être rouvertes.

### Solder ses dettes

Un étudiant qui doit une UE la repasse avec la promotion du niveau
inférieur, sur son site : il figure sur les feuilles de notes des EC de
cette UE, en session normale comme au rattrapage, avec la mention
**Dette** et le nom de sa promotion. Ses notes y sont saisies comme
celles des autres.

Chaque dette est jugée seule, sur sa propre moyenne : aucune compensation
ne la valide. Elle ne compte ni dans la moyenne ni dans les crédits de
l'année en cours, et apparaît sous ses UE dans les **Résultats** et les
**Délibérations**, rubrique « Dettes des années précédentes ».

Tant qu'une dette n'est pas validée, les règles ne proposent pas
**Admis**, même avec tous les crédits de l'année : **Au rattrapage**
après la session normale, **Admis avec dettes** après le rattrapage. Le
jury reste libre de sa décision. Au passage suivant, une dette validée
est soldée ; une dette encore due suit l'étudiant, quelle que soit la
décision.

## Les diplômés {#les-diplomes}

Dans une promotion de la dernière année de la filière, le bouton
**Diplômés** liste les étudiants que le jury a admis, à la session normale
ou au rattrapage. Un étudiant admis avec dettes n'y figure pas : il doit
d'abord les solder.

Le bouton de délivrance (par exemple **Délivrer 3 attestations**) donne à chacun une attestation de réussite
au diplôme, numérotée par diplôme et par année (`LIC-2027-2028-0001`). Elle
porte :

- le diplôme et la filière, et les crédits du cycle (les crédits annuels de
  la filière, pour chacune de ses années) ;
- la moyenne du cycle : celle des années de l'étudiant dans la filière,
  une par niveau (la dernière, s'il a redoublé), pondérées par leurs
  crédits. Un étudiant entré en cours de cycle est noté sur les années
  faites dans la filière ;
- la mention de cette moyenne, et la date de la décision du jury.

L'attestation vaut diplôme en attendant sa délivrance. Imprimez-les toutes
avec **Imprimer les attestations (PDF)**, ou une à une. L'étudiant la
télécharge aussi depuis son espace. L'administrateur et les responsables
de la filière délivrent et impriment les attestations.

Tant qu'une attestation est délivrée, les délibérations de la promotion ne
peuvent plus être rouvertes. Pour corriger une décision, l'administrateur
annule d'abord l'attestation : son numéro n'est jamais réattribué, et une
nouvelle attestation prend le numéro suivant.
