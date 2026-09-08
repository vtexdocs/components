export const DATE_LOCALES: Record<'en' | 'pt' | 'es', string> = {
  en: 'en-US',
  pt: 'pt-BR',
  es: 'es-MX',
}

export type ArticleDateStyle = 'long' | 'medium' | 'short'

export function parseArticleDate(value: unknown) {
  if (value == null || value === '') return undefined
  const date = new Date(String(value))
  return Number.isNaN(date.getTime()) ? undefined : date
}

export function formatArticleDate(
  date: Date,
  locale: 'en' | 'pt' | 'es',
  style: ArticleDateStyle
) {
  return new Intl.DateTimeFormat(DATE_LOCALES[locale], {
    ...(style === 'long'
      ? { month: 'long' as const, day: 'numeric' as const }
      : style === 'medium'
      ? { month: 'short' as const, day: 'numeric' as const }
      : { month: '2-digit' as const, day: '2-digit' as const }),
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}

export function formatArticleDateValue(
  value: unknown,
  locale: 'en' | 'pt' | 'es',
  style: ArticleDateStyle
) {
  const date = parseArticleDate(value)
  return date ? formatArticleDate(date, locale, style) : undefined
}
