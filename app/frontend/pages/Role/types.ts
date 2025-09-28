export interface RoleType {
  id: number
  name: string
}

export type RoleFormType = Omit<RoleType, 'id'>
