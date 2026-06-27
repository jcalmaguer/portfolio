import type { HeroData } from '../data/types'

function renderSocialLinks(social: HeroData['social']): string {
  return social.map(link => `
    <a href="${link.href}" target="_blank" rel="noopener noreferrer">
      ${link.label}
    </a>
  `).join('')
}

export function renderHero(data: HeroData): string {
  return `
    <section class="hero">
      <div class="hero__content">
        <span class="hero__location">${data.location}</span>
        <h1 class="hero__name">${data.name}</h1>
        <h2 class="hero__title">${data.title}</h2>
        <p class="hero__description">${data.description}</p>
        <div class="hero__actions">
          <a href="${data.cta.href}" class="hero__cta">${data.cta.label}</a>
          <div class="hero__social">
            ${renderSocialLinks(data.social)}
          </div>
        </div>
      </div>
    </section>
  `
}