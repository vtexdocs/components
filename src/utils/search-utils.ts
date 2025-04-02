import { Hit } from 'react-instantsearch-core'

import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import AppDevelopmentIcon from 'components/icons/app-development-icon'
import ReleaseNotesIcon from 'components/icons/release-notes-icon'
import StorefrontDevelopmentIcon from 'components/icons/storefront-development-icon'
import VTEXIOAppsIcon from 'components/icons/vtex-io-apps-icon'
import TroubleshootingIcon from 'components/icons/troubleshooting-icon'
import { IconComponent } from './typings/types'
import AddedIcon from 'components/icons/added-icon'
import DeprecatedIcon from 'components/icons/deprecated-icon'
import FixedIcon from 'components/icons/fixed-icon'
import ImprovedIcon from 'components/icons/improved-icon'
import RemovedIcon from 'components/icons/removed-icon'

export const getBreadcrumbs = (hit: Hit) => {
  const breadcrumbs: string[] = []
  breadcrumbs.push(hit.doctype)
  if (hit.doctype === 'API Reference' && hit.doccategory)
    breadcrumbs.push(hit.doccategory)
  breadcrumbs.push(hit.doctitle)
  return breadcrumbs
}

export const getRelativeURL = (url: string, locale: string) => {
  // Remove protocol and domain, leaving only the relative path
  const relativeURL = url.replace(/^(?:\/\/|[^/]+)*\//, '').replace(/^\/+/, '');

  // Extract the first segment of the relative URL (e.g., "en" from "en/docs/page")
  const firstSegment = relativeURL.split('/')[0];

  // List of supported locales
  const supportedLocales = ['en', 'pt', 'es'];

  // If the first segment is a locale
  if (supportedLocales.includes(firstSegment)) {
    // If the locale in the URL matches the current locale, return the URL as is
    if (firstSegment === locale) {
      return '/' + relativeURL;
    } else {
      // If the locale in the URL is different, replace the current locale with the new one
      return '/' + relativeURL;
    }
  } else {
    // If no locale is present in the URL, prepend the current locale
    return `/${locale}/${relativeURL}`;
  }
};

interface IconsI {
  name: string
  Icon: IconComponent
}

const iconsMap: IconsI[] = [
  {
    Icon: APIGuidesIcon,
    name: 'Guides',
  },
  {
    Icon: APIReferenceIcon,
    name: 'API Reference',
  },
  {
    Icon: AppDevelopmentIcon,
    name: 'App Development',
  },
  {
    Icon: StorefrontDevelopmentIcon,
    name: 'Storefront Development',
  },
  {
    Icon: VTEXIOAppsIcon,
    name: 'VTEX IO Apps',
  },
  {
    Icon: TroubleshootingIcon,
    name: 'Troubleshooting',
  },
  {
    Icon: ReleaseNotesIcon,
    name: 'Release Notes',
  },
]

export const getIcon = (name: string) => {
  return iconsMap.find((icon) => icon.name === name)?.Icon
}

export type ActionType =
  | 'added'
  | 'deprecated'
  | 'fixed'
  | 'improved'
  | 'removed'
export interface Action {
  type: ActionType
  title: string
  Icon: IconComponent
}

const actions: Action[] = [
  {
    type: 'added',
    title: 'Added',
    Icon: AddedIcon,
  },
  {
    type: 'deprecated',
    title: 'Deprecated',
    Icon: DeprecatedIcon,
  },
  {
    type: 'fixed',
    title: 'Fixed',
    Icon: FixedIcon,
  },
  {
    type: 'improved',
    title: 'Improved',
    Icon: ImprovedIcon,
  },
  {
    type: 'removed',
    title: 'Removed',
    Icon: RemovedIcon,
  },
]

export const getAction = (actionType: ActionType): Action => {
  return actions.find((action) => action.type === actionType) as Action
}
