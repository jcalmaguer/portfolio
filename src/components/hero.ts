import heroData from '../data/hero.json'
import { renderHero } from '../logic/heroRenderer'
import type { HeroData } from '../types'

export function mountHero(containerId: string): void {
  const container = document.getElementById(containerId)
  if (!container) return

  container.innerHTML = renderHero(heroData as HeroData)
}