import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { RoleType } from './types'

interface EditProps {
  role: RoleType
}

export default function Edit({ role }: EditProps) {
  return (
    <>
      <Head title="Editing role" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">Editing role</h1>

        <Form
          role={role}
          onSubmit={(form) => {
            form.transform((data) => ({ role: data }))
            form.patch(`/roles/${role.id}`)
          }}
          submitText="Update Role"
        />

        <Link
          href={`/roles/${role.id}`}
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Show this role
        </Link>
        <Link
          href="/roles"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to roles
        </Link>
      </div>
    </>
  )
}
