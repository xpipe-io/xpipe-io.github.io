/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Information',
      collapsible: true,
      collapsed: false,
      items: [
        'directories',
        'security',
      ]
    },
    {
      type: 'category',
      label: 'XPipe CLI',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'cli/index'},
      items: [
        'cli/basics',
        //'cli/example',
        //'cli/tips',
        {
          type: 'category',
          label: 'Manpages',
          collapsible: true,
          collapsed: true,
          items: [
            {type: 'autogenerated', dirName: 'cli/man'}
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {type: 'doc', id: 'troubleshooting'},
      collapsible: true,
      collapsed: false,
      items: [
        'two-step-connections',
        'license-activation',
        'ssh-agent-socket',
      ]
    },
    {
      type: 'category',
      label: 'Legal',
      collapsible: true,
      collapsed: false,
      items: [
          'license',
          'terms-of-service',
          'end-user-license-agreement',
          'privacy-policy',
          'reporter-privacy-policy'
        ]
    }
  ],
};

module.exports = sidebars;
