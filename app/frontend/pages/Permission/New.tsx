import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { PermissionType } from './types'

interface NewProps {
  permission: PermissionType
}

export default function New({ permission }: NewProps) {
  return (
    <>
      <Head title="New permission" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New permission</h1>

        <Form
          permission={permission}
          onSubmit={(form) => {
            form.transform((data) => ({ permission: data }))
            form.post('/permissions')
          }}
          submitText="Create Permission"
        />

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
