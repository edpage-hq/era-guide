import type { DefaultTheme, LocaleInterface, NavType, SidebarItemType } from '@viteplus/versions'

export const en: LocaleInterface = {
  lang: 'en',
  label: 'English',
  description: 'ERA user guide — what to do and how to do it, for every actor of the app.',

  themeConfig: {
    nav: nav(),
    siteTitle: 'ERA Guide',

    sidebar: {
      '/en/guide/': { base: '/en/guide/', items: sidebarGuide() },
      '/en/admission/': { base: '/en/admission/', items: sidebarAdmission() },
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://edpage.net" target="_blank">edPage</a>`,
    },
  },
}

function nav(): NavType {
  return {
    root: [
      {
        text: 'User guide',
        link: '/en/guide/prise-en-main',
        activeMatch: '/en/guide/',
      },
      {
        text: 'Era Admission',
        link: '/en/admission/',
        activeMatch: '/en/admission/',
      },
      {
        text: 'Support',
        items: [
          {
            text: 'Release notes',
            link: 'https://github.com/edpage-hq/era-guide/releases',
            target: '_blank',
            rel: 'noopener',
          },
          {
            text: 'Report a problem',
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

// Note: link slugs deliberately match the French sidebar's — every content
// page keeps the same file/folder name in both locales (only the text is
// translated), same convention already established in era.docs' site/.
function sidebarGuide(): SidebarItemType[] {
  return [
    { text: 'Getting started', link: 'prise-en-main' },
    {
      text: 'Administrator',
      link: 'admin/',
      collapsed: true,
      items: [
        { text: 'School structure', link: 'admin/structure-etablissement' },
        { text: 'Staff and user accounts', link: 'admin/personnel-utilisateurs' },
        { text: 'Students and guardians', link: 'admin/eleves-tuteurs' },
        { text: 'Fees and pricing', link: 'admin/frais-tarification' },
        { text: 'Timetables', link: 'admin/emplois-du-temps' },
        { text: 'Report cards', link: 'admin/bulletins' },
        { text: 'Extracurricular activities', link: 'admin/activites-extrascolaires' },
        { text: 'Full demo and activity log', link: 'admin/demo-et-journal' },
      ],
    },
    {
      text: 'Front desk',
      link: 'secretariat/',
      collapsed: true,
      items: [
        { text: 'Applications', link: 'secretariat/candidatures' },
        { text: 'Site transfers', link: 'secretariat/transferts-sites' },
      ],
    },
    {
      text: 'Cash desk',
      link: 'caissier/',
      collapsed: true,
      items: [
        { text: 'Enrollments and payments', link: 'caissier/inscriptions-et-paiements' },
        { text: 'Accounting export', link: 'caissier/export-comptable' },
        { text: 'Expenses', link: 'caissier/depenses' },
      ],
    },
    {
      text: 'Teacher',
      link: 'enseignant/',
      collapsed: true,
      items: [
        { text: 'Grades and evaluations', link: 'enseignant/notes-et-evaluations' },
        { text: 'Report cards and lesson log', link: 'enseignant/bulletins-et-cahier-texte' },
        { text: 'Homeroom and schedule', link: 'enseignant/registre-et-emploi-du-temps' },
      ],
    },
    {
      text: 'School life',
      link: 'vie-scolaire/',
      collapsed: true,
      items: [
        { text: 'Attendance and absences', link: 'vie-scolaire/presences-et-absences' },
        { text: 'Discipline and councils', link: 'vie-scolaire/discipline-et-conseils' },
        { text: 'Cafeteria and transport', link: 'vie-scolaire/cantine-et-transport' },
        { text: 'Extracurricular activities', link: 'vie-scolaire/activites-extrascolaires' },
      ],
    },
    { text: 'Boarding', link: 'internat/' },
    { text: 'Infirmary', link: 'infirmerie/' },
    {
      text: 'Parent',
      link: 'parent/',
      collapsed: true,
      items: [
        { text: 'My children and their documents', link: 'parent/enfants-et-documents' },
        { text: 'Online payments', link: 'parent/paiements-en-ligne' },
        { text: 'Administrative requests', link: 'parent/demarches' },
      ],
    },
    { text: 'Student', link: 'eleve/' },
  ]
}

function sidebarAdmission(): SidebarItemType[] {
  return [
    { text: 'Overview', link: '/en/admission/' },
    {
      text: 'Schools',
      collapsed: true,
      items: [
        { text: 'Signup and demo', link: 'ecoles/inscription-et-demo' },
        { text: 'Moving to a license', link: 'ecoles/passage-licence' },
      ],
    },
    {
      text: 'edPage staff',
      collapsed: true,
      items: [{ text: 'Internal panel', link: 'staff-edpage/' }],
    },
  ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  en: {
    translations: {
      button: {
        buttonText: 'Search',
        buttonAriaLabel: 'Search',
      },
      modal: {
        displayDetails: 'Display detailed list',
        resetButtonTitle: 'Reset search',
        backButtonTitle: 'Close search',
        noResultsText: 'No results for',
        footer: {
          selectText: 'to select',
          navigateText: 'to navigate',
          closeText: 'to close',
        },
      },
    },
  },
}
