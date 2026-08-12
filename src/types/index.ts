export interface SocialLink {
  label: string
  href: string
  icon: 'instagram' | 'facebook' | 'linkedin' | 'tiktok'
}

export type ServiceType = 'web' | 'app' | 'system' | 'ads' | 'comments-remover'

export interface QualificationFormData {
  firstName: string
  lastName: string
  whatsapp: string
  service: ServiceType | ''
}
