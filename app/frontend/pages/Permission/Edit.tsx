import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { PermissionType } from './types'

interface EditProps {
  permission: PermissionType
}

export default function Edit({ permission }: EditProps) {
  return (
    <>
      <Head title="Editing permission" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">Editing permission</h1>

        <Form
          permission={permission}
          onSubmit={(form) => {
            form.transform((data) => ({ permission: data }))
            form.patch(`/permissions/${permission.id}`)
          }}
          submitText="Update Permission"
        />

        <Link
          href={`/permissions/${permission.id}`}
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Show this permission
        </Link>
        <Link
          href="/permissions"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to permissions
        </Link>
      </div>
    </>
  )
}
