import { useEffect, useState } from 'react'

/**
 * Viewport query that stays `null` until the client reads `matchMedia`.
 * SSR and the first hydration render stay aligned, so neither layout is
 * mounted until the breakpoint is known.
 */
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const update = () => setMatches(mediaQuery.matches)
    update()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', update)
      return () => mediaQuery.removeEventListener('change', update)
    }

    mediaQuery.addListener(update)
    return () => mediaQuery.removeListener(update)
  }, [query])

  return matches
}

export default useMediaQuery
