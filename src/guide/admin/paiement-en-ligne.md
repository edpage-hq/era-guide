---
layout: doc
---

# Paiement en ligne

Le paiement en ligne permet aux parents de régler les frais de scolarité
depuis leur espace, par mobile money (Flooz ou Mixx by Yass). Tant qu'il
n'est pas activé, le bouton **Payer en ligne** n'apparaît pas côté
parents : ils paient à la caisse, comme d'habitude.

La page s'ouvre par **Finances → Paiement en ligne**. Elle n'est visible
que par les administrateurs.

## Où en est votre établissement

Le haut de la page résume la situation :

- **Non activé** : les parents ne peuvent pas encore payer en ligne ;
- **Actif** : l'opérateur de paiement, les moyens acceptés, la majoration
  éventuelle (voir plus bas), la date d'activation et qui l'a configuré ;
- **Suspendu** : le paiement en ligne a été coupé, sans perdre sa
  configuration. Il peut être réactivé à tout moment.

## Demander l'activation

Le paiement en ligne passe par un compte marchand ouvert au nom de
l'établissement chez l'opérateur de paiement. C'est edPage qui l'ouvre et
le relie à ERA.

1. Remplissez le formulaire **Demander l'activation** :
   - la **raison sociale** de l'établissement ;
   - le **responsable légal** ;
   - le **RCCM** et le **NIF**, si vous les avez sous la main ;
   - un **téléphone** et un **e-mail** de contact ;
   - le **numéro de reversement des fonds**, celui sur lequel l'opérateur
     vous reversera les paiements des parents ;
   - un **message**, si besoin.
2. Cliquez sur **Envoyer la demande**.

edPage vous recontacte ensuite pour convenir de la mise en place : c'est un
service payant, réglé directement auprès d'edPage, en dehors de la
plateforme. Les pièces justificatives demandées par l'opérateur sont
échangées à ce moment-là.

Pendant le traitement, la page indique où en est votre demande et affiche
les éventuelles précisions d'edPage. Une fois le compte ouvert, edPage
active le paiement en ligne et les administrateurs reçoivent un e-mail :
les parents voient le bouton **Payer en ligne** dès cet instant.

::: info Vous ne voyez pas le formulaire ?
Il disparaît quand le paiement en ligne est actif, et tant qu'une demande
est en cours de traitement. Sur une installation autonome, il n'apparaît
que si l'adresse d'envoi des demandes a été renseignée sur le serveur :
contactez edPage directement si ce n'est pas le cas.
:::

## La majoration des paiements en ligne

L'opérateur prélève une commission sur chaque transaction. Pour ne pas
alourdir les frais payés à la caisse, une **majoration** peut s'appliquer
aux seuls paiements en ligne : avec une majoration de 2,5 %, un parent qui
règle 50 000 F en ligne est débité de 51 250 F, et c'est bien 50 000 F qui
sont portés au crédit de ses frais.

Le parent voit la majoration et le total débité avant de valider. Le reçu
indique le montant crédité, les frais de paiement en ligne et le total
débité. Les paiements enregistrés à la caisse ne sont jamais majorés.

Sans majoration, c'est à l'établissement d'intégrer la commission dans ses
tarifs.

## Installation autonome : configurer vous-même

Si votre établissement est seul sur son installation, la section
**Configuration** permet de saisir vous-même le compte marchand, sans
intervenir sur le serveur. Ces réglages remplacent ceux du fichier de
configuration du serveur.

1. Choisissez l'**Opérateur**.
2. Saisissez la **Clé d'API** fournie par l'opérateur. Une fois
   enregistrée, elle n'est plus jamais réaffichée : laissez le champ vide
   pour la conserver, ou saisissez-en une nouvelle pour la remplacer.
3. Indiquez la **Majoration des paiements en ligne**, en pourcentage (0
   pour aucune).
4. Cochez **Les parents peuvent payer en ligne**.
5. Cliquez sur **Enregistrer les modifications**.
6. Copiez l'**Adresse de retour (webhook)** qui apparaît, et collez-la
   dans le tableau de bord de l'opérateur comme adresse de confirmation
   des paiements. C'est elle qui fait passer les paiements de « En
   attente » à « Payé ». Gardez-la pour vous : elle est secrète.

Pour suspendre le paiement en ligne, décochez **Les parents peuvent payer
en ligne** et enregistrez : la configuration est conservée.

Les écoles hébergées par edPage n'ont pas cette section : edPage configure
le compte pour elles.
