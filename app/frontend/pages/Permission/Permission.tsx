import { PermissionType } from './types'

interface PermissionProps {
    permission: PermissionType
}

export default function Permission({ permission }: PermissionProps) {
    return (
        <div>
            <p className="my-5">
                <strong className="block font-medium">Name:</strong>
                {permission.name?.toString()} - {permission.created_at_ago}
            </p>
        </div>
    )
}
