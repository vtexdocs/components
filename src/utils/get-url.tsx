export const getFeedbackURL = (currentUrl?: string) => {
  const encodedUrl = currentUrl ? encodeURIComponent(currentUrl) : ''
  return `https://docs.google.com/forms/d/e/1FAIpQLSfmnotPvPjw-SjiE7lt2Nt3RQgNUe10ixXZmuO2v9enOJReoQ/viewform?entry.1972292648=developers.vtex.com&entry.1799503232=${encodedUrl}`
}

export const getGithubURL = () => {
  return `https://github.com/vtex-apps`
}

export const getDeveloperPortalURL = () => {
  return `https://developers.vtex.com/`
}

export const getHelpCenterURL = () => {
  return `https://help.vtex.com/`
}

export const getCommunityURL = () => {
  return `https://community.vtex.com/?_ga=2.198523433.743584735.1647618303-1974737580.1645714642`
}

export const getLearningCenterURL = () => {
  return 'https://learn.vtex.com/'
}

export const getSupportURL = () => {
  return 'https://help.vtex.com/en/support'
}

export const getNewsletterURL = (locale: 'en' | 'pt' | 'es' = 'en') => {
  return `https://vtexhelp.myvtex.com/educationnewsletter/${locale}`
}

export const getPrivacyNoticeURL = (locale: 'en' | 'pt' | 'es' = 'en') => {
  const localeMap = { en: 'us-en', pt: 'pt-br', es: 'es-mx' }
  return `https://vtex.com/${localeMap[locale]}/trust/general-external-privacy-notice/`
}

export const getLinkedinURL = () => {
  return 'https://linkedin.com/company/vtex'
}

export const getFacebookURL = () => {
  return 'https://www.facebook.com/vtexcommerce/'
}

export const getInstagramURL = () => {
  return 'https://www.instagram.com/vtexbrasil/'
}

export const getYoutubeURL = () => {
  return 'https://www.youtube.com/c/VTEX-Commerce/featured'
}

export const getTwitterURL = () => {
  return 'https://twitter.com/vtexonline'
}
