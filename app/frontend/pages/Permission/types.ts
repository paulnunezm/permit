export interface PermissionType {
  id: number
  site_id: string
  user_id: string
  name: string
}

export type PermissionFormType = Omit<PermissionType, 'id'>
