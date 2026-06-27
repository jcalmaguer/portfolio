import heroData from '../data/hero.json'
import { renderHero } from '../logic/hero-renderer'
import type { HeroData } from '../data/types'

export function mountHero(containerId: string): void {
  const container = document.getElementById(containerId)
  if (!container) return

  container.innerHTML = renderHero(heroData as HeroData)
}