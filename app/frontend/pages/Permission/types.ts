export interface PermissionType {
    id: number
    name: string
    created_at_ago: string
}

export type PermissionFormType = Omit<PermissionType, 'id'>
