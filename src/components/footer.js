import React from 'react'
import Ichthys from '../svg/ichthys.svg'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export const Footer = () => {
  const year = new Date().getFullYear()
  const { biolinkUrl } = useSiteMetadata()

  return (
    <footer className="mt-4 flex items-center justify-center gap-2 bg-surface py-6 shadow-inner">
      <div>© {year}</div>
      <a href={biolinkUrl} className="!no-underline">
        Stephen Cavender
      </a>
      <Ichthys alt="ichthys" className="w-8" />
    </footer>
  )
}
