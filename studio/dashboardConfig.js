export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebef49868f98642ee01f8e1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio2-studio-qpnw4p12',
                  apiId: 'ddb4d947-b048-44ba-8426-72f77ce39974'
                },
                {
                  buildHookId: '5ebef49858e878d7c34bbde4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio2-web-bvxvqmrd',
                  apiId: '6e3cfd14-6cf0-4bd4-8f3e-d924f3f661bc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Oluwalogoye/sanity-gatsby-portfolio2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio2-web-bvxvqmrd.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
