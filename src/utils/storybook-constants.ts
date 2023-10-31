import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'

const sections = [
  [
    {
      Icon: APIGuidesIcon,
      title: 'Guides',
      description: 'Guides description',
      link: '#',
    },
  ],
  [
    {
      Icon: APIReferenceIcon,
      title: 'Reference',
      description: 'Reference description',
      link: '#',
    },
  ],
]

const navigation = {
  navbar: [
    {
      documentation: 'Guides',
      slugPrefix: 'docs/guides',
      categories: [
        {
          name: 'Getting Started',
          slug: 'getting-started',
          origin: '',
          type: 'markdown',
          children: [
            {
              name: 'Plataform overview',
              slug: 'getting-started-platform-overview',
              origin: '',
              type: 'markdown',
              children: [],
            },
          ],
        },
      ],
    },
  ],
}

export const exampleContextProps = {
  sections: sections,
  isPreview: false,
  sectionSelected: '',
  fallback: navigation,
}
