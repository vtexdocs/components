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
  getHelpCenterURL,
  getInstagramURL,
  getLinkedinURL,
  getTwitterURL,
  getYoutubeURL,
} from 'utils/get-url'
import VTEXLogoFooter from 'components/icons/vtex-logo-footer'
import InstagramIcon from 'components/icons/instagram-icon'
import YoutubeIcon from 'components/icons/youtube-icon'
import FacebookCircleIcon from 'components/icons/facebook-circle-icon'
import LinkedinCircleIcon from 'components/icons/linkedin-circle-icon'
import styles from './styles'

export type FooterLink = {
  label: string
  href: string
}

export type FooterVariant = 'helpcenter' | 'devportal'

export type FooterProps = {
  /**
   * Which site is rendering the Footer. Help Center shows a Developer Portal
   * link; Developer Portal shows a Help Center link.
   */
  variant?: FooterVariant
  /** Overrides the default GitHub, cross-site, Community, and Feedback links. */
  links?: FooterLink[]
  githubUrl?: string
  developerPortalUrl?: string
  helpCenterUrl?: string
  communityUrl?: string
  feedbackUrl?: string
  /** App-specific locale switcher rendered at the end of the link row. */
  localeSwitcher?: ReactNode
}

const Footer = ({
  variant = 'helpcenter',
  links,
  githubUrl,
  developerPortalUrl,
  helpCenterUrl,
  communityUrl,
  feedbackUrl,
  localeSwitcher,
}: FooterProps) => {
  const { locale } = useContext(LibraryContext)
  const localizedMessages = messages[locale] ?? messages.en

  const crossSiteLink: FooterLink =
    variant === 'devportal'
      ? {
          label: localizedMessages['footer.help_center'],
          href: helpCenterUrl ?? getHelpCenterURL(),
        }
      : {
          label: localizedMessages['footer.developer_portal'],
          href: developerPortalUrl ?? getDeveloperPortalURL(),
        }

  const defaultLinks: FooterLink[] = [
    {
      label: localizedMessages['footer.github'],
      href: githubUrl ?? getGithubURL(),
    },
    crossSiteLink,
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
      href: getLinkedinURL(),
      component: <LinkedinCircleIcon sx={styles.icon} />,
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
      href: getFacebookURL(),
      component: <FacebookCircleIcon sx={styles.icon} />,
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
