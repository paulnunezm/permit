import { PermissionType } from './types'

interface PermissionProps {
  permission: PermissionType
}

export default function Permission({ permission }: PermissionProps) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Site:</strong>
        {permission.site_id?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">User:</strong>
        {permission.user_id?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Name:</strong>
        {permission.name?.toString()}
      </p>
    </div>
  )
}
