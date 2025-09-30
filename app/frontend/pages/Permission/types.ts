
interface PermissionGiver {
    username: String
}

export interface PermissionType {
    id: number
    name: string
    created_at_ago: string
    user: PermissionGiver
}

export type PermissionFormType = Omit<PermissionType, 'id'>
