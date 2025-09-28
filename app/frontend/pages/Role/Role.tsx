import { RoleType } from './types'

interface RoleProps {
  role: RoleType
}

export default function Role({ role }: RoleProps) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Name:</strong>
        {role.name?.toString()}
      </p>
    </div>
  )
}
