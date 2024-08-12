import React from 'react'
import { HeroSection } from './HeroSection/Hero'
import { CollectionSection } from './CollectionSection/Collection'
import { HotSection } from './HotSection/Hot'
import { SpecialSection } from './SpecialSection/Special'

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <CollectionSection />
      <HotSection />
      <SpecialSection />
    </main>
  )
}
