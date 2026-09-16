import type { DefaultTheme, LocaleInterface, NavType, SidebarItemType } from '@viteplus/versions'

export const fr: LocaleInterface = {
  lang: 'fr',
  label: 'Français',
  description:
    "Guide utilisateur d'ERA — quoi faire et comment le faire, pour chaque acteur de l'app.",

  themeConfig: {
    nav: nav(),
    siteTitle: 'ERA Guide',

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/admission/': { base: '/admission/', items: sidebarAdmission() },
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://edpage.net" target="_blank">edPage</a>`,
    },

    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante',
    },

    outline: {
      label: 'Sur cette page',
    },

    lastUpdated: {
      text: 'Mis à jour le',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },

    langMenuLabel: 'Changer de langue',
    returnToTopLabel: 'Retour au début de la page',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Passer an thème sombre',
    lightModeSwitchTitle: 'Passer au thème clair',
    darkModeSwitchTitle: 'Apparence',

    notFound: {
      title: 'PAGE NON TROUVEE',
      quote:
        'Mais si vous ne changez pas de direction et si vous continuez à regarder, vous risquez de vous retrouver là où vous allez.',
      linkLabel: "aller à l'accueil",
      linkText: "Me ramener à l'accueil",
      code: '404',
    },
  },
}

function nav(): NavType {
  return {
    root: [
      {
        text: 'Guide utilisateur',
        link: '/guide/prise-en-main',
        activeMatch: '/guide/',
      },
      {
        text: 'Era Admission',
        link: '/admission/',
        activeMatch: '/admission/',
      },
      {
        text: 'Support',
        items: [
          {
            text: 'Notes de version',
            link: 'https://github.com/edpage-hq/era-guide/releases',
            target: '_blank',
            rel: 'noopener',
          },
          {
            text: 'Signaler un problème',
            link: 'https://github.com/edpage-hq/era-guide/issues',
            target: '_blank',
            rel: 'noopener',
          },
        ],
      },
      { component: 'VersionSwitcher' },
    ],
  }
}

function sidebarGuide(): SidebarItemType[] {
  return [
    { text: 'Bien démarrer', link: 'prise-en-main' },
    { text: 'Demandes de congé', link: 'conges' },
    {
      text: 'Administrateur',
      link: 'admin/',
      collapsed: true,
      items: [
        { text: 'Tableau de bord', link: 'admin/tableau-de-bord' },
        { text: "Structure de l'établissement", link: 'admin/structure-etablissement' },
        { text: 'Personnel et comptes utilisateurs', link: 'admin/personnel-utilisateurs' },
        { text: 'Élèves et tuteurs', link: 'admin/eleves-tuteurs' },
        { text: 'Frais et tarification', link: 'admin/frais-tarification' },
        { text: 'Emplois du temps', link: 'admin/emplois-du-temps' },
        { text: 'Bulletins', link: 'admin/bulletins' },
        { text: 'Activités extrascolaires', link: 'admin/activites-extrascolaires' },
        { text: "Page d'accueil", link: 'admin/page-accueil' },
        { text: "Paramètres de l'application", link: 'admin/parametres-application' },
        { text: "Démo complète et journal d'activité", link: 'admin/demo-et-journal' },
      ],
    },
    {
      text: 'Secrétariat',
      link: 'secretariat/',
      collapsed: true,
      items: [
        { text: 'Candidatures', link: 'secretariat/candidatures' },
        { text: 'Transferts de site', link: 'secretariat/transferts-sites' },
        { text: 'Changements de classe', link: 'secretariat/changements-de-classe' },
      ],
    },
    {
      text: 'Caisse',
      link: 'caissier/',
      collapsed: true,
      items: [
        { text: 'Inscriptions et paiements', link: 'caissier/inscriptions-et-paiements' },
        { text: 'Export comptable', link: 'caissier/export-comptable' },
        { text: 'Dépenses', link: 'caissier/depenses' },
      ],
    },
    {
      text: 'Enseignant',
      link: 'enseignant/',
      collapsed: true,
      items: [
        { text: 'Notes et évaluations', link: 'enseignant/notes-et-evaluations' },
        { text: 'Bulletins et cahier de textes', link: 'enseignant/bulletins-et-cahier-texte' },
        { text: 'Registre et emploi du temps', link: 'enseignant/registre-et-emploi-du-temps' },
      ],
    },
    {
      text: 'Vie scolaire',
      link: 'vie-scolaire/',
      collapsed: true,
      items: [
        { text: 'Présences et absences', link: 'vie-scolaire/presences-et-absences' },
        { text: 'Discipline et conseils', link: 'vie-scolaire/discipline-et-conseils' },
        { text: 'Cantine et transport', link: 'vie-scolaire/cantine-et-transport' },
        { text: 'Activités extrascolaires', link: 'vie-scolaire/activites-extrascolaires' },
      ],
    },
    { text: 'Internat', link: 'internat/' },
    { text: 'Infirmerie', link: 'infirmerie/' },
    {
      text: 'Parent',
      link: 'parent/',
      collapsed: true,
      items: [
        { text: 'Mes enfants et leurs documents', link: 'parent/enfants-et-documents' },
        { text: 'Paiements en ligne', link: 'parent/paiements-en-ligne' },
        { text: 'Démarches administratives', link: 'parent/demarches' },
      ],
    },
    { text: 'Élève', link: 'eleve/' },
  ]
}

function sidebarAdmission(): SidebarItemType[] {
  return [
    { text: 'Présentation', link: '/admission/' },
    {
      text: 'Écoles',
      collapsed: true,
      items: [
        { text: 'Inscription et démonstration', link: 'ecoles/inscription-et-demo' },
        { text: 'Passer à une licence', link: 'ecoles/passage-licence' },
      ],
    },
    {
      text: 'Équipe edPage',
      collapsed: true,
      items: [{ text: 'Panneau interne', link: 'staff-edpage/' }],
    },
  ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  root: {
    translations: {
      button: {
        buttonText: 'Rechercher',
        buttonAriaLabel: 'Rechercher',
      },
      modal: {
        displayDetails: 'Afficher la liste détaillée',
        backButtonTitle: 'Retour',
        noResultsText: "Aucun résultat n'a été trouvé",
        resetButtonTitle: 'Réinitialiser la recherche',
        footer: {
          selectText: 'sélectionner',
          navigateText: 'naviguer',
          closeText: 'fermer',
        },
      },
    },
  },
}
