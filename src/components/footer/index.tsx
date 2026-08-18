import { useContext, type ReactNode } from 'react'
import { Box, Flex, Link } from '@vtex/brand-ui'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import {
  getCommunityURL,
  getDeveloperPortalURL,
  getFacebookURL,
  getFeedbackURL,
  getGithubURL,
  getInstagramURL,
  getLinkedinURL,
  getTwitterURL,
  getYoutubeURL,
} from 'utils/get-url'
import VTEXLogoFooter from 'components/icons/vtex-logo-footer'
import InstagramIcon from 'components/icons/instagram-icon'
import YoutubeIcon from 'components/icons/youtube-icon'
import FacebookCircleIcon from 'components/icons/facebook-circle-icon'
import TwitterCircleIcon from 'components/icons/twitter-circle-icon'
import LinkedinCircleIcon from 'components/icons/linkedin-circle-icon'
import styles from './styles'

export type FooterLink = {
  label: string
  href: string
}

export type FooterProps = {
  /** Overrides the default GitHub, Developer Portal, Community, and Feedback links. */
  links?: FooterLink[]
  githubUrl?: string
  developerPortalUrl?: string
  communityUrl?: string
  feedbackUrl?: string
  /** App-specific locale switcher rendered at the end of the link row. */
  localeSwitcher?: ReactNode
}

const Footer = ({
  links,
  githubUrl,
  developerPortalUrl,
  communityUrl,
  feedbackUrl,
  localeSwitcher,
}: FooterProps) => {
  const { locale } = useContext(LibraryContext)
  const localizedMessages = messages[locale] ?? messages.en

  const defaultLinks: FooterLink[] = [
    {
      label: localizedMessages['footer.github'],
      href: githubUrl ?? getGithubURL(),
    },
    {
      label: localizedMessages['footer.developer_portal'],
      href: developerPortalUrl ?? getDeveloperPortalURL(),
    },
    {
      label: localizedMessages['footer.community'],
      href: communityUrl ?? getCommunityURL(),
    },
    {
      label: localizedMessages['footer.feedback'],
      href: feedbackUrl ?? getFeedbackURL(),
    },
  ]

  const resolvedLinks = links ?? defaultLinks

  const socialIcons = [
    {
      href: getFacebookURL(),
      component: <FacebookCircleIcon sx={styles.icon} />,
    },
    {
      href: getInstagramURL(),
      component: <InstagramIcon sx={styles.icon} />,
    },
    {
      href: getYoutubeURL(),
      component: <YoutubeIcon sx={styles.icon} />,
    },
    {
      href: getLinkedinURL(),
      component: <LinkedinCircleIcon sx={styles.icon} />,
    },
    {
      href: getTwitterURL(),
      component: <TwitterCircleIcon sx={styles.icon} />,
    },
  ]

  return (
    <Box sx={styles.outerBox}>
      <Flex sx={styles.brandAndSocial}>
        <VTEXLogoFooter sx={styles.logo} />
        <Flex sx={styles.socialMediaIcons}>
          {socialIcons.map((icon) => (
            <Link key={icon.href} href={icon.href}>
              {icon.component}
            </Link>
          ))}
        </Flex>
      </Flex>
      <Flex sx={styles.textLinkItems}>
        {resolvedLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        {localeSwitcher ? (
          <Box sx={styles.localeSwitch}>{localeSwitcher}</Box>
        ) : null}
      </Flex>
    </Box>
  )
}

export default Footer
