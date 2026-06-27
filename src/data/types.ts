export interface HeroData {
  name: string
  title: string
  description: string
  location: string
  cta: {
    label: string
    href: string
  }
  social: {
    label: string
    href: string
  }[]
}