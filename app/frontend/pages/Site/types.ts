export interface SiteType {
  id: number
  name: string
  user_id: string
}

export type SiteFormType = Omit<SiteType, 'id'>
