const HEADING_OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.5,
  rootMargin: '0px 0px -80% 0px',
}

export type HeadingObservation = {
  slug: string
  y: number
  onEnterView: (slug: string) => void
  onLeaveView: (
    slug: string,
    entry: IntersectionObserverEntry,
    y: number
  ) => void
}

const observations = new WeakMap<Element, HeadingObservation>()
const observedNodes = new Set<Element>()

let sharedObserver: IntersectionObserver | null = null

const handleEntries = (entries: IntersectionObserverEntry[]) => {
  for (const entry of entries) {
    const observation = observations.get(entry.target)
    if (!observation) continue

    const inView = entry.isIntersecting && entry.intersectionRatio >= 0.5
    if (inView) observation.onEnterView(observation.slug)
    else observation.onLeaveView(observation.slug, entry, observation.y)

    observation.y = entry.boundingClientRect.y
  }
}

const getSharedObserver = () => {
  if (typeof IntersectionObserver === 'undefined') return null
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      handleEntries,
      HEADING_OBSERVER_OPTIONS
    )
  }
  return sharedObserver
}

/** Register a heading on the shared article scroll-spy observer. */
export const observeHeading = (
  node: Element,
  observation: HeadingObservation
) => {
  const observer = getSharedObserver()
  if (!observer) return () => undefined

  observation.y = Infinity
  observations.set(node, observation)
  observer.observe(node)
  observedNodes.add(node)

  return () => {
    if (observations.get(node) !== observation) return
    observer.unobserve(node)
    observations.delete(node)
    observedNodes.delete(node)
    if (observedNodes.size === 0) {
      observer.disconnect()
      sharedObserver = null
    }
  }
}
