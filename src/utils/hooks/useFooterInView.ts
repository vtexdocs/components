import { useEffect, useState } from 'react'

const FOOTER_SELECTOR = '[data-docs-footer]'

/**
 * True when the site footer intersects the viewport, so floating mobile
 * controls can recede instead of covering footer actions.
 */
const useFooterInView = () => {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const footer = document.querySelector(FOOTER_SELECTOR)
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return inView
}

export default useFooterInView
