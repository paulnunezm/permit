import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { RoleType } from './types'

interface NewProps {
  role: RoleType
}

export default function New({ role }: NewProps) {
  return (
    <>
      <Head title="New role" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New role</h1>

        <Form
          role={role}
          onSubmit={(form) => {
            form.transform((data) => ({ role: data }))
            form.post('/roles')
          }}
          submitText="Create Role"
        />

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
