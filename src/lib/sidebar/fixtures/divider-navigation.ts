/**
 * Navigation sample exercising the `divider` node type: a section title with no
 * article of its own, grouping the items of that section in `children`. The
 * `slug` is only an id, kept so sidebar state (open/active) has a stable key.
 */
export const dividerNavigation = [
  {
    documentation: 'tracks',
    name: {
      en: 'Start here',
      es: 'Empieza aquí',
      pt: 'Comece por aqui',
    },
    slugPrefix: 'docs/tracks',
    categories: [
      {
        name: {
          en: 'Onboarding Guide',
          es: 'Guía de Onboarding',
          pt: 'Guia de Onboarding',
        },
        slug: {
          en: 'onboarding-guide',
          es: 'guia-de-onboarding',
          pt: 'guia-de-onboarding',
        },
        origin: '',
        type: 'divider',
        children: [
          {
            name: {
              en: 'VTEX store overview',
              es: 'Visión general de la tienda VTEX',
              pt: 'Visão geral da loja VTEX',
            },
            slug: {
              en: 'vtex-store-overview',
              es: 'vision-general-de-la-tienda-vtex',
              pt: 'visao-geral-da-loja-vtex',
            },
            origin: '',
            type: 'category',
            children: [
              {
                name: {
                  en: 'Introduction to VTEX',
                  es: 'Introducción a VTEX',
                  pt: 'Introdução à VTEX',
                },
                slug: {
                  en: 'introduction-to-vtex',
                  es: 'introduccion-a-vtex',
                  pt: 'introducao-a-vtex',
                },
                origin: '',
                type: 'markdown',
                children: [],
              },
              {
                name: {
                  en: 'Implementation partners',
                  es: 'Partners de implementación',
                  pt: 'Parceiros de implementação',
                },
                slug: {
                  en: 'implementation-partners',
                  es: 'partners-de-implementacion',
                  pt: 'parceiros-de-implementacao',
                },
                origin: '',
                type: 'markdown',
                children: [],
              },
            ],
          },
          {
            name: {
              en: 'Next steps after go-live',
              es: 'Próximos pasos después del go-live',
              pt: 'Próximos passos após o go-live',
            },
            slug: {
              en: 'next-steps-after-go-live',
              es: 'proximos-pasos-despues-del-go-live',
              pt: 'proximos-passos-apos-o-go-live',
            },
            origin: '',
            type: 'markdown',
            children: [],
          },
        ],
      },
      {
        name: {
          en: 'VTEX modules: first steps',
          es: 'Módulos VTEX: primeros pasos',
          pt: 'Módulos VTEX: primeiros passos',
        },
        slug: {
          en: 'vtex-modules-first-steps',
          es: 'modulos-vtex-primeros-pasos',
          pt: 'modulos-vtex-primeiros-passos',
        },
        origin: '',
        type: 'divider',
        children: [
          {
            name: {
              en: 'Catalog 101',
              es: 'Catálogo 101',
              pt: 'Catálogo 101',
            },
            slug: {
              en: 'catalog-101',
              es: 'catalogo-101',
              pt: 'catalogo-101',
            },
            origin: '',
            type: 'category',
            children: [
              {
                name: {
                  en: 'Register a product',
                  es: 'Registrar un producto',
                  pt: 'Cadastrar produto',
                },
                slug: {
                  en: 'register-a-product',
                  es: 'registrar-un-producto',
                  pt: 'cadastrar-produto',
                },
                origin: '',
                type: 'markdown',
                children: [],
              },
            ],
          },
          {
            name: {
              en: 'Orders 101',
              es: 'Pedidos 101',
              pt: 'Pedidos 101',
            },
            slug: {
              en: 'orders-101',
              es: 'pedidos-101',
              pt: 'pedidos-101',
            },
            origin: '',
            type: 'markdown',
            children: [],
          },
        ],
      },
    ],
  },
]
